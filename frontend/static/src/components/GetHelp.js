import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({ latitude, longitude }) => {
 const renderMarkers = (map, maps) => {
  var infoWindow = new maps.InfoWindow({
    content: `<h5>Desiard Street Shelter</h5><p>hours: Mon - Sun 6am - 6pm</p> <a href="https://www.google.com/maps/place/Desiard+Street+Shelter/@32.5059042,-92.1131866,17z/data=!3m1!4b1!4m5!3m4!1s0x862e486485945f1f:0x50c9c4a4b1f4527c!8m2!3d32.5059042!4d-92.1109979">807 Desiard St, Monroe, LA 71201</a>`
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



 return (
   <div style={{ height: '400px', width: '400px' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyD_ypcJt0g5ztjIqyTG6RplaHFJ7boMbqI" }}
      defaultCenter={{ lat: 32.5093, lng: -92.1193 }}
      defaultZoom={12}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
    >
    </GoogleMapReact>
   </div>
 );
};


class GetHelp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }


  render() {
    return (
      <Map/>
    )
  }
}

export default GetHelp;
