import React from 'react';
import Cookies from 'js-cookie'
import Register from './components/Register';
import Login from './components/Login.js';
import Home from './components/Home.js';
import GetHelp from './components/GetHelp.js';
import EmployeePage from './components/EmployeePage.js';
import CurrentNeeds from './components/CurrentNeeds.js';
import {Route, Switch, Link, withRouter} from 'react-router-dom';
import './App.css';
import logo from "./images/logo.png";
import { bubble as Menu } from 'react-burger-menu';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      loggedIn: Cookies.get('Authorization')? true: false,
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }


    handleStateChange(state) {
      this.setState({menuOpen: state.isOpen})
    }
    closeMenu() {
      this.setState({menuOpen: false})
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
    }

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
      const response = await fetch('/api/v1/rest-auth/login/', options);
      const data = await response.json().catch(handleError);

      if(data.key){
        Cookies.set('Authorization', `Token ${data.key}`)
        this.props.history.push('/employee');
      }
  }

  render(){

    return (
      <React.Fragment>
      <div className='banner'><img className='logo' src={logo} alt=""/></div>
      <nav className="navbar navbar-expand-lg site-navbar nav-phone">
      <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
        <Link to='/'><button onClick={() => this.closeMenu()} className="btn menu-button"type="button">Home</button></Link>
        <Link to='/register'><button onClick={() => this.closeMenu()} className="btn  menu-button"type="button">Register</button></Link>
        <Link to='/gethelp'><button onClick={() => this.closeMenu()} className="btn  menu-button"type="button">Get Help</button></Link>
        <Link to='/employee'><button onClick={() => this.closeMenu()} className="btn  menu-button"type="button">Employee</button></Link>
        <Link to='/current-needs'><button onClick={() => this.closeMenu()} className="btn  menu-button"type="button">Current Needs</button></Link>
        { this.state.loggedIn
          ?<button className="btn  menu-button"type="button" onClick={this.handleLogout }>Logout</button>
          :<Login handleLogin = {this.handleLogin}/>
        }
        </Menu>
        <a className='btn btn-primary' href="https://www.paypal.com/donate?token=NArna_n-Qhcakjj0wSRXNjVY5fYyuF59iITqXmFIhGrtuP-2duHjzEoFNNqtH7j-p4ASNdl3VVZQ-YVf">Donate</a>
      </nav>
      <nav className="navbar navbar-expand-lg site-navbar nav-full">
        <Link to='/'><button className="btn menu-button"type="button">Home</button></Link>
        <Link to='/register'><button className="btn  menu-button"type="button">Register</button></Link>
        <Link to='/gethelp'><button className="btn  menu-button"type="button">Get Help</button></Link>
        <Link to='/employee'><button className="btn  menu-button"type="button">Employee</button></Link>
        <Link to='/current-needs'><button className="btn  menu-button"type="button">Current Needs</button></Link>
        { this.state.loggedIn
          ?<button className="btn  menu-button"type="button" onClick={this.handleLogout}>Logout</button>
          :<Login handleLogin = {this.handleLogin}/>
        }
        <a className='btn btn-primary' href="https://www.paypal.com/donate?token=NArna_n-Qhcakjj0wSRXNjVY5fYyuF59iITqXmFIhGrtuP-2duHjzEoFNNqtH7j-p4ASNdl3VVZQ-YVf">Donate</a>
      </nav>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/register' component={Register}/>
          <Route path='/gethelp' component={GetHelp}/>
          <Route path='/employee' component={EmployeePage}/>
          <Route path='/current-needs' component={CurrentNeeds}/>
        </Switch>
      </React.Fragment>
    )
  }
}
export default withRouter(App);
