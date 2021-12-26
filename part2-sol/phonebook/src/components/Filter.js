import React from 'react'

const Filter = ({ handleFilter }) => {
	return (
		<div className='filter__container'>
			<p>Filter show with</p>
			<input
				type='text'
				onChange={handleFilter}
				className='filter__input'
				placeholder='Type to search'
			/>
		</div>
	)
}

export default Filter
