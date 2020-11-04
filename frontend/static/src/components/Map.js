import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({ latitude, longitude }) => {
  


 const renderMarkers = (map, maps) => {
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



 return (
   <div style={{ height: '400px', width: '400px' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
      defaultCenter={{ lat: 32.5059041, lng: -92.11102670000001 }}
      defaultZoom={12}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
    >
    </GoogleMapReact>
   </div>
 );
};

export default Map;
