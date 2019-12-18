import React from 'react';



const Genre = ({action, adventure, anime, comedy, documentary, drama, horror, scifi, thriller}) => {
// const Genre = ({genre}) => {
    // console.log(genre)
    
    let actionMovies = action.map(actionMovies => {
        console.log(actionMovies)
        let titles = actionMovies.title
        let summaries = actionMovies.overview
        return (
            <div>
                <div>
                    {titles}
                </div>
                <div>
                    {summaries}
                </div>
            </div>

        )
    })

    let adventureMovies = adventure.map(adventureMovies => {
        console.log(adventureMovies)
        let titles = adventureMovies.title
        let summaries = adventureMovies.overview
        return (
            <div>
                <div>
                    {titles}
                </div>
                <div>
                    {summaries}
                </div>
            </div>

        )
    })

    return (
        <div>
            <div>{actionMovies}</div>
            <div>===================</div>
            <div>{adventureMovies}</div>
        </div>
    )
}

export default Genre;