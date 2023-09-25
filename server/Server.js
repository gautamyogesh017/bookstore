const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
require("dotenv").config();

const port = process.env.PORT;

const connect = require("./src/db/mongoose");
connect();

const bookRouter = require("./src/Controller/bookRouter");
const loginRouter = require("./src/Controller/loginRouter");
const registerRouter = require("./src/Controller/registerRouter");

app.use("/api/books", bookRouter);
app.use("/api/register", registerRouter);
app.use("/api/login", loginRouter);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
