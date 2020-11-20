import React from 'react';
import {Modal} from 'react-bootstrap';
import Cookies from 'js-cookie';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      show: false,
      enterEmail: false,
      email: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }


  handleClose(){
    this.setState({show: false})
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  async handleEmail(event){
    //console.log(email);
    event.preventDefault();
    const options = {
      method:'POST',
      headers:{
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state),
    };
     const handleError = (err) => console.warn(err);
     const response = await fetch(`api/v1/rest-auth/password/reset/`, options)
     const data = await response.json().catch(handleError)
     console.log(data);
     if(data){
       alert("Check your email for a link to reset your password");
     }
  }



  render(){
    const enterEmail = this.state.enterEmail
    let display;
    if(enterEmail){
      display = <form onSubmit={(e)=> {this.setState({show: false, enterEmail: false}); this.handleEmail(e)}}><div className="form-group"><label htmlFor="email">Enter email to reset password</label><input type="email" className="form-control" id="email" name="email" value={this.state.email} onChange={this.handleChange}/></div><button type="submit" className="btn btn-primary" >Submit</button></form>
    }else{
      display = <button className='btn' onClick={() => this.setState({enterEmail: true})}>Forgot password?</button>
    }
    return(
      <React.Fragment>
        <button className="btn login-button"type="button" onClick={() => this.setState({show: true})}><i className="far fa-user"></i></button>
        <Modal dialogClassName='login-modal' show={this.state.show} onHide={()=> {this.handleClose(); this.setState({enterEmail: false})}}>
        <Modal.Header closeButton>Login</Modal.Header>
        <Modal.Body>
          <form onSubmit={(event) => this.props.handleLogin(event, this.state)}>
            <div className="form-group">
              <label htmlFor="title">username</label>
              <input type="text" className="form-control" id="username" name="username" value={this.state.title} onChange={this.handleChange}/>
              <label htmlFor="title">password</label>
              <input type="password" className="form-control" id="password" name="password" value={this.state.title} onChange={this.handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={() => this.setState({show: false, enterEmail: false})}>Login</button>
          </form>
            {display}
        </Modal.Body>
      </Modal>
    </React.Fragment>
    )
  }
}

export default Login;
