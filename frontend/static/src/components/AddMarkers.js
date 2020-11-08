import React from 'react';
import Cookies from 'js-cookie';
import {Modal} from 'react-bootstrap';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';


class AddMarkers extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      address: '',
      categories: [],
      lat: '',
      lng: '',
      dayOpen: 'Mon',
      dayClose: 'Fri',
      hourOpen: '8am',
      hourClose: '5pm',
      website: '',
      show: false,

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.addLocation = this.addLocation.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleSelect = this.handleSelect.bind(this);

  }

 handleClose(){
   this.setState({show: false})
 }


  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }


  handleAddress (address) {
    this.setState({ address });
  };

async handleSelect (address) {
    await geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({lat: latLng.lat, lng: latLng.lng, address}))
      .catch(error => console.error('Error', error));

  };

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


  async addLocation(event){
    event.preventDefault();
    let hours = this.state.dayOpen + ' - ' + this.state.dayClose + ' - ' + this.state.hourOpen + ' - ' + this.state.hourClose;
    let lat = this.state.lat.toString();
    let lng = this.state.lng.toString();

    const options = {
      method:'POST',
      headers:{
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        address: this.state.address,
        lat: lat,
        lng: lng,
        hours: hours,
        categories: this.state.categories,
        dayOpen: this.state.dayOpen,
        dayClose: this.state.dayClose,
        hourOpen: this.state.hourOpen,
        hourClose: this.state.hourClose,
        website: this.state.website,
      }),
    };
     const handleError = (err) => console.warn(err);
     const response = await fetch(`api/v1/locations/`, options)
     const data = await response.json().catch(handleError)
     await console.log(data);
  }




  render(){
    return(
      <React.Fragment>
      <button onClick={() => this.setState({ show: true})}>add location</button>
      <Modal dialogClassName='location-form-modal' show={this.state.show} onHide={this.handleClose}>
      <Modal.Header closeButton>Add a Location</Modal.Header>
      <Modal.Body>

        <form className="col-12 mb-5 form location-form" onSubmit={(event)=> this.addLocation(event)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleChange}/>
            <PlacesAutocomplete
              value={this.state.address}
              onChange={this.handleAddress}
              onSelect={this.handleSelect}
            >
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                  <label htmlFor="address">Address</label>
                  <input
                    {...getInputProps({
                      placeholder: 'Search Places ...',
                      className: 'form-control',
                      id: 'address'
                    })}
                  />
                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map(suggestion => {
                      const className = suggestion.active
                        ? 'suggestion-item--active'
                        : 'suggestion-item';
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
            <label htmlFor="website">Website</label>
            <input type="text" className="form-control" id="website" name="website" value={this.state.website} onChange={this.handleChange}/>
            <div className="form-group row days-open">
            <div className="col-xs-2 form-group form-inline">
            <label id='open-info-lable' htmlFor="dayOpen">Days open from: </label>
            <select type='text' id="dayOpen " className="form-control input-sm" name="dayOpen" value={this.state.dayOpen} onChange={this.handleChange}>
              <option>Mon</option><option>Tues</option><option>Wed</option><option>Thur</option><option>Fri</option><option>Sat</option><option>Sun</option>
            </select>
            </div>
            <div className="col-xs-2 form-group form-inline">
            <label id='open-info-lable' htmlFor="dayClose">To:</label>
            <select type='text' id="dayClose" className="form-control input-sm" name="dayClose" value={this.state.dayClose} onChange={this.handleChange}>
              <option>Mon</option><option>Tues</option><option>Wed</option><option>Thur</option><option>Fri</option><option>Sat</option><option>Sun</option>
            </select>
            </div>
            </div>
            <div className="form-group row hours-open">
              <div className="col-xs-2 form-group form-inline">
                <label id='open-info-lable' htmlFor="hourOpen">Hours open from: </label>
                <select cols='5' type='text' id="hourOpen" className="form-control input-sm" name="hourOpen" value={this.state.hourOpen} onChange={this.handleChange}>
                  <option>12am</option><option>1am</option><option>2am</option><option>3am</option><option>4am</option><option>5am</option><option>6am</option><option>7am</option><option>8am</option><option>9am</option><option>10am</option><option>11am</option><option>12pm</option><option>1pm</option><option>2pm</option><option>3pm</option><option>4pm</option><option>5pm</option><option>6pm</option><option>7pm</option><option>8pm</option><option>9pm</option><option>10pm</option><option>11pm</option>
                </select>
              </div>
              <div className="col-xs-2 form-group form-inline">
                <label id='open-info-lable' htmlFor="hourClose">To: </label>
                <select type='text' id="hourClose" className="form-control" name="hourClose" value={this.state.hourClose} onChange={this.handleChange}>
                <option>12am</option><option>1am</option><option>2am</option><option>3am</option><option>4am</option><option>5am</option><option>6am</option><option>7am</option><option>8am</option><option>9am</option><option>10am</option><option>11am</option><option>12pm</option><option>1pm</option><option>2pm</option><option>3pm</option><option>4pm</option><option>5pm</option><option>6pm</option><option>7pm</option><option>8pm</option><option>9pm</option><option>10pm</option><option>11pm</option>
                </select>
              </div>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="overnight" value="overnight" onChange={this.handleChecked}/>
              <label className="form-check-label" htmlFor="overnight">overnight</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="food" value="food" onChange={this.handleChecked}/>
              <label className="form-check-label" htmlFor="food">food</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="mental health" value="mental health" onChange={this.handleChecked}/>
              <label className="form-check-label" htmlFor="mental health">mental health</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="medicine" value="medicine" onChange={this.handleChecked}/>
              <label className="form-check-label" htmlFor="medicine">medicine</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="financial assistance" value="financial assistance" onChange={this.handleChecked}/>
              <label className="form-check-label" htmlFor="financial assistance">financial assistance</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="long term housing" value="long term housing" onChange={this.handleChecked}/>
              <label className="form-check-label" htmlFor="long term housing">long term housing</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="vocational training" value="vocational training" onChange={this.handleChecked}/>
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

export default AddMarkers;
