import React from 'react';
import {
    BrowserRouter as Router, 
    Route
} from 'react-router-dom';

import './App.css';
import Home from './components/Home'

function App() {
    return (
        <Router>
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
