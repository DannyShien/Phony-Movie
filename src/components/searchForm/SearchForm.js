import React from 'react';
import './SearchForm.css';

const SearchForm = ({ queryInput, querySubmit, query }) => {
  return (
    <form className='searchForm' onSubmit={ querySubmit } >
      <label>
        <input 
          type='text'
          name='query'
          placeholder='Search for movies'
          vlaue={ query }
          onChange={ queryInput }
          className='searchInput'
          />
      </label>
    </form>
  )
}

export default SearchForm;