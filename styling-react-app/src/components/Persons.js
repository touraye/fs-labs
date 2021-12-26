import React from 'react'
import Person from './Person'

const Persons = ({ filterPerson }) => {
	return (
		<ul>
			{filterPerson.map((person) => (
				<Person key={person.name} person={person} />
			))}
		</ul>
	)
}

export default Persons
