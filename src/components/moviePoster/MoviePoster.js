import React from 'react';
import './MoviePoster.css';

const MoviePoster = ({ src, alt, style }) => {
  return (
    <img className='poster' src={ src } alt={ alt } />
  )
}

export default MoviePoster; 