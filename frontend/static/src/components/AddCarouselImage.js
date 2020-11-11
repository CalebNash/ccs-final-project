import React from 'react';
import Cookies from 'js-cookie'
import {Modal} from 'react-bootstrap';

class AddCarouselImage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      image: null,
      preview: '',
      show: false,
    }
    this.handleImage = this.handleImage.bind(this);
    this.addImage = this.addImage.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(){
    this.setState({show: false})
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
       console.log(formData);
       const options = {
         method: 'POST',
         headers: {
           'X-CSRFToken': Cookies.get('csrftoken'),
         },
         body: formData
       };

       const handleError = (err) => console.warn(err);
       const responce = await fetch('/api/v1/image_carousel/', options);
       const data = await responce.json().catch(handleError);
       console.log(data);
       if(data.key){
         Cookies.set('Authorization', `Token ${data.key}`)
       }

     }

  render() {

    return (
      <React.Fragment>
      <button className=' col-lg-3 col-12  add-event' onClick={() => this.setState({show: true})}>
        <i className="fas fa-plus event-plus-icon"></i>
      </button>
      <Modal dialogClassName='location-form-modal' show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>Add Event</Modal.Header>
        <Modal.Body>
        <form className="col-12 col-md-6 mb-5 form" onSubmit={(e) => this.addImage(e)}>
          <div className="form-group">
            <label htmlFor="image">Add picture</label>
            <input type='file' id="image" name="image" onChange={this.handleImage}/>
            <img className='image-preview' src={this.state.preview} alt=''/>
          </div>
          <button type="submit" className="btn btn-primary mt-2" onClick={(e) => this.handleClose}>Add Image</button>
        </form>
        </Modal.Body>
      </Modal>
      </React.Fragment>
    )
  }
}

export default AddCarouselImage;
