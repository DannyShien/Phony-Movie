import React, { Fragment, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Routes from './routes/Routes'


const App = () => {
  return (
		<Router>
      <Suspense fallback={<p>Loading...</p>}>
          <div className="App">
              <Navbar />
              <Routes />
          </div>
      </Suspense>
		</Router>    
  );
}

export default App;


