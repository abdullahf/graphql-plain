const friendDatabase = {};

class Friend {
  constructor(id, { firstName, lastName, gender, email }) {
    this.id = id;
    this.firstName = firstName;
    (this.lastName = lastName), (this.gender = gender);
    this.email = email;
  }
}

export const resolvers = {
  Query: {
    getFriend: (id) => {
      return new Friend(id, friendDatabase[id]);
    },
  },
  Mutation: {
    createFriend: (input) => {
      let id = require("crypto").randomBytes(10).toString("hex");
      friendDatabase[id] = input;
      return new FriendInput(id, input);
    },
  },
};
