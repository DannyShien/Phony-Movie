import React from 'react';

const SearchForm = ({ queryInput, querySubmit, query }) => {
  return (
    <form onSubmit={ querySubmit } >
      <label>
        <input 
          type='text'
          name='query'
          placeholder='Search for movies'
          vlaue={ query }
          onChange={ queryInput }
          />
      </label>
    </form>
  )
}

export default SearchForm;