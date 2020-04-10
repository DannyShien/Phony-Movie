import React, { Component } from 'react';
import axios from 'axios';

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
    let backImg = this.state.detail.backdrop_path
    return (
      <div>
        <header>
          <img src={backImg} />
        </header>
        <section>
          <div>
            {/* poster path */}
            <img />
          </div>
          <div>
            <h1>Title</h1>
            <p>vote average</p>
            <p>overview</p>
            <p>genres</p>
          </div>
        </section>
      </div>
    )
  }  
}

export default Movie;