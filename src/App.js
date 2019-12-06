import React from 'react';
import {
    BrowserRouter as Router, 
    Route
} from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import PhonyMovie from './components/PhonyMovie';


const App = () => {
    return (
        <Router>
            <NavBar />
            <div className="App">
                <Route path = '/' exact component={PhonyMovie} />
                {/* <Route path = '/' exact component={movies} /> */}
                {/* <Route path = '/' exact component={tv} /> */}
                {/* <Route path = '/' exact component={mylist} /> */}
            </div>
        </Router>
        
    );
}

export default App;

