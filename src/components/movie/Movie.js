import React, { Component } from 'react';
import axios from 'axios';
import MovieDetail from '../movieDetail/MovieDetail';

class Movie extends Component  {
  state = ({ detail: {}, genres: [] })

  componentDidMount() {
    this.GetMovieDetail()
  }

  async GetMovieDetail() {
    const TMDB = `${process.env.REACT_APP_TMDB_KEY}`
    const movieId = this.props.match.params.id
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB}&language=en-US`);
    console.log(response.data)
    this.setState({
      detail: response.data,
      genres: response.data.genres
    })
  }

  render() { 
    let { detail } = this.state
    let { genres } = this.state
    return (
      <>
        <MovieDetail 
          id={ detail.id }
          alt={ `${detail.title } poster` }
          backdropSrc={ `https://image.tmdb.org/t/p/w780/${ detail.backdrop_path }` }
          posterSrc={ `https://image.tmdb.org/t/p/w300/${ detail.poster_path }` }
          title={ detail.title }
          rating={ detail.vote_average }
          summary={ detail.overview } 
          genres={ genres }
        />
      </>
    )
  }  
}

export default Movie;