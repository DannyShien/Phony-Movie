import React from 'react';
import './MoviePoster.css';

const MoviePoster = ({ src, alt, style }) => {
  return (
    <img className='poster' src={ src } alt={ alt } style={ style } />
  )
}

export default MoviePoster; 