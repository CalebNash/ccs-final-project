import React from 'react';
import {Carousel} from 'react-bootstrap';

class ImageCarousel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      images: [],

    }

  }

  async componentDidMount(){
    const response = await fetch('api/v1/image_carousel/');
    const data = await response.json();
    this.setState({images:data});
  }



  render(){
    console.log(this.state.newEvents);
    const images = this.state.images.map(image => <Carousel.Item key={image.id}><img className="d-block w-100" src={image.image} alt="First slide"/></Carousel.Item> );
    return(
      <div>
          <Carousel >
            {images}
        </Carousel>
      </div>
    )
  }
}

export default ImageCarousel;
