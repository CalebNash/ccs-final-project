import React from 'react';
import {Carousel} from 'react-bootstrap';

class Events extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newEvents: [],

    }

  }

  async componentDidMount(){
    const response = await fetch('api/v1/events/');
    const data = await response.json();
    this.setState({newEvents:data});
  }



  render(){
    const newEvents = this.state.newEvents.map(newEvent => <Carousel.Item key={newEvent.id}><img className="d-block w-100" src={newEvent.image} alt="First slide"/><Carousel.Caption><h3>{newEvent.title}</h3><p>{newEvent.body}</p></Carousel.Caption></Carousel.Item> );
    return(
      <div>
          <Carousel >
            {newEvents}
        </Carousel>
      </div>
    )
  }
}

export default Events;
