import React from 'react';
import Cookies from 'js-cookie'

class EditBanner extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      image: null,
      preview: '',
    }
    this.handleImage = this.handleImage.bind(this);
    this.addImage = this.addImage.bind(this);
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
       const responce = await fetch('/api/v1/banner_images/', options);
       const data = await responce.json().catch(handleError);
       console.log(data);
       if(data.key){
         Cookies.set('Authorization', `Token ${data.key}`)
       }

     }

  render() {

    return (
      <React.Fragment>
      <form className="col-12 col-md-6 mb-5 form" onSubmit={(e) => this.addImage(e)}>
        <div className="form-group">
          <label htmlFor="image">Add picture</label>
          <input type='file' id="image" name="image" onChange={this.handleImage}/>
          <img className='image-preview' src={this.state.preview} alt=''/>
        </div>
        <button type="submit" className="btn btn-primary mt-2">Add Image</button>
      </form>
      </React.Fragment>
    )
  }
}

export default EditBanner;
