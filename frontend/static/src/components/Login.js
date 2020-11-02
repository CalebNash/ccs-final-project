import React from 'react';
import Cookies from 'js-cookie'

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      register: false,

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  async handleLogin(e, obj){
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
      const responce = await fetch('/api/v1/rest-auth/login/', options);
      const data = await responce.json().catch(handleError);

      if(data.key){
        Cookies.set('Authorization', `Token ${data.key}`)
        this.props.history.push('/employee');
        //this.setState({loggedIn: true});
        //localStorage.setItem('is_staff', data.is_staff);
        //this.setState({page: 'New Recipe'})
      }
  }

  render(){
    return(
      <div>
      <h1>Login</h1>
      <form className="col-4" onSubmit={(event) => this.handleLogin(event, this.state)}>
      <div className="form-group">
        <label htmlFor="title">username</label>
        <input type="text" className="form-control" id="username" name="username" value={this.state.title} onChange={this.handleChange}/>
        <label htmlFor="title">password</label>
        <input type="text" className="form-control" id="password" name="password" value={this.state.title} onChange={this.handleChange}/>
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
      </div>
    )
  }
}

export default Login;
