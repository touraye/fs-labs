const Button = ({ handleDelete }) => {
	return (
		<button
			onClick={(e) => {
				if (window.confirm(`Are you sure you want to delete ${handleDelete}`))
					console.log(e.target)
			}}>
			delete
		</button>
	)
}

export default Button
