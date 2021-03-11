import React, { useState } from 'react';
import Card from './../Card/Card.component';

const UseStateExample = () => {
	const [name, setName] = useState('Pulkit');
	const [changeName, setChangeName] = useState('Lipika');
	return (
		<div>
			<Card>
				<h1>{name}</h1>
				<button
					onClick={() => {
						setName(changeName);
						setChangeName(name);
					}}
				>
					Change name to {changeName}
				</button>
			</Card>
		</div>
	);
};

export default UseStateExample;
