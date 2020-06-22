const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
var bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
