import React from 'react';
import logo from '../img/logo.png';

const Header = () => (
	<header>
		<div className="header__grid">
			<div className="header__img-wrap">
				<img src={logo} alt="logo" />
			</div>
			<h1>My World Of Recipe</h1>
		</div>
	</header>
);
export default Header;
