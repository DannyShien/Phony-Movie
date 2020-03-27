import React from 'react';


const GenreDisplay = ({genreType, headerText}) => {
    console.log(genreType)
    let movieGenres = genreType.map((genreList, i) => {
        let titles = genreList.title
        let poster = genreList.poster_path
        let id = genreList.id
        return (
            <div key={id}>
                <div>
                    {titles}
                </div>
                <img src={poster} atl='video poster' />
            </div>
        )
    })
    
    return (
        <div>
            <h3>{headerText}</h3>
            <div>{movieGenres}</div>
        </div>
    )
}
    

export default GenreDisplay;