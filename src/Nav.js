import React from 'react';
import './Nav.css';

function Nav() {
	return (
		<div className='nav'>
			<img
				className='nav__logo'
				src='https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png'
				alt='Netflix Logo'
			/>
			<img
				class='nav__avatar'
				src='https://i.pinimg.com/736x/d6/5f/e3/d65fe3be1fa9955f0e0eb32395d29914.jpg'
				alt='Netflix Logo'
			></img>
		</div>
	);
}
export default Nav;
