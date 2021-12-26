import React from 'react';

const Person = ({ person }) => {
	return (
		<li>
			<span>{person.name} </span>
			<span> {person.number}</span>
		</li>
	);
};

export default Person;
