import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'

import Person from './Person'

const FIND_PERSON = gql`
	query findPersonByName($nameToSearch: String!) {
		findPerson(name: $nameToSearch) {
			name
			phone
			id
			address {
				street
				city
			}
		}
	}
`

const Persons = ( { persons } ) => {
  const [nameToSearch, setNameToSearch] = useState(null)
  const result = useQuery(FIND_PERSON, {
    variables: { nameToSearch },
    skip: !nameToSearch,
  })

  if (nameToSearch && result.data) {
    return (
      <Person
        person={result.data.findPerson}
        onClose={() => setNameToSearch(null)}
      />
    )
  }

  return (
    <div>
      <h2>Person List</h2>
      <ul>
        {
          persons.map( p => (
            <li key={ p.name }>
              { p.name } { p.phone }
              <button
                onClick={ () => setNameToSearch( p.name ) }>
                show address
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Persons
