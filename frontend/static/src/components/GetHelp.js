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
      <Map/>
      </div>
      </React.Fragment>
    )
  }
}

export default GetHelp;
