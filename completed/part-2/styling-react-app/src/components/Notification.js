import React from 'react'

const Notification = ({ message, color }) => {
	if (message === null) {
		return null
	}
	return (
		<div className='success'>
			{message} {color}
		</div>
	)
}

export default Notification
