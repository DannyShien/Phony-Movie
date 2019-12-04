import React from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css'
 
const NavBar = () => {
    return (
        <div>
            <Link to = '/'>PhonyMovies</Link>
            <div>
                <Link to ='/tv'>TV Shows</Link>
                <Link to ='/movies'>Movies</Link>
                <Link to ='/recent'>Recently Added</Link>
                <Link to ='/mylist'>My List</Link>
            </div>
            <div>
                <p>search bar</p>
                <Link to ='/setting'>Profile</Link>
            </div>
        </div>
    )
}

export default NavBar; 