import React, { lazy } from 'react'; 
import { Route, Switch } from 'react-router-dom';
import MovieApp from '../containers/landing/MovieApp';

const Movie = lazy(() => import('../containers/movie/Movie'));
const SearchResult = lazy(() => import('../components/searchResult/SearchResult')) 


const Routes = () => {
  return (
    <Switch>
      <Route path = '/' exact component={ MovieApp } />
      {/* <Route path = '/' exact component={movies} /> */}
      {/* <Route path = '/' exact component={tv} /> */}
      {/* <Route path = '/' exact component={mylist} /> */}
      <Route exact path='/moviedetail/:id' component={ Movie } />
      <Route exact path='/searchresult' component={ SearchResult } />
    </Switch>
  )
}

export default Routes; 