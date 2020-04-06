import React from 'react';
import './GenreDisplay.css';
import MoviePoster from '../moviePoster/MoviePoster';
import FakePoster from '../fakePoster/FakePoster';

const GenreDisplay = ({ genreType, type, headerText, style }) => {
    console.log(genreType)

    let movieGenres = genreType.map((genreList, i) => {

        let title = genreList.title
        let poster = genreList.poster_path
        let id = genreList.id
        let summary = genreList.overview

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
                    title={`${ title }`}
                    summary={ summary }
                    // style={{
                    //     background: `url(https://image.tmdb.org/t/p/w154/${ poster })`,
                    //     // backgroundImage: 'linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.65) 80%)',
                    //     backgroundSize: 'cover'
                    // }}
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