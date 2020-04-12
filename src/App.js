import React, { Fragment, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/NavBar'
import Routes from './routes/Routes'


const App = () => {
  return (
		<Router>
      <Suspense fallback={<p>Loading...</p>}>
          <div className="App">
              <NavBar />
              <Routes />
          </div>
      </Suspense>
		</Router>    
  );
}

export default App;


