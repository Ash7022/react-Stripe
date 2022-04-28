const express = require("express")
const cors = require("cors")

const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));


const college= require("./routes/striperoute");
app.use(college);

module.exports = app;