import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Genre from './Genre';

class PhonyMovie extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            genre: [],
            action: [],
            adventure: '', 
            anime: '',
            comedy: '', 
            documentary: '',
            drama: '',
            horror: '',
            scifi: '',
            thriller: ''
        }
    }

    componentDidMount() {
        this.movieGenreId()
    }

    // ========================================
    // ========= USING ASYNC/AWAIT ============
    // async getMovieGenre () {
    //     const TMDB = `${process.env.REACT_APP_TMDB_KEY}`
    //     const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB}&language=en-US`)
    //     // console.log(await response.json())
    //     const genreData = await response.json() 
    //     console.log(genreData)
    // }
    // ========================================
    // ========================================
    
    movieGenreId = () => {
        const TMDB = `${process.env.REACT_APP_TMDB_KEY}`
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB}&language=en-US`)
            // NOTE: Remember to "return" the response!! This will save you hours of research. Lol 
            // On the bright side, I learned a bit more about async/await! #nolosses #onlylessons
            .then(r => {return r.json()})
            .catch(err => {console.log(err)})
            .then(this.allGenres)
    }

    allGenres = (genreObj) => {
        const genreList = genreObj.genres
        console.log(`MOVIE GENRE: `, genreList)
        const TMDB = `${process.env.REACT_APP_TMDB_KEY}`
        let actionId = genreList[0].id
        let adventureId = genreList[1].id
        let animeId = genreList[2].id
        let comedyId = genreList[3].id
        let documentaryId = genreList[5].id
        let dramaId = genreList[6].id
        let horrorId = genreList[10].id
        let sciFiId = genreList[14].id
        let thrillerId = genreList[16].id

        const actionGenre = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB}&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=true&page=1&with_genres=${actionId}`)
        const adventureGenre = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB}&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=true&page=1&with_genres=${adventureId}`)
        const animeGenre = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB}&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=true&page=1&with_genres=${animeId}`)
        const comedyGenre = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB}&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=true&page=1&with_genres=${comedyId}`)
        const documentaryGenre = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB}&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=true&page=1&with_genres=${documentaryId}`)
        const dramaGenre = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB}&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=true&page=1&with_genres=${dramaId}`)
        const horrorGenre = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB}&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=true&page=1&with_genres=${horrorId}`)
        const sciFiGenre = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB}&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=true&page=1&with_genres=${sciFiId}`)
        const thrillerGenre = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB}&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=true&page=1&with_genres=${thrillerId}`)

        Promise.all([actionGenre, adventureGenre, animeGenre, comedyGenre, documentaryGenre, dramaGenre, horrorGenre, sciFiGenre, thrillerGenre])
            .then(values => {return Promise.all(values.map(r => r.json()))})
            .catch(error => {
                console.log('ERROR!')
                console.log(error)
            })
            .then(this.movies)
    }

    movies = ([actionGenre, adventureGenre, animeGenre, comedyGenre, documentaryGenre, dramaGenre, horrorGenre, sciFiGenre, thrillerGenre]) => {
        let action = actionGenre
        let adventure = adventureGenre
        let anime = animeGenre
        let comedy = comedyGenre
        let documentary = documentaryGenre
        let drama = dramaGenre
        let horror = horrorGenre
        let sciFi = sciFiGenre
        let thriller = thrillerGenre


        this.setState ({
            action: action, 
            adventure: adventure, 
            anime: anime, 
            comedy: comedy, 
            documentary: documentary,  
            drama: drama, 
            horror: horror, 
            scifi: sciFi, 
            thriller: thriller
        })
    }
 

    render() {
        console.log(this.state.action)
        return (
            <div>
                <Genre 
                    action = {this.state.action}
                />
                <Genre
                    adventure = {this.state.adventure}
                />
                <Genre
                    anime = {this.state.anime}
                />
                <Genre
                    comedy = {this.state.comedy}
                />
                <Genre
                    documentary ={this.state.documentary}
                />
                <Genre
                    drama = {this.state.drama}
                />
                <Genre  
                    horror = {this.state.drama}
                />
                <Genre
                    scifi = {this.state.scifi}
                />
                <Genre
                    thriller = {this.state.thriller}
                />
            </div>
        )
    }

    
}

export default PhonyMovie; 