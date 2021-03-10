import classes from './Card.module.scss';
import React, { Component } from 'react';

class Card extends Component {
	state = {
		name: 'Pulkit',
		changeName: 'Lipika'
	};
	render() {
		return (
			<div className={classes.Card}>
				<h1>{this.state.name}</h1>
				<button
					onClick={() =>
						this.setState(() => ({
							name: this.state.changeName,
							changeName: this.state.name
						}))
					}
				>
					Change Name to {this.state.changeName}
				</button>
			</div>
		);
	}
}

export default Card;
