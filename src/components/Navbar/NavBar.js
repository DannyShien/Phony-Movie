import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import SearchFor from '../searchFor/SearchFor';

const NavBar = () => {
	// TODO: Color change to solid black on scroll. 
	return (
		<div className='navbar'>
			<div className='navTitle navAlign'>
				<Link to = '/' className='logoText'>MovieApp</Link>
			</div>
			<div className='navOptions navAlign'>
				<Link to = '/movies' className='links'>Movies</Link>
				<Link to = '/tv' className='links'>TV Shows</Link>
				<Link to = '/recent' className='links'>Recently Added</Link>
				<Link to = '/mylist' className='links'>My List</Link>
			</div>
			<div className='navProfile navAlign'>
				<SearchFor />
				<Link to = '/setting' className='links'>Profile</Link>
			</div>
		</div>
	)
}

export default NavBar;