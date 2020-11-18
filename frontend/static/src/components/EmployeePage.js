import React from 'react';
import EditEvent from './EditEvent';
import EditMarkers from './EditMarkers';


import EditNeeds from './EditNeeds';
import EditCarouselImage from './EditCarouselImage';
//import Cropping from './Cropping'


class EmployeePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      page: 'Events'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(display) {
    this.setState({page: display});
}

  render(){
    let page = this.state.page;
    let display;
    if(page === 'Events'){
      display = <React.Fragment><EditEvent/></React.Fragment>;
    }else if(page === 'Image Carousel'){
      display = <React.Fragment><EditCarouselImage/></React.Fragment>;
    }else if(page === 'Locations'){
      display = <React.Fragment><EditMarkers/></React.Fragment>;
    }else if(page === 'Current Needs'){
      display = <React.Fragment><EditNeeds/></React.Fragment>;
    }
    return(
      <div className=''>
        <div id="employee-pages" className="row employee-page-row">
          <section className='col-4 col-lg-2 employee-nav'>
            <h5>Home Page</h5>
            <div><button className=" btn" onClick={() => this.handleClick('Events')}>Events</button></div>
            <div><button className=" btn" onClick={() => this.handleClick('Image Carousel')}>Image Carousel</button></div>
            <h5>Resources</h5>
            <div><button className=" btn" onClick={() => this.handleClick('Locations')}>Locations</button></div>
            <div><button className=" btn" onClick={() => this.handleClick('Current Needs')}>Current Needs</button></div>
          </section>
          <section className='col-7 col-lg-9 employee-display'>
            {display}
          </section>
        </div>
      </div>
    )
  }
}

export default EmployeePage;
