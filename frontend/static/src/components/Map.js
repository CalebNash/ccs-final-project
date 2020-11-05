import React from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      locations: [],
      map: {},
      maps: {},
    }
    this.renderMarkers = this.renderMarkers.bind(this);
    this.addMarkers = this.addMarkers.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addToState = this.addToState.bind(this);
  }


  handleClick() {
    this.setState({loadMap: 'jill'});
  }


  async addToState(map, maps){
    const response = await fetch('api/v1/locations/');
    const data = await response.json();
    await this.setState({locations:data});
    await this.setState({map: map});
    await this.setState({maps: maps});
    this.addMarkers()

  }


  addMarkers(){
    const locations = this.state.locations;
    // console.log('locations: ', this.state.locations);
    // console.log('maps: ',this.state.maps);
    // console.log('map: ',this.state.map);
    for(var i = 0; i < locations.length; i++){
      console.log('hello');
      this.renderMarkers(locations[i]);
    }
  }


  renderMarkers(location){
    console.log('hello', location);
    const map = this.state.map;
    const maps = this.state.maps;
    const intLat = parseFloat(location.lat);
    const intLng = parseFloat(location.lng);
     var infoWindow = new maps.InfoWindow({
       content: `<h5>${location.name}</h5><p>hours: ${location.hours}</p> <a href="https://www.google.com/maps/place/${location.address}">${location.address}</a>`
     });
     let marker = new maps.Marker({
     position: { lat: intLat, lng: intLng },
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
    console.log('maps: ',this.state.maps);
    console.log('map: ',this.state.map);
    // if(loadMap === 'jill'){
    //   googleMap = <GoogleMapReact bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}} defaultCenter={{ lat: 32.5059041, lng: -92.11102670000001 }} defaultZoom={12} yesIWantToUseGoogleMapApiInternals onGoogleApiLoaded={({ map, maps }) => this.addMarkers(map, maps)}></GoogleMapReact>
    // }else if(loadMap === 'john'){
    //   googleMap = <div>hello</div>
    // }
   return (
     <div>
       <button onClick={this.handleClick}>click me</button>
       <div style={{ height: '400px', width: '400px' }}>
        <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
        defaultCenter={{ lat: 32.5059041, lng: -92.11102670000001 }}
        defaultZoom={12}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => this.addToState(map, maps)}
        >
        </GoogleMapReact>
       </div>
     </div>
   );
  }
};

export default Map;
