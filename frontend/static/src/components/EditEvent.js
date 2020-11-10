import React from 'react';
import Cookies from 'js-cookie'




function EventItem(props){
  return(

      <div className='list-group col-3' onClick={() => props.choose(props.recipe.id)}>
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
    }
    this.handleImage = this.handleImage.bind(this);
    this.addImage = this.addImage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount(){
    const response = await fetch('api/v1/events/');
    const data = await response.json();
    this.setState({events:data});
    console.log(data);
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }


  handleImage(e){
      let file = e.target.files[0];
      this.setState({
        image: file
      });

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
       formData.append('image', this.state.image)
       formData.append('title', this.state.title)
       formData.append('body', this.state.body)
       console.log(formData);
       const options = {
         method: 'PUT',
         headers: {
           'X-CSRFToken': Cookies.get('csrftoken'),
         },
         body: formData
       };

       const handleError = (err) => console.warn(err);
       const responce = await fetch('/api/v1/events/', options);
       const data = await responce.json().catch(handleError);
       console.log(data);
       if(data.key){
         Cookies.set('Authorization', `Token ${data.key}`)
       }

     }

  render() {
      const events = this.state.events.map(event => <EventItem key={event.id} event={event}/>)
    return (
      <React.Fragment>
      <div className='row'>
        {events}
      </div>
      <form className="col-12 col-md-6 mb-5 form" onSubmit={(e) => this.addImage(e)}>
        <div className="form-group">
          <label htmlFor="image">Add picture</label>
          <input type='file' id="image" name="image" onChange={this.handleImage}/>
          <img className='image-preview' src={this.state.preview} alt=''/>
          </div>
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" name="title" value={this.state.title} onChange={this.handleChange}/>
          <label htmlFor="body">Body</label>
          <textarea rows='5' type="text" className="form-control" id="body" name="body" value={this.state.body} onChange={this.handleChange}/>
        <button type="submit" className="btn btn-primary mt-2">Add Event</button>
      </form>
      </React.Fragment>
    )
  }
}

export default EditEvent;
