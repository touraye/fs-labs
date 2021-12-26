import React from 'react';

const Filter = ({ handleFilter }) => {
	return (
		<div style={filterStyles}>
			filter: <input style={inputStyles} text='' onChange={handleFilter} />
		</div>
	);
};

const filterStyles = {
	padding: '0.321rem',
	margin: '1rem',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '1rem',
	fontSize: '22px',
};

const inputStyles = {
	display: 'block',
	padding: '0.432rem',
	border: '1px solid #222',
	borderRadius: '29px',
	background: 'transparent',
};

export default Filter;
