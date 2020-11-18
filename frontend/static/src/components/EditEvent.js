import React from 'react';
import Cookies from 'js-cookie'
import {Modal} from 'react-bootstrap';
import AddEvent from './AddEvent'




function EventItem(props){
  return(

      <div className='list-group col-lg-3 col-12' onClick={() => props.chooseEvent(props.event.id)}>
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
      show: false,
    }
    this.handleImage = this.handleImage.bind(this);
    this.addImage = this.addImage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.chooseEvent = this.chooseEvent.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
    this.addEvent = this.addEvent.bind(this);
  }

  addEvent(event){
    const events = [...this.state.events, event];
    this.setState({events});
  }

  async componentDidMount(){
    const response = await fetch('api/v1/events/');
    const data = await response.json();
    this.setState({events:data});
  }

  handleClose(){
    this.setState({show: false});
  }

  async chooseEvent(display) {
    const eventId = this.state.events.findIndex(event => event.id === display)
    await this.setState({pickedEvent: this.state.events[eventId]})
    this.setState({preview: this.state.pickedEvent.image})
    this.setState({show: true});

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
       this.handleClose();
       console.log(this.state.pickedEvent.image);
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
       console.log('data key: ', data.key);
         this.setState({show: false});
         const events = [...this.state.events, data];
         this.setState({events});

     }

     async deleteEvent(e){
        e.preventDefault();
        const options = {
          method: 'DELETE',
          headers: {
            'X-CSRFToken': Cookies.get('csrftoken'),
          },
        };

        const handleError = (err) => console.warn(err);
        const responce = await fetch(`/api/v1/events/${this.state.pickedEvent.id}/`, options);
        const data = await responce.json().catch(handleError);
        console.log(data);
          const events = this.state.events;
          const eventId = this.state.events.findIndex(event => event.id === this.state.pickedEvent.id)
          events.splice(eventId, 1);
          this.setState({events})
          this.setState({show: false});

      }



  render() {
      const events = this.state.events.map(event => <EventItem key={event.id} event={event} chooseEvent={this.chooseEvent}/>)
    return (
      <React.Fragment>
      <div className='row event-edit-row'>
        <AddEvent addEvent={this.addEvent}/>
        {events}
      </div>
      <Modal dialogClassName='location-form-modal' show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>Edit Event</Modal.Header>
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
            <button type="submit" className="btn btn-primary mt-2" onClick={(e) => this.handleClose}>Save Event</button>
            <button type="button" className="btn btn-primary mt-2" onClick={(e) =>{ this.handleClose(); this.deleteEvent(e)}}>Delete</button>
          </form>
        </Modal.Body>
      </Modal>
      </React.Fragment>
    )
  }
}

export default EditEvent;
