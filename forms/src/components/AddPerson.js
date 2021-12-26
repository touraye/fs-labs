import React from 'react';

const AddPerson = ({
	newName,
	handleNameSubmit,
	newNumber,
	handleNumberSubmit,
	addPerson,
}) => {
	return (
		<form style={formStyle} onSubmit={addPerson}>
			<div style={flexCard}>
				name:
				<input
					style={inputStyles}
					onChange={handleNameSubmit}
					value={newName}
				/>
			</div>
			<div style={flexCard}>
				number:
				<input
					style={inputStyles}
					value={newNumber}
					onChange={handleNumberSubmit}
				/>
			</div>
			<div style={btnCover}>
				<button style={btnStyle} type='submit'>
					add
				</button>
			</div>
		</form>
	);
};

const formStyle = {
	marginTop: '1rem',
};

const flexCard = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	marginTop: '1rem',
	fontSize: '22px',
};

const btnCover = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	margin: '2rem',
};

const inputStyles = {
	display: 'block',
	padding: '0.432rem',
};

const btnStyle = {
	display: 'block',
	padding: '0.521rem 2.212rem',
	borderRadius: '8px',
	textTransform: 'uppercase',
	letterSpacing: '0.231rem',
	cursor: 'pointer',
};

export default AddPerson;
