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
  }

  render(){
    const miscellaneous = this.state.needs
   .filter(need => need.category === 'miscellaneous')
   .map(need => <li key={need.id}>{need.item}</li>)
   const paperProducts = this.state.needs
   .filter(need => need.category === 'paper products')
   .map(need => <li key={need.id}>{need.item}</li>)
   const hygieneProducts = this.state.needs
   .filter(need => need.category === 'hygiene products')
   .map(need => <li key={need.id}>{need.item}</li>)
   const cleaningItems = this.state.needs
   .filter(need => need.category === 'cleaning items')
   .map(need => <li key={need.id}>{need.item}</li>)
    return(
      <div className='current-needs-body row'>
        <div className='col-12 col-md-6 center-body'>
          <h1 className='current-needs-page-name'>Current Needs List</h1>
          <h3 className='current-needs-don-app'>Your donations are always appreciated!</h3>
          <p className='current-needs-page-para'>The Renewal Center is always in need of items to be donated. We truly value each gift that is given, and we know we could not be operating without the generosity of many. Here is an updated list of needs in all shapes and sizes. Feel free to check back as we will update the list as needs arise.</p>
          <p className='current-needs-page-para'>Donations can be dropped off at the Renewal Center Monday through Friday 8:00am-5:00pm or schedule a time to drop off items by calling 318-737-7539. Or you can order them from our <a href="https://www.amazon.com/hz/wishlist/ls/2ZYWVLSPBAUJ9?ref_=wl_share">Amazon wish list</a> and have it automatically sent to us.</p>

          <div className='row needs-row'>
            <div className='card col-12 col-md-8'>
              <h5>Miscellaneous</h5>
              <ul>
              {miscellaneous}
              </ul>
            </div>
            <div className='card col-12 col-md-8'>
              <h5>Paper Products</h5>
              <ul>
              {paperProducts}
              </ul>
            </div>
            <div className='card col-12 col-md-8'>
              <h5>Hygiene Products</h5>
              <ul>
              {hygieneProducts}
              </ul>
            </div>
            <div className='card col-12 col-md-8'>
              <h5>Cleaning Items</h5>
              <ul>
              {cleaningItems}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CurrentNeeds;
