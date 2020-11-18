import React from 'react'
import Cookies from 'js-cookie';
import NeedsForm from './NeedsForm';

class EditNeeds extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      needs: [],
      pickedNeed: {},
    }
    this.deleteNeed = this.deleteNeed.bind(this);
    this.removeNeed = this.removeNeed.bind(this);
    this.addNeed = this.addNeed.bind(this);
  }

  addNeed(need){
    const needs = [...this.state.needs, need];
    this.setState({needs});
  }

  async componentDidMount(){
    const response = await fetch('api/v1/needs/');
    const data = await response.json();
    this.setState({needs:data});
  }

  async deleteNeed(id) {
    const needId = this.state.needs.findIndex(need => need.id === id)
    await this.setState({pickedNeed: this.state.needs[needId]})
    const needs = this.state.needs;
    needs.splice(needId,1);
    this.setState({needs: needs})
    this.removeNeed(id)
}

async removeNeed(id){
  const options = {
    method: 'DELETE',
    headers: {
      'X-CSRFToken': Cookies.get('csrftoken'),
    },
  };

  const handleError = (err) => console.warn(err);
  const responce = await fetch(`/api/v1/needs/${id}/`, options);
  const data = await responce.json().catch(handleError);
  console.log(data);
}

  render(){
    console.log(this.state.pickedNeed);
    const miscellaneous = this.state.needs
   .filter(need => need.category === 'miscellaneous')
   .map(need => <li key={need.id}>{need.item} <i onClick={() => this.deleteNeed(need.id)} className="fas fa-times"></i></li>)
   const paperProducts = this.state.needs
   .filter(need => need.category === 'paper products')
   .map(need => <li key={need.id}>{need.item} <i onClick={() => this.deleteNeed(need.id)} className="fas fa-times"></i></li>)
   const hygieneProducts = this.state.needs
   .filter(need => need.category === 'hygiene products')
   .map(need => <li key={need.id}>{need.item} <i onClick={() => this.deleteNeed(need.id)} className="fas fa-times"></i></li>)
   const cleaningItems = this.state.needs
   .filter(need => need.category === 'cleaning items')
   .map(need => <li key={need.id}>{need.item} <i onClick={() => this.deleteNeed(need.id)} className="fas fa-times"></i></li>)
    return(
      <div>
      <NeedsForm addNeed={this.addNeed}/>
        <div className='row needs-row'>
          <div className='card col-12 '>
            <h5>Miscellaneous</h5>
            <ul>
            {miscellaneous}
            </ul>
          </div>
          <div className='card col-12 '>
            <h5>Paper Products</h5>
            <ul>
            {paperProducts}
            </ul>
          </div>
          <div className='card col-12 '>
            <h5>Hygiene Products</h5>
            <ul>
            {hygieneProducts}
            </ul>
          </div>
          <div className='card col-12 '>
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

export default EditNeeds;
