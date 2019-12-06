import React, { Component } from 'react';
// import { Link } from 'react-router-dom';


class PhonyMovie extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            // genre: []
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
            .then((response) => {
                // console.log(response.json())
            })
            // .catch(err => {console.log(err)})
            // .then(this.genre)
    }
    genre = (genre) => {
        console.log(`MOVIE GENRE: `, genre)
    }



    render() {
        return (
            <div>
                <div>Different movie categories</div>
                <div>Different movie categories</div>
                <div>Different movie categories</div>
                <div>Different movie categories</div>
                <div>Different movie categories</div>
            </div>
        )
    }

    
}

export default PhonyMovie; 