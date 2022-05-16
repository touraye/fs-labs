const { ApolloServer, UserInputError, gql } = require( 'apollo-server' )
const mongoose = require( 'mongoose' )
const Person = require('./models/person')
const { v1: uuid } = require( 'uuid' )

const MONGODB_URI = 'mongodb://localhost:27017/gqlphonebook'

console.log('connecting to', MONGODB_URI)

mongoose
	.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('connected to MongoDB')
	})
	.catch((error) => {
		console.log('error connection to MongoDB:', error.message)
	})

let persons = [
	{
		name: 'Arto Hellas',
		phone: '040-123543',
		street: 'Tapiolankatu 5 A',
		city: 'Espoo',
		id: '3d594650-3436-11e9-bc57-8b80ba54c431',
	},
	{
		name: 'Matti Luukkainen',
		phone: '040-432342',
		street: 'Malminkaari 10 A',
		city: 'Helsinki',
		id: '3d599470-3436-11e9-bc57-8b80ba54c431',
	},
	{
		name: 'Venla Ruuska',
		street: 'Nallemäentie 22 C',
		city: 'Helsinki',
		id: '3d599471-3436-11e9-bc57-8b80ba54c431',
	},
]

const typeDefs = gql`
	type Address {
		street: String!
		city: String!
	}

	type Person {
		name: String!
		phone: String
		address: Address!
		id: ID!
	}

	enum YesNo {
		YES
		NO
	}

	type Query {
		personCount: Int!
		allPersons(phone: YesNo): [Person!]!
		findPerson(name: String!): Person
	}

	type Mutation {
		addPerson(
			name: String!
			phone: String
			street: String!
			city: String!
		): Person
		editNumber(
			name: String!, 
			phone: String!
			): Person
	}
`

const resolvers = {
	Query: {
		personCount: async () => Person.collection.countDocuments(),	
		allPersons: async (root, args) => {
			if (!args.phone) {
				return Person.find({})
			}

			return Person.find({ phone: { $exists: args.phone === 'YES' } })
		},
		findPerson: async (root, args) => Person.findOne({ name: args.name }),
	},
	Person: {
		address: (root) => {
			return {
				street: root.street,
				city: root.city,
			}
		},
	},
	Mutation: {
		addPerson: async (root, args) => {
			const person = new Person({ ...args })

			try {
				await person.save()
			} catch (error) {
				throw new UserInputError(error.message, {
					invalidArgs: args,
				})
			}
			return person
		},
		editNumber: async (root, args) => {
			const person = await Person.findOne({ name: args.name })
			person.phone = args.phone

			try {
				await person.save()
			} catch (error) {
				throw new UserInputError(error.message, {
					invalidArgs: args,
				})
			}
			return person
		},
	},
}

const server = new ApolloServer({
	typeDefs,
	resolvers,
})

server.listen().then(({ url }) => {
	console.log(`Server ready at ${url}`)
})
