import React from 'react';
import EditEvent from './EditEvent';
import EditMarkers from './EditMarkers';


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
      display = <EditEvent/>;
    }else if(page === 'Locations'){
      display = <EditMarkers/>;
    }
    return(
      <div className='container'>
        <section id="employee-pages" className="row">
          <button className=" btn" onClick={() => this.handleClick('Events')}>Events</button>
          <button className=" btn" onClick={() => this.handleClick('Locations')}>Locations</button>
        </section>
        {display}
      </div>
    )
  }
}

export default EmployeePage;
