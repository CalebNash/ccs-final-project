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
      <div className='home-body row'>
        <div className='col-12 col-md-6'>
        <div className='mission-statement row'>
          <h1 className='col-12'>Our Mission</h1>
          <ol>
            <li>Provide nutritious meals to promote good physical health.</li>
            <li>Share a clear presentation of the Gospel of Jesus Christ as we develop personal relationships with those who come to the Shelter.</li>
            <li>Equip participants with life skills (education, training, jobs, etc) to move from their current state of need to a place of self sufficiency.</li>
            <li>Engage cooperative partnerships for a common purpose among those in the business, civic, and community-minded organizations providing assistance and services to people in need of renewal mind, body, and spirit.</li>
          </ol>
        </div>

        <div className=' row '>
        <div className='col-12'><Events/></div>
        <div className='col-12'><ImageCarousel/></div>

        </div>

        </div>
      </div>
    )
  }
}

export default Home;
