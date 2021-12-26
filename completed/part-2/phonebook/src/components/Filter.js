import React from 'react';

const Filter = ({ handleFilter }) => {
	return (
		<div>
			filter shown with <input type='text' onChange={handleFilter} />
		</div>
	);
};

export default Filter;
