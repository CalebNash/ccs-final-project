import React from 'react';
 import Map from './Map.js'

class GetHelp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <React.Fragment>
      <div className='container get-help-body'>
        <div className='row get-help-content'>
          <section className='col-12 col-md-8'>
            <h1 className='get-help-header'>How to Get Help If You Are Experiencing Homelessness Or Are In Need of Services</h1>
            <p className='get-help-inst-1'>If you are at risk of or currently experiencing homelessness, the first step is to find out who can best help you though your current situation. We have provided a map where you can enter your needs and find a service provider to help you met your needs.</p>
          </section>
        </div>
        <Map/>
      </div>
      </React.Fragment>
    )
  }
}

export default GetHelp;
