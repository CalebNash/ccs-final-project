import React from 'react';
// import Map from './Map.js'



import GoogleMapReact from 'google-map-react';

function Map(props){
  //const locations = props.locations

  function addMarkers(map, maps){
    const locations = props.locations
    for(var i = 0; i < locations.length; i++){
      renderMarkers(map, maps, locations[i]);
    }
  }


 const renderMarkers = (map, maps, location) => {
   console.log('hello');
    var infoWindow = new maps.InfoWindow({
      content: `<h5>Desiard Street Shelter</h5><p>hours: Mon - Sun 6am - 6pm</p> <a href="https://www.google.com/maps/place/807 Desiard St, Monroe, LA 71201">807 Desiard St, Monroe, LA 71201</a>`
    });
    let marker = new maps.Marker({
    position: { lat: location.lat, lng: location.lng },
    map,
    title: 'Desiard Street Shelter',
    });
    marker.addListener('click', function(){
      infoWindow.open(map, marker)
    })
    return marker;
 };



 return (
   <div style={{ height: '400px', width: '400px' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
      defaultCenter={{ lat: 32.5059041, lng: -92.11102670000001 }}
      defaultZoom={12}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => addMarkers(map, maps)}
    >
    </GoogleMapReact>
   </div>
 );
};



class GetHelp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      locations: []
    }
  }

  async componentDidMount(){
    const response = await fetch('api/v1/locations/');
    const data = await response.json();
    this.setState({locations:data});
  }


  render() {
    // console.log(this.state.locations);
    return (
      <Map locations={this.state.locations}/>
    )
  }
}

export default GetHelp;
