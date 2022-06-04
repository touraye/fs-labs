import { useState } from 'react'
import { useApolloClient, useQuery } from '@apollo/client'
import PersonForm from './component/PersonForm'

import Persons from './component/Persons'
import { ALL_PERSONS } from './queries'
import PhoneForm from './component/PhoneForm'
import LoginForm from './component/LoginForm'



const App = () => {
	  const [token, setToken] = useState(null)
	const [errorMessage, setErrorMessage] = useState(null)	
	const result = useQuery( ALL_PERSONS )
	const client = useApolloClient()

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

	  const logout = () => {
			setToken(null)
			localStorage.clear()
			client.resetStore()
		}

	  if (!token) {
			return (
				<div>
					<Notify errorMessage={errorMessage} />
					<h2>Login</h2>
					<LoginForm setToken={setToken} setError={notify} />
				</div>
			)
		}

	return (
		<div>
			<Notify errorMessage={errorMessage} />
			<button onClick={logout}>logout</button>
			<PersonForm setError={notify} />
			<PhoneForm setError={notify} />
			<Persons persons={result.data.allPersons} />
		</div>
	)
}

export default App
