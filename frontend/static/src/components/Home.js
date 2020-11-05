import React from 'react';
import Events from './Events.js';
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
        <div className='carousel'>
          <Events/>
        </div>
      </div>
    )
  }
}

export default Home;
