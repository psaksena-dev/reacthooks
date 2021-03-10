import React, { useState } from 'react';
import Card from './../Card/Card.component';

class UseStateExample extends React.Component {
	state = {
		name: 'Pulkit',
		changeName: 'Lipika'
	};
	render() {
		return (
			<div>
				<Card>
					<h1>{this.state.name}</h1>
					<button
						onClick={() =>
							this.setState((prevState) => ({
								name: prevState.changeName,
								changeName: prevState.name
							}))
						}
					>
						Change name to {this.state.changeName}
					</button>
				</Card>
			</div>
		);
	}
}

export default UseStateExample;
