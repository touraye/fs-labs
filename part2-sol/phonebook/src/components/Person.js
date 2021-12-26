import React from 'react'

const Person = ({ person, onDelete }) => {
	return (
		<li className='name__list'>
			<div className='contact__details'>
				<span className='name__label'>{person.name.substring(0, 1)}</span>
				<div className='contact__info'>
					<span>{person.name}</span> <span>{person.number}</span>
				</div>
			</div>
			<span>
				<button onClick={onDelete}>Delete</button>
			</span>
		</li>
	)
}

export default Person
