import React from 'react'

const Notification = ({ message, color }) => {
	if (message === null) {
		return null
	}
	return <div style={{ color: color, marginBottom: '1.5rem' }}>{message}</div>
}

export default Notification
