import { useState } from 'react'
import { useQuery } from '@apollo/client'
import PersonForm from './component/PersonForm'

import Persons from './component/Persons'
import { ALL_PERSONS } from './queries'
import PhoneForm from './component/PhoneForm'



const App = () => {
	const [errorMessage, setErrorMessage] = useState(null)
	
	const result = useQuery( ALL_PERSONS )

	if (result.loading) {
		return <div>loading...</div>
	}

	  const notify = (message) => {
			setErrorMessage(message)
			setTimeout(() => {
				setErrorMessage(null)
			}, 10000)
		}
	
	const Notify = ({ errorMessage }) => {
		if (!errorMessage) {
			return null
		}
		return <div style={{ color: 'red' }}>{errorMessage}</div>
	}

	return (
		<div>
			<Notify errorMessage={errorMessage} />
			<PersonForm setError={ notify } />
			<PhoneForm />
			<Persons persons={result.data.allPersons} />
		</div>
	)
}

export default App
