import React, { Component } from 'react';
import './SearchMovie.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import SearchForm from '../searchForm/SearchForm';

class SearchMovie extends Component {
  state = { query: '' }

  render() {
    return(
      <div className='search'>
        <SearchForm 
          queryInput={ this.onQueryInput }
          querySubmit={ this.onQuerySubmit }
          query={ this.state.query}
        />
        <span style={{fonstSize: '120%'}}>
          <FontAwesomeIcon icon={ faSearch } />
        </span>
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