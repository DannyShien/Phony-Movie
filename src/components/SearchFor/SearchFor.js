import React, { Component } from './node_modules/react';
import './MovieSearch.css';
import axios from './node_modules/axios';

import SearchForm from '../searchForm/SearchForm';

class SearchFor extends Component {
  state = { movie: [], genreIds: [] }

  conponentDidMount () {
    this.findMovie()
  }

  findMovie = async query => {
    const TMDB = `${process.env.REACT_APP_TMDB_KEY}`
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB}&language=en-US&query=${query}&page=1&include_adult=false`);
    console.log(response.data.results)
    this.setState({
      movie: response.data.results
    });
  };

  // TODO: Need to redirect to SearchResult after submitting search.

  render() {
    console.log(`NEW STATE: `, this.state.movie)
    return(
      <div className='search'>
        <SearchForm fetch={ this.findMovie } />

      </div>
    )
  }



}

export default SearchFor; 