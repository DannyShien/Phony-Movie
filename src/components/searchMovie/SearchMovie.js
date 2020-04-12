import React, { Component } from 'react';
import './SearchMovie.css';

import SearchForm from '../searchForm/SearchForm';

class SearchMovie extends Component {
  state = {  movie: {} }

  conponentDidMount () {
    this.findMovie()
  }

  findMovie(query) {
    // const TMDB = `${process.env.REACT_APP_TMDB_KEY}`

  }

  render() {
    return(
      <div className='search'>
        <SearchForm fetch={ this.findMovie } />

      </div>
    )
  }



}

export default SearchMovie; 