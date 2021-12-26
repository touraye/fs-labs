import axios from 'axios'
// const baseUrl = 'http://localhost:3002/api/persons'
const baseUrl = 'http://localhost:3001/persons'

//@GET all notes
const getAll = () => {
	const request = axios.get(baseUrl)
	return request.then((response) => response.data)
}

// @CREATE note
const create = (newObject) => {
	const request = axios.post(baseUrl, newObject)
	return request.then((response) => response.data)
}

// @UPDATE note
const update = (id, newObject) => {
	const request = axios.put(`${baseUrl}/${id}`, newObject)
	return request.then((response) => response.data)
}

// @DELETE note
const deletePerson = (id) => {
	const request = axios.delete(`${baseUrl}/${id}`)
	return request.then((response) => response.data)
}

const service = {
	getAll,
	create,
	update,
	deletePerson,
}

export default service
