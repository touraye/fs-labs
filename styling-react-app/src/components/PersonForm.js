import React from 'react'

const PersonForm = ({
	newName,
	newNumber,
	handleNameChange,
	handleNumberChange,
}) => {
	return (
		<div>
			<div>
				name: <input onChange={handleNameChange} value={newName} />
			</div>
			<div>
				number: <input onChange={handleNumberChange} value={newNumber} />
			</div>
		</div>
	)
}

export default PersonForm
