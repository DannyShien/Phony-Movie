import React from 'react';

// const Genre = (props) => {
//     console.log(props)

// const Genre = ({action, adventure, anime, comedy, documentary, drama, horror, scifi, thriller}) => {
const Genre = ({genres}) => {
    console.log(genres)
    let actionMovies = genres.map(action => {
        console.log(action)
        let titles = action.title
        let summaries = action.overview

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
            {actionMovies}
        </div>
    )
}

export default Genre;