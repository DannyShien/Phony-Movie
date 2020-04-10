import React from 'react';
import Movie from '../../containers/movieDetail/Movie';

const MovieDetail = ({ id, backdrop, poster, title, rating, overview, genre, style }) => {
  return (
    <div>
      <header>
        <img src={ backdrop } />
      </header>
      <section>
        <div>
          <img src={poster} />
        </div>
        <div>
          <h1>{ title }</h1>
          <p>{ rating }</p>
          <p>{ overview }</p>
          {/* <p>genres</p> */}
        </div>
      </section>
    </div>
  )
}

export default MovieDetail;