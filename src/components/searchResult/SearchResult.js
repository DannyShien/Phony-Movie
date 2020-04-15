import React from 'react';

const SearchResult = (props) => {
  console.log(props.location.state)


  return (
    <div className='result'>
      <div 
        className='resultContainer'
        style={{
          color: 'white'
        }}
      >
        hello world!
      </div>
    </div>
  )
}

export default SearchResult;