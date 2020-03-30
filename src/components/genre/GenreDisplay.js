import React from 'react';
import './GenreDisplay.css';
import Poster from '../poster/MoviePoster';



const GenreDisplay = ({ genreType, headerText, style, text }) => {
    console.log(genreType)

    let movieGenres = genreType.map((genreList, i) => {

        let titles = genreList.title
        let poster = genreList.poster_path
        let id = genreList.id
        return (
            // TODO: Make each image poster a link that pops up a "modal", with more details to that movie. 
            // TODO: Condidtion for rendering a blank template inplace of a poster that didn't load.
            <div key={ id } style={{ margin: '0 5px' }} >
                <Poster 
                    src={ `https://image.tmdb.org/t/p/w154/${ poster }` } 
                    alt={ `${ titles } poster` }
                />
            </div>
        )
    })
    
    return (
        <div className='genre' text={ text }>
            <h3 style={ style }>{ headerText }</h3>
            <div className='genreCarousel'>
                { movieGenres }
            </div>
        </div>
    )
}
    

export default GenreDisplay;