import React from 'react'; 
import './HeroDisplay.css';

const HeroDisplay = ({ popularMovie }) => {
  console.log(popularMovie)
  let backdrop = popularMovie.backdrop_path
  let title = popularMovie.title
  let summary = popularMovie.overview

  return (
    <div className='heroSection'>
      <img 
        src={ `https://image.tmdb.org/t/p/w780/${ backdrop }` }
        alt={ `${title} poster backdrop` }
      />
      <section className='imageOverlay'>
        <div className='popularInfo'>
          <h1>{ title }</h1>
          <p>{ summary }</p>
        </div>
      </section>
    </div>
  )
};

export default HeroDisplay;