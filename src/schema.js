import { makeExecutableSchema } from "@graphql-tools/schema";
import resolvers from "./resolvers";

const typeDefs = `
  type Friend {
    id: ID,
    firstName: String
    lastName: String
    gender: String
    email: String
    age: Int
    contacts: [Contact]
  }
  type Contact {
    firstName: String
    lastName: String
  }
  enum Gender {
    MALE
    FEMALE
    OTHER
  }
  type Query {
    hello: String
    friend: Friend
  }
  input FriendInput {
    id: ID,
    firstName: String
    lastName: String
    gender: String
    email: String
    age: Int
  }
  type Mutation {
    createFriend(input: FriendInput): Friend
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
