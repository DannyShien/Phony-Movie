import React from 'react'; 
import './HeroDisplay.css';

const HeroDisplay = ({ popularMovie }) => {
  console.log(popularMovie)
  // let id = popularMovie.id
  let backdrop = popularMovie.backdrop_path
  return (
    <div className='heroSection'>
      <img 
        src={ `https://image.tmdb.org/t/p/w780/${ backdrop }` }
      />
      <section className='imageOverlay'>

      </section>
    </div>
  )
};

export default HeroDisplay;