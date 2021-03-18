import React from 'react';
import CartWidget from '../CartWidget';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand" href="/">
				Coral Byte
			</a>

			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<a className="nav-item nav-link active" href="/">
						Home
					</a>
					<a className="nav-item nav-link" href="/">
						Notebooks
					</a>
					<a className="nav-item nav-link" href="/">
						Phones
					</a>
				</div>
			</div>
			<CartWidget />

			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
		</nav>
	);
};

export default Navbar;
