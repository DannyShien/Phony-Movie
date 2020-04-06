import React from 'react';
import './MoviePoster.css';

const MoviePoster = ({ src, alt, title, summary, style }) => {
    return (
        <div className='moviePoster' style={ style } >   
            <img className='poster' src={ src } alt={ alt } />
            <div className='text'>
                <h2 className='title'>{ title }</h2>
                <p className='summary'>{ summary }</p>
            </div>
        </div>
    )
}

export default MoviePoster; 