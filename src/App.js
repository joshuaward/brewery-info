import React, { Component, Fragment } from 'react';
import { formatPhoneNumber } from './Helpers'
import logo from './logo.svg';
import './scss/App.scss';

// components
import Header from './components/header';
// import Modal from './components/modal';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			breweryArray: [],
			modalOpen: false
		}
		this.toggleModal = this.toggleModal.bind(this);	
	}
	toggleModal = () => {
		console.log('Clicked')
		this.setState({
			modalOpen: !this.state.modalOpen
		})
	}
	// fetch API data on componentDidMount()
	componentDidMount() {
		fetch('https://api.openbrewerydb.org/breweries?per_page=50')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.setState({
					breweryArray: data
				})
			})
	}
  render() {
		let dataArray = this.state.breweryArray.map((item, index) => {
			return (
				<div className="brewery" key={item.id}>
					<div className="breweryInfo">
						<div className="breweryId">{item.id}</div>
						<h2 className="breweryName">{item.name}</h2>
						<div className="breweryLocation">
							<i className="fas fa-map-marker-alt"></i>
							<div className="breweryAddress">
								<div className="breweryStreet">{item.street}</div>
								<div className="breweryCity">
									{item.city}, {item.state} {item.postal_code.slice(0,-5)}
								</div>
							</div>
						</div>
						<div className="breweryURL">
							<i className="fas fa-at"></i>
							<a href={item.website_url} target="_blank">{item.website_url}</a>
						</div>
						<div className="breweryPhone">
							<i className="fas fa-phone-square"></i>
							<a href={item.phone}>{formatPhoneNumber(item.phone)}</a>
						</div>
						<div className="breweryType">
							<i className="fas fa-info-circle"></i> 
							<span>{item.brewery_type}</span>
						</div>
						<button className="breweryAlerts" onClick={this.toggleModal}>
							<i className="fas fa-bell"></i>
							Get New Beer Alerts
						</button>
					</div>
					<div className="breweryMap">
						<a href={`https://www.google.com/maps/search/?api=1&query=${item.name},${item.city},${item.state}`} target="_blank">
							<img src={`http://api.tomtom.com/map/1/staticimage?key=GAVaeZXe84AASxXQ9RGqhD2aFopKzYVG&zoom=15&center=${item.longitude},${item.latitude}&format=jpg&layer=basic&style=main&width=1305&height=748&view=Unified`} alt="map" />
						</a>
					</div>
				</div>
			)
		})
		return (
			<div className="App">
				<Header />
				<div className="breweries">
					{dataArray}
				</div>
				<div className={this.state.modalOpen ? 'alertsModal is-open' : 'alertsModal'}>
					<div className="alertsModal-inner">
						<button className="close" onClick={this.toggleModal}>
							<i className="fas fa-times"></i>
						</button>
						<header className="alertsModal-header">
							<img src="https://images.pexels.com/photos/3326710/pexels-photo-3326710.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=200&amp;w=500"/>
							<h4>Sign Up for Brewery Alerts</h4>
						</header>
						<section className="alertsModal-form">
							<form action="" id="signupForm">
								<div className="form-row">
									<div className="form-group">
										<input id="emailAddress" type="email" placeholder=""/>
										<label htmlFor="emailAddress">Email Address</label>
									</div>
								</div>
								<button type="submit" className="signup">Sign Up</button>
							</form>
						</section>
						<div className="alertsModal-thankYou">
							<p>You have successfully signed up!</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
