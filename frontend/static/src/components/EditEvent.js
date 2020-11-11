import React from 'react';
import Cookies from 'js-cookie'
import {Modal} from 'react-bootstrap';




function EventItem(props){
  return(

      <div className='list-group col-4' onClick={() => props.chooseEvent(props.event.id)}>
        <div className='list-group-item event-preview'>
        <img src={props.event.image} alt=""/>
        </div>
        <p className='recipe-name'>{props.event.title}</p>
      </div>
  )
}




class EditEvent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      image: null,
      preview: '',
      title: '',
      body: '',
      events: [],
      pickedEvent: {},
      isEditing: false,
    }
    this.handleImage = this.handleImage.bind(this);
    this.addImage = this.addImage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.chooseEvent = this.chooseEvent.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  async componentDidMount(){
    const response = await fetch('api/v1/events/');
    const data = await response.json();
    this.setState({events:data});
    console.log(data);
  }

  handleClose(){
    this.setState({isEditng: false});
  }

  chooseEvent(display) {
    const eventId = this.state.events.findIndex(event => event.id === display)
    this.setState({pickedEvent: this.state.events[eventId]})
    this.setState({isEditing: true});

}

  handleChange(event){
    const pickedEvent = {...this.state.pickedEvent};
    pickedEvent[event.target.name] = event.target.value;
    this.setState({pickedEvent});
  }


  handleImage(e){
      let file = e.target.files[0];
      const pickedEvent = {...this.state.pickedEvent};
      pickedEvent.image = file;
      this.setState({pickedEvent});

      let reader = new FileReader();

      reader.onloadend = () => {
        this.setState({
          preview: reader.result
        });
      }
      reader.readAsDataURL(file);
    }

    async addImage(e){
       e.preventDefault();
       let formData = new FormData();
       formData.append('image', this.state.pickedEvent.image)
       formData.append('title', this.state.pickedEvent.title)
       formData.append('body', this.state.pickedEvent.body)
       console.log(formData);
       const options = {
         method: 'PUT',
         headers: {
           'X-CSRFToken': Cookies.get('csrftoken'),
         },
         body: formData
       };

       const handleError = (err) => console.warn(err);
       const responce = await fetch(`/api/v1/events/${this.state.pickedEvent.id}/`, options);
       const data = await responce.json().catch(handleError);
       console.log(data);
       if(data.key){
         Cookies.set('Authorization', `Token ${data.key}`)
       }

     }

  render() {
      const events = this.state.events.map(event => <EventItem key={event.id} event={event} chooseEvent={this.chooseEvent}/>)
    return (
      <React.Fragment>
      <div className='row'>
        {events}
      </div>
      <Modal dialogClassName='location-form-modal' show={this.state.isEditing} onHide={this.handleClose}>
        <Modal.Header closeButton>Add Event</Modal.Header>
        <Modal.Body>
          <form className="col-12 col-md-6 mb-5 form" onSubmit={(e) => this.addImage(e)}>
            <div className="form-group">
              <label htmlFor="image">Add picture</label>
              <input type='file' id="image" name="image" onChange={this.handleImage}/>
              <img className='image-preview' src={this.state.preview} alt=''/>
              </div>
              <label htmlFor="title">Title</label>
              <input type="text" className="form-control" id="title" name="title" value={this.state.pickedEvent.title} onChange={this.handleChange}/>
              <label htmlFor="body">Body</label>
              <textarea rows='5' type="text" className="form-control" id="body" name="body" value={this.state.pickedEvent.body} onChange={this.handleChange}/>
            <button type="submit" className="btn btn-primary mt-2">Add Event</button>
            <button type="button" className="btn btn-primary mt-2">Delete</button>
          </form>
        </Modal.Body>
      </Modal>
      </React.Fragment>
    )
  }
}

export default EditEvent;
