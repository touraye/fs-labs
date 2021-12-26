import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		console.log('effect');

		axios.get('https://restcountries.eu/all').then((response) => {
			console.log('promise fulfilled');
			setNotes(response.data);
			console.log(response.data);
		});
	}, []);

	return (
		<div>
			<h1>JSON Server</h1>
			{console.log(10)}
		</div>
	);
};

export default App;
