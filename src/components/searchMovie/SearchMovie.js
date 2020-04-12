import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import SearchForm from '../searchForm/SearchForm';

class SearchMovie extends Component {
  state = { query: '' }

  render() {
    return(
      <div>
        <SearchForm 
          queryInput={ this.onQueryInput }
          querySubmit={ this.onQuerySubmit }
          query={ this.state.query}
        />
        <FontAwesomeIcon icon={ faSearch } />
      </div>
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