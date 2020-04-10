import React from 'react';
import { Link } from 'react-router-dom'
import './GenreDisplay.css';
import MoviePoster from '../moviePoster/MoviePoster';
import FakePoster from '../fakePoster/FakePoster';

const GenreDisplay = ({ genreType, type, headerText, style }) => {

  let movieGenres = genreType.map((genreList, i) => {

    let id = genreList.id
    let title = genreList.title
    let poster = genreList.poster_path 
    
    return (
      <div key={ id } className='posterWrapper' >
        { poster === null ? 
        <Link to='/' >
          <FakePoster 
            src= { `https://image.tmdb.org/t/p/w154/${ poster }` }
            alt={ `${ title } poster` } 
          /> 
        </Link> : 
        <Link to='/'>
          <MoviePoster 
            src={ `https://image.tmdb.org/t/p/w154/${ poster }` } 
            alt={ `${ title } poster` } 
          />
        </Link> 
        }
      </div>
    )
  })
    
  return (
    <div className='genre' type={ type }>
      <h2 style={ style }>{ headerText }</h2>
      <div className='genreCarousel'>
        { movieGenres }
      </div>
    </div>
  )
}
    

export default GenreDisplay;