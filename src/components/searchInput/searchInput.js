import React, { Component } from 'react';

class SearchInput extends Component {
  state = { query: '' }

  render() {
    return(
      <form onSubmit={ this.onQuerySubmit } >
        <label>
          <input 
            type='text'
            name='query'
            placeholder='Search for movies'
            vlaue={ this.state.query }
            onQueryInput= { this.onQueryInput }
          />
        </label>
      </form>
    )
  }

  onQueryInput = (e) => {
    this.setState = ({
      [e.target.name] : e.target.value
    })
  }

  onQuerySubmit = () => {
    e.preventDefault() 


  }

}

export default SearchInput; 