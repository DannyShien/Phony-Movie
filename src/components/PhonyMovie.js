import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Genre from './Genre';

class PhonyMovie extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            genre: [],
            action: '',
            adventure: '', 
            animation: '',
            comedy: '', 
            documentary: '',
            drama: '',
            horror: '',
            scifi: '',
            thriller: ''
        }
    }

    componentDidMount() {
        this.getMovieGenre()
    }
    // ===== USING ASYNC/AWAIT =====

    // async getMovieGenre () {
    //     const TMDB = `${process.env.REACT_APP_TMDB_KEY}`
    //     const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB}&language=en-US`)
    //     // console.log(await response.json())
    //     const genreData = await response.json() 
    //     console.log(genreData)
    // }

    // =============================
    
    getMovieGenre = () => {
        const TMDB = `${process.env.REACT_APP_TMDB_KEY}`
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB}&language=en-US`)
            // NOTE: Remember to "return" the response!! This will save you hours of research. Lol 
            // On the bright side, I learned a bit more about async/await! #noloss #onlylessons
            .then(r => {return r.json()})
            .catch(err => {console.log(err)})
            .then(this.genre)
    }
    genre = (genreObj) => {
        const genreList = genreObj.genres
        console.log(`MOVIE GENRE: `, genreList)
        let action = genreList[0]
        // console.log(action)

        this.setState({
            genre: genreList,
            action: action
        })
    }

    render() {
        return (
            <div>
                <Genre 
                    action = {this.state.action}
                />
                <div>Different movie genre</div>
                <div>Different movie genre</div>
                <div>Different movie genre</div>
                <div>Different movie genre</div>
            </div>
        )
    }

    
}

export default PhonyMovie; 