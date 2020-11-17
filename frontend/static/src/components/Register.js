import React from 'react';
import Cookies from 'js-cookie'
import {Modal} from 'react-bootstrap';


class Register extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password1: '',
      password2: '',
      show: false,

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleClose(){
    this.setState({show: false})
  }

  async handleRegistration(e, obj){
  e.preventDefault();

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken'),
    },
    body: JSON.stringify(obj)
  };

  const handleError = (err) => console.warn(err);
  const response = await fetch('/api/v1/rest-auth/registration/', options);
  const data = await response.json().catch(handleError);

  if(data.key){
    Cookies.set('Authorization', `Token ${data.key}`)
    //localStorage.setItem('is_staff', data.is_staff);
    //this.setState({page: 'posts'});
    //this.setState({loggedIN: true});
  }

}

  render(){
    return(
      <div>
        <button className="btn"type="button" onClick={() =>{ this.props.closeMenu(); this.setState({show: true})}}>Register</button>
        <Modal dialogClassName='login-modal' show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>Login</Modal.Header>
          <Modal.Body>
            <form className="" onSubmit={(event) => this.handleRegistration(event, this.state)}>
            <div className="form-group">
              <label htmlFor="title">username</label>
              <input type="text" className="form-control" id="username" name="username" value={this.state.title} onChange={this.handleChange}/>
              <label htmlFor="title">email</label>
              <input type="email" className="form-control" id="email" name="email" value={this.state.title} onChange={this.handleChange}/>
              <label htmlFor="title">password</label>
              <input type="text" className="form-control" id="password1" name="password1" value={this.state.title} onChange={this.handleChange}/>
              <label htmlFor="title">re-enter password</label>
              <input type="text" className="form-control" id="password2" name="password2" value={this.state.title} onChange={this.handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={() => this.setState({show: false})}>Register</button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
    )
  }
}

export default Register;
