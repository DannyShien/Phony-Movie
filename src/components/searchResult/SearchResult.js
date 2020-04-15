import React from 'react';
import { Link } from 'react-router-dom'
import './SearchResult.css';
import NavBar from '../navbar/NavBar';
import MoviePoster from '../moviePoster/MoviePoster';
import FakePoster from '../fakePoster/FakePoster';

const SearchResult = (props) => {
  const searchResult = props.location.state
  const renderResults = searchResult.map((result, i) => {
    let id = result.id
    let title = result.title
    let poster = result.poster_path
    return (
        <div className='moviePoster' key={id}>
          { poster === null ? 
            <Link to={{ pathname: `/moviedetail/${ id }` }}>
              <FakePoster 
                src= { `https://image.tmdb.org/t/p/w154/${ poster }` }
                alt={ `${ title } poster` } 
                text={ title }
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '234px',
                  width: '154px',
                  color: 'white',
                  backgroundColor: 'gray',
                  border: '3px solid rgb(25, 25, 25)'
                }}
              /> 
            </Link> : 
            <Link to={{ pathname: `/moviedetail/${ id }` }}>
              <MoviePoster 
                src={ `https://image.tmdb.org/t/p/w154/${ poster }` } 
                alt={ `${ title } poster` } 
                style={{ border: '3px solid rgb(25, 25, 25)' }}
              />
            </Link>   
          }
        </div>
    )
  } )

  return (
    <div className='searchResult'>
      <NavBar />
      <div className='movieDisplay'>
        <div className='displayContent'>
          {renderResults}
        </div>
      </div>
    </div>
  )
}

export default SearchResult;