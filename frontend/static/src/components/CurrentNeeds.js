import React from 'react';




class CurrentNeeds extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      needs: [],
    }

  }

  async componentDidMount(){
    const response = await fetch('api/v1/needs/');
    const data = await response.json();
    this.setState({needs:data});
    console.log(data);
  }

  render(){
    console.log(this.state.needs);
    const miscellaneous = this.state.needs
   .filter(need => need.category === 'miscellaneous')
   .map(need => <li>{need.item}</li>)
   const paperProducts = this.state.needs
   .filter(need => need.category === 'paper products')
   .map(need => <li>{need.item}</li>)
   const hygieneProducts = this.state.needs
   .filter(need => need.category === 'hygiene products')
   .map(need => <li>{need.item}</li>)
   const cleaningItems = this.state.needs
   .filter(need => need.category === 'cleaning items')
   .map(need => <li>{need.item}</li>)
    return(
      <div>
        <h1>Current Needs</h1>
        <div className='row needs-row'>
          <div className='card'>
            <h5>Miscellaneous</h5>
            <ul>
            {miscellaneous}
            </ul>
          </div>
          <div className='card'>
            <h5>Paper Products</h5>
            <ul>
            {paperProducts}
            </ul>
          </div>
          <div className='card'>
            <h5>Hygiene Products</h5>
            <ul>
            {hygieneProducts}
            </ul>
          </div>
          <div className='card'>
            <h5>Cleaning Items</h5>
            <ul>
            {cleaningItems}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CurrentNeeds;
