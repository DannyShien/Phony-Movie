import React from 'react';
import './MovieDetail.css';


const MovieDetail = ({ id, alt, backdropSrc, posterSrc, title, rating, summary, genres, style }) => {
  console.log(genres)
  let genreList = genres.map(genre => {
    console.log(genre)
    return <div className='movieGenre' key={genre.id}>{ genre.name }</div> 
  })
  return (
    <div className='detailPage'>
      <img className='backdrop' src={ backdropSrc } alt={ alt } />
      <section className='overlay'>
        <div className='details'>
          <div className='detailPoster'>
            <img src={ posterSrc } alt={ alt } />
          </div>
          <div className='info'>
            <h1>{ title }</h1>
            <p>{ `Rating: ${ rating }` }</p>
            <p>{ summary }</p>
            <div className='genreList'>{ genreList }</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MovieDetail;