import React, { Component } from 'react';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menuOpen: false
		}
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu = () => {
		this.setState({
			menuOpen: !this.state.menuOpen
		})
	}

	render() {
		return(
			<header className="header">
				<a className="logo" href="/">
					<i className="fas fa-beer"></i>
					Brewery.Info
				</a>
				<button 
					onClick={this.toggleMenu}
					className={this.state.menuOpen ? 'menuToggle is-open' : 'menuToggle'}>
					<span></span>
					<span></span>
					<span></span>
				</button>
				<div className={this.state.menuOpen ? 'menu is-open' : 'menu'}>
					<a href="#">Home</a>
					<a href="#">About</a>
					<a href="#">Contact</a>
					<a href="#">Search</a>
				</div>
			</header>
		)
	}
}

export default Header;