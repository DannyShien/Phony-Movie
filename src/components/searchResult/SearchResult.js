import React from 'react';

const SearchResult = (props) => {
  // const searchResult = props.location.state
  const renderResults = props.location.state.map((result, i) => {
    console.log(result)
    return (
        <div className='resultPosters' key={result.id} style={{color: 'white'}}>
          <img src={`https://image.tmdb.org/t/p/w300/${result.poster_path} `} />
        </div>
    )
  } )

  return (
    <div className='result'>
      <div className='resultContent'>
        {renderResults}
      </div>
    </div>
  )
}

export default SearchResult;