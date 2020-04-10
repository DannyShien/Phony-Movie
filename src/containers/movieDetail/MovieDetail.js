import React, { Component } from 'react';

class MovieDetail extends Component  {


  componentDidMount() {
    // this.setState({
    //   movieId
    // })
    this.GetMovieDetail()
  }

  GetMovieDetail = () => {
    const TMDB = `${process.env.REACT_APP_TMDB_KEY}`
    const movieId = this.props.match.params.id
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB}&language=en-US`)
      // .then(r => { return r.json() })
  }

  render() {
    return (
      <div>
        Movie Details
      </div>
    )
  }  
}

export default MovieDetail;