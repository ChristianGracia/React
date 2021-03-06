const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => res.send("server is up"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on port ${port}`));
