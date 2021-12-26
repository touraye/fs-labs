import React from 'react'

const Person = ({ person }) => {
	return (
		<div>
			<li>
				<span>{person.name}</span> <span>{person.number}</span>
			</li>
		</div>
	)
}

export default Person
