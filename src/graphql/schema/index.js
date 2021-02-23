import { buildSchema } from 'graphql'

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type User {
    id: Int
    email: String
    phone: Int
  }

  type Query {
    users: [User]
  }

  input AddUserInput{
    email: String!
    phone: Int!
    id: Int
  }

  type Mutation {
    addUser(input: AddUserInput): User
  }
`)

export default schema
