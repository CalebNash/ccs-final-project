import React from 'react';
import {Modal} from 'react-bootstrap';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      show: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }


  handleClose(){
    this.setState({show: false})
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }



  render(){
    return(
      <React.Fragment>
        <button className="btn login-button"type="button" onClick={() => this.setState({show: true})}><i class="far fa-user"></i></button>
        <Modal dialogClassName='login-modal' show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>Login</Modal.Header>
        <Modal.Body>
          <form onSubmit={(event) => this.props.handleLogin(event, this.state)}>
            <div className="form-group">
              <label htmlFor="title">username</label>
              <input type="text" className="form-control" id="username" name="username" value={this.state.title} onChange={this.handleChange}/>
              <label htmlFor="title">password</label>
              <input type="text" className="form-control" id="password" name="password" value={this.state.title} onChange={this.handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={() => this.setState({show: false})}>Login</button>
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
    )
  }
}

export default Login;
