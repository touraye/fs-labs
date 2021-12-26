import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Footer from './components/Footer'
import Header from './components/Header'
import Notification from './components/Notification'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

import PhoneBookService from './services/notes'

const App = () => {
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [filter, setFilter] = useState('')
	const [successMessage, setSuccessMessage] = useState('')
	const [errorMessage, setErrorMessage] = useState('')
	const [show, setShow] = useState(false)

	useEffect(() => {
		PhoneBookService.getAll().then((initialPerson) => {
			setPersons(initialPerson)
		})
	}, [])

	const addPerson = (e) => {
		e.preventDefault()

		if (!newName || !newNumber) {
			alert('Please fill in all fields!')
			return
		}

		const checkName = persons.filter(
			(person) => person.name.toUpperCase() === newName.toUpperCase()
		)

		if (checkName[0] !== undefined) {
			if (
				window.confirm(
					`${newName} is already added to phonebook, replace the old number with a new one?`
				)
			) {
				const findPerson = persons.find((person) => person.name === newName)
				const id = findPerson.id

				const newObject = {
					...findPerson,
					number: newNumber,
				}

				PhoneBookService.update(id, newObject)
					.then((returnValue) => {
						setPersons(
							persons.map((person) => (person.id !== id ? person : returnValue))
						)

						setSuccessMessage(`${findPerson.name} is successfully updated`)

						setNewName('')
						setNewNumber('')

						setTimeout(() => {
							setSuccessMessage(null)
						}, 5000)
					})
					.catch((error) => {
						console.log('error happened', error)
						setErrorMessage(
							`information of ${findPerson.name} has been already removed from the server`
						)
						setTimeout(() => {
							setErrorMessage(null)
						}, 5000)
					})
			}
		} else {
			const newObject = {
				name: newName,
				number: newNumber,
			}

			PhoneBookService.create(newObject).then((returnPerson) => {
				setPersons(persons.concat(returnPerson))

				setNewName('')
				setNewNumber('')

				setSuccessMessage(`${newName} is successfully added to phonebook`)
				setTimeout(() => {
					setSuccessMessage(null)
				}, 5000)
			})
		}
	}

	const handleDelete = (id) => {
		const person = persons.find((person) => person.id === id)
		if (window.confirm(`Are you sure you want to delete ${person.name}`)) {
			const deletedPerson = persons.filter((person) => person.id !== id)
			PhoneBookService.deletePerson(id).then((returnPerson) => {
				setPersons(deletedPerson)

				setSuccessMessage(
					`${person.name} is successfully deleted form the phonebook`
				)
				setTimeout(() => {
					setSuccessMessage(null)
				}, 5000)
			})
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

	const handleModal = () => {
		setShow(!show)
	}

	return (
		<>
			<Header />
			<div className='wrapper'>
				<div className='title__container'>
					<h3>Create new contact</h3>

					<button
						onClick={handleModal}
						className='modal__btn'
						style={
							show
								? { backgroundColor: '#A10' }
								: { backgroundColor: '#005300' }
						}>
						{show ? 'close form' : 'open form'}
					</button>
				</div>
				<Notification
					message={successMessage ? successMessage : errorMessage}
					background={'#ccc'}
					color={successMessage ? '#005300' : '#a10000'}
					spacing={successMessage ? '1rem' : errorMessage ? '1rem' : ''}
				/>

				<Filter handleFilter={handleFilter} value={filter} />

				{show && (
					<form onSubmit={addPerson} className='form'>
						<h2 className='form__title'>add a new</h2>
						<PersonForm
							handleNameChange={handleNameChange}
							newName={newName}
							handleNumberChange={handleNumberChange}
							newNumber={newNumber}
						/>
						<div className='form__group'>
							<button type='submit' className='form__add-btn'>
								save contact
							</button>
						</div>
					</form>
				)}
				<h2 className='contact__list'>Contact List</h2>
				<Persons filterPerson={filterPerson} onDelete={handleDelete} />
				<div className='count'>
					<p className='count__text'>
						{persons.length}
						{'  '}
						{persons.length <= 1 ? 'contact' : 'contacts'}
					</p>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default App
