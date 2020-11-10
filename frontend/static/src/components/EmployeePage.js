import React from 'react';
import EditEvent from './EditEvent';
import AddEvent from './AddEvent';
import EditMarkers from './EditMarkers';
import AddMarkers from './AddMarkers';
import NeedsForm from './NeedsForm';
import CarouselImageForm from './CarouselImageForm';


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
      display = <React.Fragment><EditEvent/><AddEvent/></React.Fragment>;
    }else if(page === 'Image Carousel'){
      display = <React.Fragment><CarouselImageForm/></React.Fragment>;
    }else if(page === 'Locations'){
      display = <React.Fragment><EditMarkers/><AddMarkers/></React.Fragment>;
    }else if(page === 'Current Needs'){
      display = <React.Fragment><NeedsForm/></React.Fragment>;
    }
    return(
      <div className='container'>
        <div id="employee-pages" className="row">
          <section className='col-2'>
            <h5>Home Page</h5>
            <div><button className=" btn" onClick={() => this.handleClick('Events')}>Events</button></div>
            <div><button className=" btn" onClick={() => this.handleClick('Image Carousel')}>Image Carousel</button></div>
            <h5>Resources</h5>
            <div><button className=" btn" onClick={() => this.handleClick('Locations')}>Locations</button></div>
            <div><button className=" btn" onClick={() => this.handleClick('Current Needs')}>Current Needs</button></div>
          </section>
          <section className='col-8'>
            {display}
          </section>
        </div>
      </div>
    )
  }
}

export default EmployeePage;
