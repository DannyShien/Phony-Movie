import React from 'react';
import './GenreDisplay.css';
import Image from './../image/Image';


const GenreDisplay = ({genreType, headerText, style}) => {
    console.log(genreType)
    let movieGenres = genreType.map((genreList, i) => {
        let titles = genreList.title
        let poster = genreList.poster_path
        let id = genreList.id
        return (
            <div key={id}>
                <Image 
                    src={`https://image.tmdb.org/t/p/w154/${poster}`} 
                    alt='video poster' 
                    style={{
                        margin: '3px',
                    }}
                />
            </div>
        )
    })
    
    return (
        <div className='genre'>
            <h3 style={style}>{headerText}</h3>
            <div className='genreCarousel'>
                {movieGenres}
            </div>
        </div>
    )
}
    

export default GenreDisplay;