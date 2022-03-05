import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Friend {
    id: ID,
    firstName: String
    lastName: String
    gender: String
    email: [email]!
  }
  type email {
    email: String
  }
  type Query {
    hello: String
    friend: Friend
  }
`);

export default schema;
