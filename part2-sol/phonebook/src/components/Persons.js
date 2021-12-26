import React from 'react'
import Person from './Person'

const Persons = ({ filterPerson, onDelete }) => {
	return (
		<ul className='name__item'>
			{filterPerson.map((person) => (
				<Person
					key={person.name}
					person={person}
					onDelete={() => onDelete(person.id)}
				/>
			))}
		</ul>
	)
}

export default Persons
