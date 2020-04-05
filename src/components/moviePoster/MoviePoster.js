import React from 'react';
import './MoviePoster.css';

const MoviePoster = ({ src, alt, titles, style }) => {
    return (
        <div className='moviePoster' style={ style } >   
            <img src={ src } alt={ alt } />
            {/* <h2>{titles}</h2> */}
        </div>
    )
}

export default MoviePoster; 