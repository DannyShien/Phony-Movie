import React from 'react';



const Genre = ({action, adventure, anime, comedy, documentary, drama, horror, scifi, thriller}) => {
    let actionMovies = action.map((actionList, i) => {
        let titles = actionList.title
        let summaries = actionList.overview
        return (
            <div key={i}>
                <div>
                    {titles}
                </div>
                <div>
                    {summaries}
                </div>
            </div>
        )
    })
    let adventureMovies = adventure.map((adventureList, i) => {
        let titles = adventureList.title
        let summaries = adventureList.overview
        return (
            <div key={i}>
                <div>
                    {titles}
                </div>
                <div>
                    {summaries}
                </div>
            </div>
        )
    })
    let animeMovies = anime.map((animeList, i) => {
        let titles = animeList.title
        let summaries = animeList.overview
        return (
            <div key={i}>
                <div>
                    {titles}
                </div>
                <div>
                    {summaries}
                </div>
            </div>
        )
    })
    let comedyMovies = comedy.map((comedyList, i) => {
        let titles = comedyList.title
        let summaries = comedyList.overview
        return (
            <div key={i}>
                <div>
                    {titles}
                </div>
                <div>
                    {summaries}
                </div>
            </div>
        )
    })
    let documentaryMovies = documentary.map((documentaryList, i) => {
        let titles = documentaryList.title
        let summaries = documentaryList.overview
        return (
            <div key={i}>
                <div>
                    {titles}
                </div>
                <div>
                    {summaries}
                </div>
            </div>
        )
    })
    let dramaMovies = drama.map((dramaList, i) => {
        let titles = dramaList.title
        let summaries = dramaList.overview
        return (
            <div key={i}>
                <div>
                    {titles}
                </div>
                <div>
                    {summaries}
                </div>
            </div>
        )
    })
    let horrorMovies = horror.map((horrorList, i) => {
        let titles = horrorList.title
        let summaries = horrorList.overview 
        return (
            <div key={i}>
                <div>
                    {titles}
                </div>
                <div>
                    {summaries}
                </div>
            </div>
        )
    })
    let scifiMovies = scifi.map((scifiList, i) => {
        let titles = scifiList.title
        let summaries = scifiList.overview
        return (
            <div key={i}>
                <div>
                    {titles}
                </div>
                <div>
                    {summaries}
                </div>
            </div>
        )
    })
    let thrillerMovies = thriller.map((thrillerList, i) => {
        let titles = thrillerList.title
        let summaries = thrillerList.overview
        return (
            <div key={i}>
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
            <div>===================</div>
            <div>{animeMovies}</div>
            <div>===================</div>
            <div>{comedyMovies}</div>
            <div>===================</div>
            <div>{documentaryMovies}</div>
            <div>===================</div>
            <div>{dramaMovies}</div>
            <div>===================</div>
            <div>{horrorMovies}</div>
            <div>===================</div>
            <div>{scifiMovies}</div>
            <div>===================</div>
            <div>{thrillerMovies}</div>
        </div>
    )
}

export default Genre;