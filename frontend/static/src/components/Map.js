import React from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      locations: [],
      loadMap: 'john',
    }
    this.renderMarkers = this.renderMarkers.bind(this);
    this.addMarkers = this.addMarkers.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount(){
    const response = await fetch('api/v1/locations/');
    const data = await response.json();
    await this.setState({locations:data});
    //this.setState({loadMap: true});
  }

  handleClick() {
    this.setState({loadMap: 'jill'});
  }

  addMarkers(map, maps){
    console.log('happy', this.state.locations);
    // for(var i = 0; i < locations.length; i++){
    //   console.log('hello');
    //   this.renderMarkers(map, maps, locations[i]);
    // }
  }


  renderMarkers(map, maps, locations){
    console.log('hello', locations);
     var infoWindow = new maps.InfoWindow({
       content: `<h5>Desiard Street Shelter</h5><p>hours: Mon - Sun 6am - 6pm</p> <a href="https://www.google.com/maps/place/807 Desiard St, Monroe, LA 71201">807 Desiard St, Monroe, LA 71201</a>`
     });
     let marker = new maps.Marker({
     position: { lat: 32.506010, lng: -92.111090 },
     map,
     title: 'Desiard Street Shelter',
     });
     marker.addListener('click', function(){
       infoWindow.open(map, marker)
     })
     return marker;
  };



  render() {
    // let googleMap;
    // const loadMap = this.state.loadmap;
    console.log(this.state.locations);
    console.log(this.state.loadMap);
    // if(loadMap === 'jill'){
    //   googleMap = <GoogleMapReact bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}} defaultCenter={{ lat: 32.5059041, lng: -92.11102670000001 }} defaultZoom={12} yesIWantToUseGoogleMapApiInternals onGoogleApiLoaded={({ map, maps }) => this.addMarkers(map, maps)}></GoogleMapReact>
    // }else if(loadMap === 'john'){
    //   googleMap = <div>hello</div>
    // }
   return (
     <div>
       <button onClick={this.handleClick}>click me</button>
       <div style={{ height: '400px', width: '400px' }}>
        <GoogleMapReact bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}} defaultCenter={{ lat: 32.5059041, lng: -92.11102670000001 }} defaultZoom={12} yesIWantToUseGoogleMapApiInternals onGoogleApiLoaded={({ map, maps }) => this.addMarkers(map, maps)}></GoogleMapReact>
       </div>
     </div>
   );
  }
};

export default Map;
