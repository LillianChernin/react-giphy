import React, {Component} from 'react';
import Search from './Search';

class SearchContainer extends Component {
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
        <Search
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

export default SearchContainer;
