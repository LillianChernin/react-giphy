import React, {Component} from 'react';

class Search extends Component {
  constructor(){
    super()
    this.state = {
      query: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onInputChange(event) {
    this.setState({
      query: event.target.value
    })
  }
  onSubmit() {
    console.log(this.state.query);
  }
  render() {
    return (
      <div>
        <input type="text" onChange={ this.onInputChange }/>
        <button onClick={this.onSubmit}>Search</button>
      </div>
    )
  }
}

export default Search;
