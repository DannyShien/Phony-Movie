import React from 'react';
import './MoviePoster.css';

const MoviePoster = ({ src, alt, title, summary, release, rating, style }) => {
    return (
        <div className='moviePoster' style={ style } >   
            <img className='poster' src={ src } alt={ alt } />
            <div className='posterDetail'>
                <h2 className='title'>{ title }</h2>
                <div className='text'>
                    <p>{ release }</p>
                    <p>{ `Rating:${ rating }` }</p>
                    <p>{ summary }</p>
                </div>
            </div>
        </div>
    )
}

export default MoviePoster; 