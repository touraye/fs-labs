import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import axios from 'axios'

const App = () => {
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [filter, setFilter] = useState('')
	const [message, setMessage] = useState('')

	useEffect(() => {
		axios
			.get('http://localhost:3001/persons')
			.then((response) => {
				setPersons(response.data)
			})
			.catch((error) => {
				setMessage(
					`Information of ${persons.name} has already removed from server`
				)
				setTimeout(() => {
					setMessage(null)
				}, 5000)
			})
	}, [])

	const addNote = (e) => {
		e.preventDefault()

		const checkName = persons.filter(
			(person) => newName.toUpperCase() === person.name.toUpperCase()
		)

		if (checkName[0] !== undefined) {
			alert(`${newName} is already added to phonebook`)
		} else {
			setPersons(persons.concat({ name: newName, number: newNumber }))
			setNewName('')
			setNewNumber('')

			setMessage(`Added ${newName}`)
			setTimeout(() => {
				setMessage(null)
			}, 5000)
		}
	}

	const handleNameChange = (e) => {
		setNewName(e.target.value)
	}

	const handleNumberChange = (e) => {
		setNewNumber(e.target.value)
	}

	const handleFilter = (e) => {
		setFilter(e.target.value)
	}

	const filterPerson = persons.filter(
		(person) => person.name.toUpperCase().indexOf(filter.toUpperCase()) !== -1
	)

	return (
		<div className='wrapper'>
			<h1>Phonebook</h1>
			<Notification color={newName ? 'red' : 'green'} message={message} />
			<Filter handleFilter={handleFilter} value={filter} />

			<form onSubmit={addNote}>
				<h2>add a new</h2>
				<PersonForm
					handleNameChange={handleNameChange}
					newName={newName}
					handleNumberChange={handleNumberChange}
					newNumber={newNumber}
				/>
				<div>
					<button type='submit'>add</button>
				</div>
			</form>
			<h3>Numbers</h3>
			<Persons filterPerson={filterPerson} />
		</div>
	)
}

export default App
