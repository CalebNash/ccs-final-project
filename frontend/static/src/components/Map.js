import React from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      locations: [],
      map: {},
      maps: {},
      categories: [],
      markers: [],
    }
    this.renderMarkers = this.renderMarkers.bind(this);
    this.addMarkers = this.addMarkers.bind(this);
    this.addToState = this.addToState.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.filterMarkers = this.filterMarkers.bind(this);
  }



  async addToState(map, maps){
    const response = await fetch('api/v1/locations/');
    const data = await response.json();
    await this.setState({locations:data});
    await this.setState({map: map});
    await this.setState({maps: maps});
    this.addMarkers()
  }

  handleChecked(event){
    let categories = this.state.categories;
    let check = event.target.checked;
    let checked_category = event.target.value;
    if(check){
      this.setState({
        categories: [...this.state.categories, checked_category]
      })
    }else{
      var index = categories.indexOf(checked_category);
      if (index > -1) {
        categories.splice(index, 1);
          this.setState({
            categories: categories
          })
      }
    }
  }


  async filterMarkers(event){
    event.preventDefault();
    const markers = [...this.state.markers];
    for(let i = 0; i <markers.length; i ++){
      markers[i].setMap(null);
    }
    await this.setState({markers: []})
    const categories = this.state.categories;

    if(categories.length > 0){
      const locations = this.state.locations.filter(
        location => categories.every(item => location.categories.includes(item))
      )
      console.log(locations);
      for(var i = 0; i < locations.length; i++){
        this.renderMarkers(locations[i]);
      }
    }else{
      console.log('hello');
      this.addMarkers();
    }
  }


  addMarkers(){
    const locations = this.state.locations;
    for(var i = 0; i < locations.length; i++){
      this.renderMarkers(locations[i]);
    }
  }


  renderMarkers(location){
    const map = this.state.map;
    const maps = this.state.maps;
    const intLat = parseFloat(location.lat);
    const intLng = parseFloat(location.lng);
     var infoWindow = new maps.InfoWindow({
       content: `<h5>${location.name}</h5><p>hours: ${location.hours}</p><a className='location-website' style = 'display: block' href="${location.website}">${location.website}</a> <a href="https://www.google.com/maps/place/${location.address}">${location.address}</a>`
     });
     let marker = new maps.Marker({
     position: { lat: intLat, lng: intLng },
     map,
     title: location.name,
     });
     marker.addListener('click', function(){
       infoWindow.open(map, marker)
     })

      const markers = [...this.state.markers];
      markers.push(marker);
      this.setState({markers});
     return marker;
  };



  render() {
    // console.log(this.state.maps);
    console.log('markers', this.state.markers);
   return (
     <div className='row locations-list-row'>

       <div className='col-12 col-md-9'>
         <div style={{ height: '400px', width: '100%' }}>
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
       <div id='locations-list' className='col-12 col-md-3 card'>
       <form className="col-12 mb-5 form location-form" onSubmit={(event)=> this.filterMarkers(event)}>
         <div className="form-group">
           <div id='location-filters' className="form-check form-check-inline locations  location-filters">
             <input className="form-check-input" type="checkbox" id="overnight" value="overnight" onChange={this.handleChecked} />
             <label className="form-check-label" htmlFor="overnight">overnight</label>
           </div>
           <div id='location-filters' className="form-check form-check-inline location-filters">
             <input className="form-check-input" type="checkbox" id="food" value="food" onChange={this.handleChecked} />
             <label className="form-check-label" htmlFor="food">food</label>
           </div>
           <div id='location-filters' className="form-check form-check-inline location-filters">
             <input className="form-check-input" type="checkbox" id="mental health" value="mental health" onChange={this.handleChecked} />
             <label className="form-check-label" htmlFor="mental health">mental health</label>
           </div>
           <div id='location-filters' className="form-check form-check-inline location-filters">
             <input className="form-check-input" type="checkbox" id="medicine" value="medicine" onChange={this.handleChecked} />
             <label className="form-check-label" htmlFor="medicine">medicine</label>
           </div>
           <div id='location-filters' className="form-check form-check-inline location-filters">
             <input className="form-check-input" type="checkbox" id="financial assistance" value="financial assistance" onChange={this.handleChecked} />
             <label className="form-check-label" htmlFor="financial assistance">financial assistance</label>
           </div>
           <div id='location-filters' className="form-check form-check-inline location-filters">
             <input className="form-check-input" type="checkbox" id="long term housing" value="long term housing" onChange={this.handleChecked} />
             <label className="form-check-label" htmlFor="long term housing">long term housing</label>
           </div>
           <div id='location-filters' className="form-check form-check-inline location-filters">
             <input className="form-check-input" type="checkbox" id="vocational training" value="vocational training" onChange={this.handleChecked} />
             <label className="form-check-label" htmlFor="vocational training">vocational training</label>
           </div>
           <div id='location-filters' className="form-check form-check-inline location-filters">
             <input className="form-check-input" type="checkbox" id="clothing" value="clothing" onChange={this.handleChecked} />
             <label className="form-check-label" htmlFor="clothing">clothing</label>
           </div>
         </div>
         <button type="submit" className="btn btn-primary">Save</button>
       </form>
       </div>
     </div>
   );
  }
};

export default Map;
