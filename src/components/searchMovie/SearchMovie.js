import React, { Component } from 'react';
import SearchForm from '../searchForm/SearchForm'

class SearchMovie extends Component {
  state = { query: '' }

  render() {
    return(
      <>
        <SearchForm 
          queryInput={ this.onQueryInput }
          querySubmit={ this.onQuerySubmit }
          query={ this.state.query}
        />
      </>
    )
  }

  onQueryInput = (e) => {
    this.setState = ({
      [e.target.name] : e.target.value
    })
  }

  onQuerySubmit = (e) => {
    e.preventDefault() 
    console.log(`Form submitted`)

  }

}

export default SearchMovie; 