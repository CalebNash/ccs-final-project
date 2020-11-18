import React from 'react'
import Cookies from 'js-cookie';


class NeedsForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      item: '',
      category: 'miscellaneous',
      needs: [],

    }
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount(){
    const response = await fetch('api/v1/needs/');
    const data = await response.json();
    this.setState({needs:data});
    console.log(data);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  async handleSubmit(event, need){
    event.preventDefault();
    const options = {
      method:'POST',
      headers:{
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(need),
    };
     const handleError = (err) => console.warn(err);
     const response = await fetch(`api/v1/needs/`, options)
     const data = await response.json().catch(handleError)
     this.props.addNeed(data)
     this.setState({item: '', category: 'miscellaneous', needs: [],})
  }

  render(){

    return(
      <form className="col-12" onSubmit={(event) => this.handleSubmit(event, this.state)}>
        <div className="form-group">
          <label htmlFor="item">Item</label>
          <input type="text" className="form-control" id="item" name="item" value={this.state.item} onChange={this.handleChange}/>
          <label htmlFor="category">Category</label>
          <select id="category" className="form-control" name="category" value={this.state.category} onChange={this.handleChange}>
            <option>miscellaneous</option>
            <option>paper products</option>
            <option>hygiene products</option>
            <option>cleaning items</option>
          </select>

        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    )
  }
}

export default NeedsForm;
