import React from 'react';
import Cookies from 'js-cookie'
import {Modal} from 'react-bootstrap';

class AddEvent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      image: null,
      preview: '',
      title: '',
      body: '',
      show: false,
    }
    this.handleImage = this.handleImage.bind(this);
    this.addImage = this.addImage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(){
    this.setState({show: false})
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
         method: 'POST',
         headers: {
           'X-CSRFToken': Cookies.get('csrftoken'),
         },
         body: formData
       };

       const handleError = (err) => console.warn(err);
       const responce = await fetch('/api/v1/events/', options);
       const data = await responce.json().catch(handleError);
       console.log(data);
       this.props.addEvent(data)
    }

    
  render() {

    return (
      <React.Fragment>
      <div className='col-12 add-event-background'>
        <button id='add-event-btn' className='btn' onClick={() => this.setState({show: true})}>Add Event</button>
      </div>
      <Modal dialogClassName='location-form-modal' show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>Add Event</Modal.Header>
        <Modal.Body>
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
            <button type="submit" className="btn btn-primary mt-2" onClick={() => this.setState({show: false})}>Add Event</button>
          </form>
        </Modal.Body>
      </Modal>
      </React.Fragment>
    )
  }
}

export default AddEvent;
