import React, { Component } from 'react';

class SearchInput extends Component {
  state = { query='' }

  render() {
    return(
      <form>
        <label>
          <input 
            type='text'
            name='query'
            placeholder='Search for movies'
            vlaue={ this.state.query }
          />
        </label>
      </form>
    )
  }
}

export default SearchInput; 