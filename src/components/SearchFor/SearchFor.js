import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './SearchFor.css';
import SearchForm from '../searchForm/SearchForm';

class SearchFor extends Component {
  state = { movie: [], genreIds: [], isSubmit: false }

  conponentDidMount () {
    this.findMovie()
  }

  findMovie = async query => {
    const TMDB = `${process.env.REACT_APP_TMDB_KEY}`
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB}&language=en-US&query=${query}&page=1&include_adult=false`);
    this.setState({
      movie: response.data.results,
      isSubmit: true
    });
  };

  redirecting = () => {
    const { movie ,isSubmit } = this.state
    return (
      !isSubmit ?
        <SearchForm fetch={ this.findMovie } />
      : <Redirect 
      to={{ 
        pathname: '/searchresult', 
        state: movie
      }}/>
    )
  }

  render() {
    return(
      <div className='search'>
        {this.redirecting() }
      </div>
    )
  }



}

export default SearchFor; 