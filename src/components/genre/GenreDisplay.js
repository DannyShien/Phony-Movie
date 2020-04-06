import React from 'react';
import './GenreDisplay.css';
import MoviePoster from '../moviePoster/MoviePoster';
import FakePoster from '../fakePoster/FakePoster';

const GenreDisplay = ({ genreType, type, headerText, style }) => {
    console.log(genreType)

    let movieGenres = genreType.map((genreList, i) => {

        let id = genreList.id
        let title = genreList.title
        let poster = genreList.poster_path
        let summary = genreList.overview
        let release = genreList.release_date
        let rating = genreList.vote_average

        return (
            // TODO: Make each image poster a link that pops up a "modal", with more details to that movie. 
            <div key={ id } className='posterWrapper' >
                { poster === null ? 
                <FakePoster 
                    // src= { `https://image.tmdb.org/t/p/w154/${ poster }` }
                    alt={ `${ title } poster` } 
                    text={ `${ title }` } 
                /> :
                // TODO: Get image src as background image. 
                <MoviePoster 
                    src={ `https://image.tmdb.org/t/p/w300/${ poster }` } 
                    alt={ `${ title } poster` } 
                    title={ title }
                    summary={ summary }
                    release={ release }
                    rating={ rating }
                /> }
            </div>
        )
    })
    
    return (
        <div className='genre' type={ type }>
            <h2 style={ style }>{ headerText }</h2>
            {/* 
                TODO: Look into carousel css, 
                make margin-right transparent
            */}
            <div className='genreCarousel'>
                { movieGenres }
            </div>
        </div>
    )
}
    

export default GenreDisplay;