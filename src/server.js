import express from "express";
import { schema } from "./schema";
import { graphqlHTTP } from "express-graphql";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Express server running!</h1>");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(8080, () => "Listening to port 8080.");
