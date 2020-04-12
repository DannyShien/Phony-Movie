import React, { lazy } from 'react'; 
import { Route, Switch } from 'react-router-dom';

import MovieApp from '../containers/landing/MovieApp';


const MovieDetail = lazy(() => import('../containers/movieDetail/MovieDetail'));


const Routes = () => {
  return (
    <Switch>
      <Route path = '/' exact component={MovieApp} />
      {/* <Route path = '/' exact component={movies} /> */}
      {/* <Route path = '/' exact component={tv} /> */}
      {/* <Route path = '/' exact component={mylist} /> */}
    </Switch>
  )
}

export default Routes; 