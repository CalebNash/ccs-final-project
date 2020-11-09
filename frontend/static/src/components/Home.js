import React from 'react';
import Events from './Events.js';
import ImageCarousel from './ImageCarousel'




class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {


    }

  }



  render(){
    return(
      <div>
        <h1>Home</h1>

        <div className=' row '>
        <div className='col-12'>  <Events/></div>
          <ImageCarousel/>
        </div>
      </div>
    )
  }
}

export default Home;
