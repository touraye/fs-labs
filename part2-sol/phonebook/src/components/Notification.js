import React from 'react'

const Notification = ({ message, background, color, spacing }) => {
	//check for null message
	if (message === null) {
		return null
	}
	return (
		<div
			style={{
				background: background,
				color: color,
				padding: spacing,
				margin: spacing,
			}}>
			{message}
		</div>
	)
}

export default Notification
