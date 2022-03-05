const express = require("express");

const app = express();

app.use('/', (req, res) => {
    res.send('<h1>Express server running!</h1>')
})

app.listen(8080, () => "Listening to port 8080.");
