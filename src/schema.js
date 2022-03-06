import { makeExecutableSchema } from "@graphql-tools/schema";
import resolvers from "./resolvers";

const typeDefs = `
  type Friend {
    id: ID,
    firstName: String
    lastName: String
    gender: String
    email: String
  }
  type email {
    email: String
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
  }
  type Mutation {
    createFriend(input: FriendInput): Friend
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
