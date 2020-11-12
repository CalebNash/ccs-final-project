import React from 'react';
import Cropper from 'react-easy-crop'

class Cropping extends React.Component {
  state = {
    image: 'https://i.pinimg.com/originals/5b/22/60/5b226014d21ef1d37be5277a3a437021.jpg',
    crop: { x: 0, y: 0 },
    zoom: 1,
    aspect: 16 / 9,
  }

  onCropChange = (crop) => {
    this.setState({ crop })
  }

  onCropComplete = (croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels)
  }

  onZoomChange = (zoom) => {
    this.setState({ zoom })
  }

  render() {
    return (
      <Cropper
        image={this.state.image}
        crop={this.state.crop}
        zoom={this.state.zoom}
        aspect={this.state.aspect}
        onCropChange={this.onCropChange}
        onCropComplete={this.onCropComplete}
        onZoomChange={this.onZoomChange}
      />
    )
  }
}



export default Cropping;
