import React from 'react'

const Footer = () => {
	return (
		<footer className='footer'>
			<p>
				&copy; <span className='year'>{new Date().getFullYear()}</span>
				{'  '}
				Build with Love by <a href='https://github.com/touraye'>Pa Ebou</a>
			</p>
		</footer>
	)
}

export default Footer
