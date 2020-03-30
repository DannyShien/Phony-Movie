import React, { Component } from './node_modules/react';
// import { Link } from 'react-router-dom';
import Genre from '../../components/genre/GenreDisplay';
import './PhonyMovie.css';

class PhonyMovie extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            action: [],
            adventure: [],
            anime: [],
            documentary: [],
            horror: [],
            scifi: [],
        }
    }

    componentDidMount() {
        this.getMovieGenreIds()
    }

    // ========================================
    // ========= USING ASYNC/AWAIT ============
    // async getMovieGenres () {
    //     const TMDB = `${process.env.REACT_APP_TMDB_KEY}`
    //     const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB}&language=en-US`)
    //     // console.log(await response.json())
    //     const genreData = await response.json() 
    // }
    // ========================================
    // ========================================
    
    getMovieGenreIds = () => {
        const TMDB = `${process.env.REACT_APP_TMDB_KEY}`
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB}&language=en-US`)
            .then(r => { return r.json() })
            // NOTE: Remember to "return" the response!! This will save you hours of research. Lol 
            // On the bright side, I learned a bit more about async/await! #nolosses #onlylessons
            .catch(err => { console.log(err) })
            .then(this.getGenresById)
    }

    getGenresById = (genreObj) => {
        const genreList= genreObj.genres
        const TMDB = `${process.env.REACT_APP_TMDB_KEY}`
        let actionId = genreList[0].id
        let adventureId = genreList[1].id
        let animeId = genreList[2].id
        let documentaryId = genreList[5].id
        // let horrorId = genreList[10].id
        // let sciFiId = genreList[14].id

        const actionGenre = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB}&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=true&page=1&with_genres=${actionId}`)
        const adventureGenre = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB}&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=true&page=1&with_genres=${adventureId}`)
        const animeGenre = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB}&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=true&page=1&with_genres=${animeId}`)
        const documentaryGenre = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB}&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=true&page=1&with_genres=${documentaryId}`)
        // const horrorGenre = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB}&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=true&page=1&with_genres=${horrorId}`)
        // const sciFiGenre = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB}&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=true&page=1&with_genres=${sciFiId}`)

        Promise.all([ actionGenre, adventureGenre, animeGenre, 
            documentaryGenre, 
            // horrorGenre, sciFiGenre, 
        ])
            .then(values => { return Promise.all(values.map(r => r.json())) })
            .catch(error => {
                console.log('ERROR!')
                console.log(error)
            })
            .then(this.allGenres)
    }

    allGenres = ([ actionGenre, adventureGenre, animeGenre, 
        documentaryGenre, 
        // horrorGenre, sciFiGenre 
    ]) => {
        // console.log(actionGenre)
        let Action = actionGenre.results
        let Adventure = adventureGenre.results
        let Anime = animeGenre.results
        let Documentary = documentaryGenre.results
        // let Horror = horrorGenre.results
        // let SciFi = sciFiGenre.results

        this.setState ({
            action: Action,
            adventure: Adventure,
            anime: Anime, 
            documentary: Documentary,
            // horror: Horror, 
            // scifi: SciFi,
        })
        return 
    }
 
    render() {
        return (
            <div className='landing'>
                <Genre 
                    genreType={ this.state.action }
                    headerText='Action'
                    text='Action'
                />
                <Genre
                    genreType={ this.state.adventure }
                    headerText='Adventure'
                    text='Adventure'
                />
                <Genre 
                    genreType={ this.state.anime }
                    headerText='Anime'
                    text='Anime'
                />
                <Genre 
                    genreType={ this.state.documentary }
                    headerText='Documentary'
                    text='Documentary'
                />
                {/* <Genre 
                    genreType={ this.state.horror } 
                    headerText='Horror'
                    text='Horror'
                />
                <Genre 
                    genreType={ this.state.scifi }
                    headerText='SciFi'
                    text='SciFi'
                /> */}
            </div>
        )
    }

    
}

export default PhonyMovie; 