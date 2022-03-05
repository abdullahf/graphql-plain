import express from "express";
import schema from "./schema";
import { graphqlHTTP } from "express-graphql";
import resolvers from "./resolver";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Express server running!</h1>");
});

const root = resolvers;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(8080, () => "Listening to port 8080.");
