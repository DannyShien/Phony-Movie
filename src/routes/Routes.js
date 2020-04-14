import React, { lazy } from 'react'; 
import { Route, Switch } from 'react-router-dom';

import MovieApp from '../containers/landing/MovieApp';


const Movie = lazy(() => import('../containers/movie/Movie'));
const SearchFor = lazy() => import('../components/searchFor/SearchFor')


const Routes = () => {
  return (
    <Switch>
      <Route path = '/' exact component={ MovieApp } />
      {/* <Route path = '/' exact component={movies} /> */}
      {/* <Route path = '/' exact component={tv} /> */}
      {/* <Route path = '/' exact component={mylist} /> */}
      <Route exact path='/moviedetail/:id' component={ Movie } />
      <Route exact path='/searchfor' component={ SearchFor } />
    </Switch>
  )
}

export default Routes; 