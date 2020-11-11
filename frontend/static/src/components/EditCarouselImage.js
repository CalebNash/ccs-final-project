import React from 'react';
import Cookies from 'js-cookie'
import {Modal} from 'react-bootstrap';
import AddCarouselImage from './AddCarouselImage'




function ImageItem(props){
  return(

      <div className='list-group col-lg-3 col-12' onClick={() => props.chooseImage(props.image.id)}>
        <div className='list-group-item event-preview'>
        <img src={props.image.image} alt=""/>
        </div>
      </div>
  )
}




class EditEvent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      image: null,
      preview: '',
      images: [],
      pickedImage: {},
      show: false,
    }
    this.handleImage = this.handleImage.bind(this);
    this.addImage = this.addImage.bind(this);
    this.chooseImage = this.chooseImage.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  async componentDidMount(){
    const response = await fetch('api/v1/image_carousel/');
    const data = await response.json();
    this.setState({images:data});
    console.log(data);
  }

  handleClose(){
    this.setState({show: false});
  }

  chooseImage(display) {
    const imageId = this.state.images.findIndex(image => image.id === display)
    this.setState({pickedImage: this.state.images[imageId]})
    this.setState({show: true});

}


  handleImage(e){
      let file = e.target.files[0];
      const pickedImage = {...this.state.pickedImage};
      pickedImage.image = file;
      this.setState({pickedImage});

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
       let formData = new FormData();
       formData.append('image', this.state.pickedImage.image)
       console.log(formData);
       const options = {
         method: 'PUT',
         headers: {
           'X-CSRFToken': Cookies.get('csrftoken'),
         },
         body: formData
       };

       const handleError = (err) => console.warn(err);
       const responce = await fetch(`/api/v1/image_carousel/${this.state.pickedImage.id}/`, options);
       const data = await responce.json().catch(handleError);
       console.log('data key: ', data.key);
         this.setState({show: false});

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
        const responce = await fetch(`/api/v1/image_carousel/${this.state.pickedImage.id}/`, options);
        const data = await responce.json().catch(handleError);
        console.log(data);

          this.setState({show: false});

      }



  render() {
      const images = this.state.images.map(image => <ImageItem key={image.id} image={image} chooseImage={this.chooseImage}/>)
    return (
      <React.Fragment>
      <div className='row event-edit-row'>
        <AddCarouselImage/>
        {images}
      </div>
      <Modal dialogClassName='location-form-modal' show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>Add Image</Modal.Header>
        <Modal.Body>
          <form className="col-12 col-md-6 mb-5 form" onSubmit={(e) => this.addImage(e)}>
            <div className="form-group">
              <label htmlFor="image">Add picture</label>
              <input type='file' id="image" name="image" onChange={this.handleImage}/>
              <img className='image-preview' src={this.state.preview} alt=''/>
            </div>
            <button type="submit" className="btn btn-primary mt-2" onClick={(e) => this.handleClose}>Add Image</button>
            <button type="button" className="btn btn-primary mt-2" onClick={(e) => this.deleteEvent(e)}>Delete</button>
          </form>
        </Modal.Body>
      </Modal>
      </React.Fragment>
    )
  }
}

export default EditEvent;
