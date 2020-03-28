import React from 'react';
import './GenreDisplay.css';


const GenreDisplay = ({genreType, headerText}) => {
    console.log(genreType)
    let movieGenres = genreType.map((genreList, i) => {
        let titles = genreList.title
        let poster = genreList.poster_path
        // let poster = `https://image.tmdb.org/t/p/w500/${poster}.jpg`
        let id = genreList.id
        return (
            <div key={id}>
                <div>
                    {titles}
                </div>
                <img src={`https://image.tmdb.org/t/p/w500/${poster}.jpg`} alt='video poster' />
            </div>
        )
    })
    
    return (
        <div className='genre'>
            <h3>{headerText}</h3>
            <div className='genreCarousel'>
                {movieGenres}
            </div>
        </div>
    )
}
    

export default GenreDisplay;