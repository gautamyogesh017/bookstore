const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
require("dotenv").config();

const connect = require("./src/db/mongoose");
connect();

const bookRouter = require("./src/Controller/bookRouter");
const loginRouter = require("./src/Controller/loginRouter");
const registerRouter = require("./src/Controller/registerRouter");

app.use("/books", bookRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);

app.listen(process.env.PORT, () => {
  console.log(`Bookstore Server listening on port ${process.env.PORT}`);
});
