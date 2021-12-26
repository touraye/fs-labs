import React from 'react'

const PersonForm = ({
	newName,
	newNumber,
	handleNameChange,
	handleNumberChange,
}) => {
	return (
		<>
			<div className='form__group'>
				<label className='form__label'>Name</label>
				<input
					onChange={handleNameChange}
					value={newName}
					placeholder='Type Name'
					className='form__input'
				/>
			</div>
			<div className='form__group'>
				<label className='form__label'>Number</label>
				<input
					onChange={handleNumberChange}
					value={newNumber}
					placeholder='Type Number'
					className='form__input'
				/>
			</div>
		</>
	)
}

export default PersonForm
