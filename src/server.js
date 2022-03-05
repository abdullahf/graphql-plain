import express from "express";
import schema from "./schema";
import { graphqlHTTP } from "express-graphql";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Express server running!</h1>");
});

const root = {
  hello: () => "Welcome to graphql!",
  friend: () => {
    return {
      id: 1,
      firstName: "Abdullah",
      lastName: "Foysal",
      gender: "Male",
      email: [{ email: "one@g.com" }, { email: "two@g.com" }],
    };
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(8080, () => "Listening to port 8080.");
