import React from 'react';
 import Map from './Map.js'
 import EditBanner from './EditBanner'
// import GoogleMapReact from 'google-map-react';
//
// function Marker({text}){
//
//   return(
//     <img src="https://img.icons8.com/color/32/000000/google-maps-new.png" alt=""/>
// )
// }
//
//
// class Map extends React.Component{
//   constructor(props){
//   super(props)
//   this.state = {
//   }
//   this.renderMarkers = this.renderMarkers.bind(this);
//   this.addMarkers = this.addMarkers.bind(this);
// }
//   addMarkers(map, maps){
//     console.log('happy', this.props.locations);
//     // for(var i = 0; i < locations.length; i++){
//     //   console.log('hello');
//     //   this.renderMarkers(map, maps, locations[i]);
//     // }
//   }
//
//
//  renderMarkers(map, maps, locations){
//    console.log('hello', locations);
//     var infoWindow = new maps.InfoWindow({
//       content: `<h5>Desiard Street Shelter</h5><p>hours: Mon - Sun 6am - 6pm</p> <a href="https://www.google.com/maps/place/807 Desiard St, Monroe, LA 71201">807 Desiard St, Monroe, LA 71201</a>`
//     });
//     let marker = new maps.Marker({
//     position: { lat: 32.506010, lng: -92.111090 },
//     map,
//     title: 'Desiard Street Shelter',
//     });
//     marker.addListener('click', function(){
//       infoWindow.open(map, marker)
//     })
//     return marker;
//  };
//
//
// render(){
//   const markers = this.props.locations.map(location => <Marker key={location.id} location ={location} lat={location.lat} lng={location.lng} text={location.name}/>)
//  return (
//    <div style={{ height: '400px', width: '400px' }}>
//     <GoogleMapReact
//       bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
//       defaultCenter={{ lat: 32.5059041, lng: -92.11102670000001 }}
//       defaultZoom={12}
//       yesIWantToUseGoogleMapApiInternals
//
//     >
//       {markers}
//     </GoogleMapReact>
//    </div>
//  );
// }
// };



class GetHelp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }



  render() {
    return (
      <React.Fragment>
      <Map/>
      <EditBanner/>
      </React.Fragment>
    )
  }
}

export default GetHelp;
