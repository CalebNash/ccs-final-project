import React from 'react';
import Cookies from 'js-cookie'

class PasswordReset extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      new_password1: "new_password",
      new_password2: "new_password",
      uid: "",
      token: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  async componentDidMount(){
    this.setState({uid: this.props.match.params.uid});
    this.setState({token:this.props.match.params.token });
  }


  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  async handleReset(event, data){
    event.preventDefault();
    const options = {
      method:'POST',
      headers:{
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    };
     const handleError = (err) => console.warn(err);
     const response = await fetch(`/api/v1/rest-auth/password/reset/confirm/`, options)
     const error = await response.json().catch(handleError)
     await console.log(error);
  }



  render(){

    // this.setState({uid: this.props.match.params.token});
    // this.setState({token: this.props.match.params.uid});
    console.log(this.state.uid);
    console.log(this.state.token);
    return(
      <div>
      <form onSubmit={(event) => this.handleReset(event, this.state)}>
      <div className="form-group">
        <label htmlFor="new_password1">new password</label>
        <input type="text" className="form-control" id="new_password1" name="new_password1" value={this.state.title} onChange={this.handleChange}/>
        <label htmlFor="new_password2">re-enter password</label>
        <input type="text" className="form-control" id="new_password2" name="new_password2" value={this.state.title} onChange={this.handleChange}/>
      </div>
      <button type="submit" className="btn btn-primary">Reset Password</button>
    </form>
      </div>
    )
  }
}

export default PasswordReset;
