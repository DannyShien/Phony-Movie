import React, { lazy } from 'react'; 
import { Route, Switch } from 'react-router-dom';

import MovieApp from '../containers/landing/MovieApp';


const Movie = lazy(() => import('../containers/movie/Movie'));


const Routes = () => {
  return (
    <Switch>
      <Route path = '/' exact component={MovieApp} />
      {/* <Route path = '/' exact component={movies} /> */}
      {/* <Route path = '/' exact component={tv} /> */}
      {/* <Route path = '/' exact component={mylist} /> */}
      <Route path='/:id' component={Movie} />
    </Switch>
  )
}

export default Routes; 