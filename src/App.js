import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/NavBar';
import MovieApp from './containers/landing/MovieApp';


const App = () => {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Route path = '/' exact component={MovieApp} />
                {/* <Route path = '/' exact component={movies} /> */}
                {/* <Route path = '/' exact component={tv} /> */}
                {/* <Route path = '/' exact component={mylist} /> */}
            </div>
        </Router>
        
    );
}

export default App;

