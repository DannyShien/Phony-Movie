import React from 'react';
import {
    BrowserRouter as Router, 
    Route
} from 'react-router-dom';

import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar';

function App() {
    return (
        <Router>
            <NavBar />
            <div className="App">
                <Route path = '/' exact component={Home} />
                {/* <Route path = '/' exact component={tv} /> */}
                {/* <Route path = '/' exact component={movies} /> */}
                {/* <Route path = '/' exact component={mylist} /> */}
            </div>
        </Router>
        
    );
}

export default App;

