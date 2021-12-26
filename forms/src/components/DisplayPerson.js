import React from 'react';
import Person from './Person';

const DisplayPerson = ({ filterPerson }) => {
	return (
		<div>
			<ul>
				{filterPerson.map((person) => (
					<Person key={person.name} person={person} />
				))}
			</ul>
		</div>
	);
};

export default DisplayPerson;
