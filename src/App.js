import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
// import Navbar from './components/navbar/NavBar';
import Routes from './routes/Routes';


const App = () => {
  return (
		<Router>
      <Suspense fallback={<p>Loading...</p>}>
          <div className="App">
              {/* <Navbar /> */}
              <Routes />
          </div>
      </Suspense>
		</Router>    
  );
}

export default App;


