import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import DisplayPerson from './components/DisplayPerson'
import Notification from './components/Notification'

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456' },
		{ name: 'Ada Lovelace', number: '39-44-5323523' },
		{ name: 'Dan Abramov', number: '12-43-234345' },
		{ name: 'Mary Poppendieck', number: '39-23-6423122' },
	])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [filter, setFilter] = useState('')
	const [message, setMessage] = useState('')

	const addPersons = (e) => {
		e.preventDefault()
		const checkName = persons.filter(
			(person) => newName.toUpperCase() === person.name.toUpperCase()
		)

		if (checkName[0] !== undefined) {
			alert(`${newName} is already added to phonebook`)
		} else {
			setPersons(
				persons.concat({
					name: newName,
					number: newNumber,
				})
			)
			setMessage(`Added ${newName}`)
			setTimeout(() => {
				setMessage(null)
			}, 5000)
		}
	}

	const handleNameSubmit = (e) => {
		setNewName(e.target.value)
	}

	const handleNumberSubmit = (e) => {
		setNewNumber(e.target.value)
	}

	const handleFilter = (e) => {
		setFilter(e.target.value)
	}

	const filterPerson = persons.filter(
		(person) => person.name.toUpperCase().indexOf(filter.toUpperCase()) !== -1
	)

	return (
		<div>
			<h1>Phonebook</h1>
			<Notification message={message} />
			<Filter handleFilter={handleFilter} />
			<h2>add a new</h2>
			<PersonForm
				newName={newName}
				handleNameSubmit={handleNameSubmit}
				newNumber={newNumber}
				handleNumberSubmit={handleNumberSubmit}
				addPersons={addPersons}
			/>
			<h2>Numbers</h2>
			<DisplayPerson filterPerson={filterPerson} />
		</div>
	)
}

export default App
