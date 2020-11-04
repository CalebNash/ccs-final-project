import React from 'react';
import Geocode from "react-geocode";
import Cookies from 'js-cookie'


class EmployeePage extends React.Component{
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

    }
    this.getGeoCode = this.getGeoCode.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.addLocation = this.addLocation.bind(this);
  }

  async getGeoCode(){
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
    Geocode.setLanguage("en");


    const response = await Geocode.fromAddress(this.state.address)
    const { lat, lng } = response.results[0].geometry.location;
    await this.setState({lat: lat})
    await this.setState({lng: lng})
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
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


  async addLocation(event){
    event.preventDefault();
    await this.getGeoCode();
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
      <div>
        <h1>Employee Page</h1>
        <button onClick={()=> this.getGeoCode()}>click me</button>
      </div>
      <form className="col-12" onSubmit={(event)=> this.addLocation(event)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleChange}/>
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" id="adress" name="address" value={this.state.address} onChange={this.handleChange}/>
          <div className="form-group row">
          <div className="col-xs-2">
          <label htmlFor="dayOpen">Days open from: </label>
          <select type='text' id="dayOpen" className="form-control input-sm" name="dayOpen" value={this.state.dayOpen} onChange={this.handleChange}>
            <option>Mon</option><option>Tues</option><option>Wed</option><option>Thur</option><option>Fri</option><option>Sat</option><option>Sun</option>
          </select>
          </div>
          <div className="col-xs-2">
          <label htmlFor="dayClose">To: </label>
          <select type='text' id="dayClose" className="form-control input-sm" name="dayClose" value={this.state.dayClose} onChange={this.handleChange}>
            <option>Mon</option><option>Tues</option><option>Wed</option><option>Thur</option><option>Fri</option><option>Sat</option><option>Sun</option>
          </select>
          </div>
          </div>
          <div className="form-group row">
            <div className="col-xs-2">
              <label htmlFor="hourOpen">Hours open from: </label>
              <select cols='5' type='text' id="hourOpen" className="form-control input-sm" name="hourOpen" value={this.state.hourOpen} onChange={this.handleChange}>
                <option>12am</option><option>1am</option><option>2am</option><option>3am</option><option>4am</option><option>5am</option><option>6am</option><option>7am</option><option>8am</option><option>9am</option><option>10am</option><option>11am</option><option>12pm</option><option>1pm</option><option>2pm</option><option>3pm</option><option>4pm</option><option>5pm</option><option>6pm</option><option>7pm</option><option>8pm</option><option>9pm</option><option>10pm</option><option>11pm</option>
              </select>
            </div>
            <div className="col-xs-2">
              <label htmlFor="hourClose">To: </label>
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
      </React.Fragment>
    )
  }
}

export default EmployeePage;
