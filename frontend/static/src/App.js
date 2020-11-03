import React from 'react';
import Cookies from 'js-cookie'
import Register from './components/Register';
import Login from './components/Login.js';
import Home from './components/Home.js';
import GetHelp from './components/GetHelp.js';
import EmployeePage from './components/EmployeePage.js';
import {Route, Switch, Link, withRouter} from 'react-router-dom';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      loggedIn: Cookies.get('Authorization')? true: false,
    }
    this.handleLogout = this.handleLogout.bind(this);
  }

  async handleLogout(e){
    e.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
    };

    const handleError = (err) => console.warn(err);
    const responce = await fetch('/api/v1/rest-auth/logout/', options);
    const data = await responce.json().catch(handleError);

    if(data.detail === "Successfully logged out."){
      Cookies.remove('Authorization');
      this.props.history.push('/');
      //this.setState({page: 'home'});
      //this.setState({loggedIn: false});
      //localStorage.removeItem('is_staff');
    }

  }

  render(){


    return (
      <React.Fragment>
      <nav className="navbar navbar-expand-lg">
        <Link to='/'><button className="btn menu-button"type="button">Home</button></Link>
        <Link to='/login'><button className="btn  menu-button"type="button">Login</button></Link>
        <Link to='/register'><button className="btn  menu-button"type="button">Register</button></Link>
        <Link to='/gethelp'><button className="btn  menu-button"type="button">Get Help</button></Link>
        <Link to='/employee'><button className="btn  menu-button"type="button">Employee</button></Link>
        <button className="btn  menu-button"type="button" onClick={this.handleLogout}>Logout</button>
      </nav>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/gethelp' component={GetHelp}/>
          <Route path='/employee' component={EmployeePage}/>
        </Switch>
      </React.Fragment>
    )
  }
}
export default withRouter(App);
