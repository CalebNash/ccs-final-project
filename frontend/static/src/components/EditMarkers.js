import React from 'react';
import Geocode from "react-geocode";
import Cookies from 'js-cookie';
import {Modal} from 'react-bootstrap';



class EditMarkers extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      locations: [],
      pickedLocation: {},
      isEditing: false,

    }

    this.editGeoCode = this.editGeoCode.bind(this);
    this.deleteLocation = this.deleteLocation.bind(this);
    this.editLocation = this.editLocation.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.editChecked = this.editChecked.bind(this);
    this.handleClose = this.handleClose.bind(this)
  }

  handleClose(){
    this.setState({isEditing: false})
  }


  async componentDidMount(){
    const response = await fetch('api/v1/locations/');
    const data = await response.json();
    this.setState({locations:data});
  }



  async editGeoCode(){
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
    Geocode.setLanguage("en");
    const response = await Geocode.fromAddress(this.state.pickedLocation.address)
    const { lat, lng } = response.results[0].geometry.location;
    const pickedLocation = {...this.state.pickedLocation};
    pickedLocation.lat = lat;
    pickedLocation.lng = lng;
    await this.setState({pickedLocation});
  }



  handleEdit(event) {
  const pickedLocation = {...this.state.pickedLocation};
  pickedLocation[event.target.name] = event.target.value;
  this.setState({pickedLocation});
}


  editChecked(event){
    const pickedLocation = {...this.state.pickedLocation};
    let categories = pickedLocation.categories;
    let check = event.target.checked;
    let checked_category = event.target.value;

    if(check){
        pickedLocation.categories = [...pickedLocation.categories, checked_category]
    }else{
      var index = categories.indexOf(checked_category);
      if (index > -1) {
        categories.splice(index, 1);
            pickedLocation.categories = categories
      }
    }
    this.setState({pickedLocation});
  }

  async editLocation(event, id){
        event.preventDefault();
        await this.editGeoCode();
        let hours = this.state.pickedLocation.dayOpen + ' - ' + this.state.pickedLocation.dayClose + ' - ' + this.state.pickedLocation.hourOpen + ' - ' + this.state.pickedLocation.hourClose;
        let lat = this.state.pickedLocation.lat.toString();
        let lng = this.state.pickedLocation.lng.toString();
        const options = {
          method: 'PUT',
          headers: {
            'X-CSRFToken': Cookies.get('csrftoken'),
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.state.pickedLocation.name,
            address: this.state.pickedLocation.address,
            lat: lat,
            lng: lng,
            hours: hours,
            categories: this.state.pickedLocation.categories,
            dayOpen: this.state.pickedLocation.dayOpen,
            dayClose: this.state.pickedLocation.dayClose,
            hourOpen: this.state.pickedLocation.hourOpen,
            hourClose: this.state.pickedLocation.hourClose,
            website: this.state.pickedLocation.website,
          }),
        };
        const handleError = (err) => console.warn(err);
        const response = await fetch(`/api/v1/locations/${id}/`, options)
        const data = await response.json().catch(handleError)
        await console.log(data);
        await this.setState({pickedLocation: []});
    }

  async deleteLocation(event, id){
        event.preventDefault();
        const options = {
          method: 'DELETE',
          headers: {
            'X-CSRFToken': Cookies.get('csrftoken'),
            'Content-Type': 'application/json'
          },
        };
        const handleError = (err) => console.warn(err);
        const response = await fetch(`/api/v1/locations/${id}/`, options)
        const data = await response.json().catch(handleError)
        await console.log(data);
        await this.setState({pickedLocation: []});
    }


  render(){
    console.log(this.state.pickedLocation.categories);
    const locations = this.state.locations.map(location => <button key={location.id} className=' btn location-title' onClick={() => this.setState({pickedLocation: location, isEditing: true})}>{location.name}</button>)
    //checked ={this.state.pickedLocation.categories.includes('overnight')}
    return(
      <React.Fragment>
      <div className='row locations-list-row'>
        <div id='locations-list' className='col-8 card'>
            {locations}
        </div>
      </div>
    <Modal dialogClassName='location-form-modal' show={this.state.isEditing} onHide={this.handleClose}>
    <Modal.Header closeButton>Edit a Location</Modal.Header>
    <Modal.Body>

      <form className="col-12 mb-5 form location-form" onSubmit={(event)=> this.editLocation(event, this.state.pickedLocation.id)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={this.state.pickedLocation.name} onChange={this.handleEdit}/>
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" id="adress" name="address" value={this.state.pickedLocation.address} onChange={this.handleEdit}/>
          <label htmlFor="website">Website</label>
          <input type="text" className="form-control" id="website" name="website" value={this.state.pickedLocation.website} onChange={this.handleEdit}/>
          <div className="form-group row">
          <div className="col-xs-2 form-group form-inline">
          <label htmlFor="dayOpen">Days open from: </label>
          <select type='text' id="dayOpen" className="form-control input-sm" name="dayOpen" value={this.state.pickedLocation.dayOpen} onChange={this.handleEdit}>
            <option>Mon</option><option>Tues</option><option>Wed</option><option>Thur</option><option>Fri</option><option>Sat</option><option>Sun</option>
          </select>
          </div>
          <div className="col-xs-2 form-group form-inline">
          <label htmlFor="dayClose">To: </label>
          <select type='text' id="dayClose" className="form-control input-sm" name="dayClose" value={this.state.pickedLocation.dayClose} onChange={this.handleEdit}>
            <option>Mon</option><option>Tues</option><option>Wed</option><option>Thur</option><option>Fri</option><option>Sat</option><option>Sun</option>
          </select>
          </div>
          </div>
          <div className="form-group row">
            <div className="col-xs-2 form-group form-inline">
              <label htmlFor="hourOpen">Hours open from: </label>
              <select cols='5' type='text' id="hourOpen" className="form-control input-sm" name="hourOpen" value={this.state.pickedLocation.hourOpen} onChange={this.handleEdit}>
                <option>12am</option><option>1am</option><option>2am</option><option>3am</option><option>4am</option><option>5am</option><option>6am</option><option>7am</option><option>8am</option><option>9am</option><option>10am</option><option>11am</option><option>12pm</option><option>1pm</option><option>2pm</option><option>3pm</option><option>4pm</option><option>5pm</option><option>6pm</option><option>7pm</option><option>8pm</option><option>9pm</option><option>10pm</option><option>11pm</option>
              </select>
            </div>
            <div className="col-xs-2 form-group form-inline">
              <label htmlFor="hourClose">To: </label>
              <select type='text' id="hourClose" className="form-control" name="hourClose" value={this.state.pickedLocation.hourClose} onChange={this.handleEdit}>
              <option>12am</option><option>1am</option><option>2am</option><option>3am</option><option>4am</option><option>5am</option><option>6am</option><option>7am</option><option>8am</option><option>9am</option><option>10am</option><option>11am</option><option>12pm</option><option>1pm</option><option>2pm</option><option>3pm</option><option>4pm</option><option>5pm</option><option>6pm</option><option>7pm</option><option>8pm</option><option>9pm</option><option>10pm</option><option>11pm</option>
              </select>
            </div>
          </div>

          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="overnight" value="overnight" onChange={this.editChecked} checked ={this.state.pickedLocation.categories?.includes('overnight')}/>
            <label className="form-check-label" htmlFor="overnight">overnight</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="food" value="food" onChange={this.editChecked} checked ={this.state.pickedLocation.categories?.includes('food')}/>
            <label className="form-check-label" htmlFor="food">food</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="mental health" value="mental health" onChange={this.editChecked} checked ={this.state.pickedLocation.categories?.includes('mental health')}/>
            <label className="form-check-label" htmlFor="mental health">mental health</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="medicine" value="medicine" onChange={this.editChecked} checked ={this.state.pickedLocation.categories?.includes('medicine')}/>
            <label className="form-check-label" htmlFor="medicine">medicine</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="financial assistance" value="financial assistance" onChange={this.editChecked} checked ={this.state.pickedLocation.categories?.includes('financial assistance')}/>
            <label className="form-check-label" htmlFor="financial assistance">financial assistance</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="long term housing" value="long term housing" onChange={this.editChecked} checked ={this.state.pickedLocation.categories?.includes('long term housing')}/>
            <label className="form-check-label" htmlFor="long term housing">long term housing</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="vocational training" value="vocational training" onChange={this.editChecked} checked ={this.state.pickedLocation.categories?.includes('vocational training')}/>
            <label className="form-check-label" htmlFor="vocational training">vocational training</label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </Modal.Body>
  </Modal>
      </React.Fragment>
    )
  }
}

export default EditMarkers;
