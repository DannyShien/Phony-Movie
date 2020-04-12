import React, { Component } from 'react';
import './SearchForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  render() {
    return (
      <form className='searchForm' onSubmit={ this.handleSubmit } >
        <label>
          <input 
            className='searchInput'
            type='text'
            name='query'
            placeholder='Search for movies'
            value={ this.state.query }
            onChange={ this.handleInput }
          />
        </label>
        <span>
          <FontAwesomeIcon 
            icon={ faSearch } 
            onClick={ this.handleSubmit }
          />
        </span>
      </form>
    )
  }

  handleInput = (event) => {
    console.log(event.target.value)
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault() 
    this.props.fetch(this.state.query)
    this.onReset()
  }
  onReset = () => {
    this.setState({
      query: ''
    })
  }

}

export default SearchForm;