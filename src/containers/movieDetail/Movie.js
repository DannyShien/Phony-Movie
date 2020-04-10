import React, { Component } from 'react';
import axios from 'axios';
import MovieDetail from '../../components/movieDetail/MovieDetail';
import { withRouter } from 'react-router-dom';

class Movie extends Component  {
  state = ({ detail: {} })

  componentDidMount() {
    this.GetMovieDetail()
  }

  async GetMovieDetail() {
    const TMDB = `${process.env.REACT_APP_TMDB_KEY}`
    const movieId = this.props.match.params.id
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB}&language=en-US`);
    console.log(response.data)
    this.setState({
      detail: response.data
    })
  }

  render() { 
    let { detail } = this.state
    return (
      <div style={{ color: 'white', height: '100vh', width: '100vw' }}>
        <MovieDetail 
          id={ detail.id }
          alt={ `${detail.title } poster` }
          backdrop={ `https://image.tmdb.org/t/p/w154/${ detail.backdrop_path }` }
          poster={ `https://image.tmdb.org/t/p/w154/${ detail.poster_path }` }
          title={ detail.title }
          rating={ detail.vote_average }
          overview={ detail.overview } 
          genre={ detail}
        />
      </div>
    )
  }  
}

export default Movie;