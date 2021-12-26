import { useState } from 'react';
import AddPerson from './components/AddPerson';
import DisplayPerson from './components/DisplayPerson';
import Filter from './components/Filter';
// import './Styles.scss';

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Ebrima', number: '3119658' },
		{ name: 'Binta', number: '5119658' },
		{ name: 'Alieu', number: '7119658' },
		{ name: 'Mariama', number: '97657' },
		{ name: 'Faal', number: '3119658' },
	]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [filter, setFilter] = useState('');

	const addPerson = (e) => {
		e.preventDefault();
		// Prevent the user from adding a person which is already in the phone book
		const checkName = persons.filter(
			(person) => newName.toUpperCase() === person.name.toUpperCase()
		);
		if (checkName[0] !== undefined) {
			alert(`${newName} is already added`);
		} else {
			setPersons(
				persons.concat({
					name: newName,
					number: newNumber,
				})
			);
		}
	};

	const handleNameSubmit = (e) => {
		console.log(e.target.value);
		setNewName(e.target.value);
	};

	const handleNumberSubmit = (e) => {
		setNewNumber(e.target.value);
	};

	const handleFilter = (e) => {
		setFilter(e.target.value);
		console.log(e.target.value);
	};

	const filterPerson = persons.filter(
		(person) => person.name.toUpperCase().indexOf(filter.toUpperCase()) !== -1
	);
	const nameMatch = filterPerson.length;

	return (
		<div>
			<div style={headingStyle}>
				<h2 style={headingOneStyle}>Phonebook</h2>
			</div>
			<Filter handleFilter={handleFilter} />
			<AddPerson
				newName={newName}
				handleNameSubmit={handleNameSubmit}
				newNumber={newNumber}
				handleNumberSubmit={handleNumberSubmit}
				addPerson={addPerson}
			/>
			<p>Found {nameMatch}</p>
			<h2>Numbers</h2>
			<DisplayPerson filterPerson={filterPerson} />
		</div>
	);
};

const headingStyle = {
	backgroundColor: '#666',
	color: '#222',
	padding: '0.212rem',
	margin: '0',
	textAlign: 'center',
};

const headingOneStyle = {
	textTransform: 'uppercase',
	letterSpacing: '0.212rem',
};

export default App;
