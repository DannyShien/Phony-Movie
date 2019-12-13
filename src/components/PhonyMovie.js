import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Genre from './Genre';

class PhonyMovie extends Component {
    constructor(props) {
        super(props); 
        // this.state = {
        //     genre: [],
        //     action: '',
        //     adventure: '', 
        //     anime: '',
        //     comedy: '', 
        //     documentary: '',
        //     drama: '',
        //     horror: '',
        //     scifi: '',
        //     thriller: ''
        // }
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
            // .then(this.movieGenre_All)
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


        // CURRENT SITUATION: The API url needs individual genreID to fetch
        // the individual json data. Doing it this way will require me to 
        // make MULTIPLE fetches for the different genres....DOES NOT SEEM SUFFICIENT!!!
        const actionGenre = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB}&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=true&page=1&with_genres=${actionId}`)
            // .then(r => {return r.json()})
            // .catch(err => {console.log(err)})
            // .then(this.action)
        const adventureGenre = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB}&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=true&page=1&with_genres=${adventureId}`)
            // .then(r => {return r.json()})
        const animeGenre = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB}&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=true&page=1&with_genres=${animeId}`)
            // .then(r => {return r.json()})
            // .catch(err => {console.log(err)})
            // .then(this.anime)
        const comedyGenre = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB}&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=true&page=1&with_genres=${comedyId}`)
            // .then(r => {return r.json()})
        const documentaryGenre = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB}&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=true&page=1&with_genres=${documentaryId}`)
            // .then(r => {return r.json()})
        const dramaGenre = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB}&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=true&page=1&with_genres=${dramaId}`)
            // .then(r => {return r.json()})    
        const horrorGenre = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB}&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=true&page=1&with_genres=${horrorId}`)
            // .then(r => {return r.json()})
        const sciFiGenre = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB}&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=true&page=1&with_genres=${sciFiId}`)
            // .then(r => {return r.json()})
        const thrillerGenre = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB}&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=true&page=1&with_genres=${thrillerId}`)
            // .then(r => {return r.json()})

        Promise.all([actionGenre, adventureGenre, animeGenre, comedyGenre, documentaryGenre, dramaGenre, horrorGenre, sciFiGenre, thrillerGenre])
            .then(values => {
                return Promise.all(values.map(r => r.json()))
            })
            .then(values => {
                console.log(values)
            })
        

        // this.setState({
        //     genre: genreList,
        //     action: actionId,
        //     adventure: adventureId, 
        //     anime: animeId,
        //     comedy: comedyId, 
        //     documentary: docId,
        //     drama: dramaId,
        //     horror: horrorId,
        //     scifi: scienceFictionId,
        //     thriller: thrillerId
        // })
    }

    // movieGenre_All = (obj) => {
    //     console.log(obj)
    //     const TMDB = `${process.env.REACT_APP_TMDB_KEY}`
    //     let actionId = this.state.action
    //     let adventureId = this.state.adventure
    //     let animeId = this.state.anime
    //     let comedyId = this.state.comedy
    //     let documentaryId = this.state.documentary
    //     let dramaId = this.state.drama
    //     let horrorId = this.state.horror
    //     let sciFiId = this.state.scifi
    //     let thrillerId = this.state.thriller

   
    // }


    render() {
        return (
            <div>
                {/* <Genre 
                    action = {this.state.action}
                /> */}
            </div>
        )
    }

    
}

export default PhonyMovie; 