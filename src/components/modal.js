import React, { Component } from 'react';

class Modal extends Component {
	constructor(props) {
		super(props);
		this.state = {
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
	render() {
		return(
			<div className="alertsModal">
				<div className="alertsModal-inner">
					<button className="close">
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
		)
	}
}

export default Modal;