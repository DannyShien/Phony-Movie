import React from 'react'; 
import { Route, Switch } from 'react-router-dom';

import PhonyMovie from './containers/landing/PhonyMovie';


const MovieDetail = React.lazy(() => {
  return import('../containers/MovieDetail/MovieDetail');
})

const Routes = () => {
  <>
    <Switch>
      <Route path = '/' exact component={PhonyMovie} />
      {/* <Route path = '/' exact component={movies} /> */}
      {/* <Route path = '/' exact component={tv} /> */}
      {/* <Route path = '/' exact component={mylist} /> */}
    </Switch>
  </>
}

export default Routes; 