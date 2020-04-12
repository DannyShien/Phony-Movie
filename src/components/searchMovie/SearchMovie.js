import React, { Component } from 'react';
import './SearchMovie.css';
import axios from 'axios';

import SearchForm from '../searchForm/SearchForm';

class SearchMovie extends Component {
  state = { movie: {}, genreIds: [] }

  conponentDidMount () {
    this.findMovie()
  }

  async findMovie(query) {
    const TMDB = `${process.env.REACT_APP_TMDB_KEY}`
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB}&language=en-US&query=${query}&page=1&include_adult=false`);
    console.log(response.data.results)
    // Not able to setState??? 
    // this.setState({
    //   movie: response.data.results
    // })
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