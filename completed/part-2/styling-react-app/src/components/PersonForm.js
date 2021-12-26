import React from 'react';

const PersonForm = ({
	handleFilter,
	newName,
	handleNameSubmit,
	newNumber,
	handleNumberSubmit,
	addPersons,
}) => {
	return (
		<div>
			<form onSubmit={addPersons}>
				<div>
					name: <input value={newName} onChange={handleNameSubmit} />
				</div>
				<div>
					number: <input value={newNumber} onChange={handleNumberSubmit} />
				</div>
				<div>
					<button type='submit'>add</button>
				</div>
			</form>
		</div>
	);
};

export default PersonForm;
