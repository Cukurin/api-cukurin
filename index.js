require("dotenv").config()
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./config/database");
const { PORT } = require("./config/variableEnv");

const userRouter = require("./routes/user")
const barbershopRouter = require("./routes/barbershop")
const app = express();
const port = PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("assets/images/"));

db.then(() => {
  console.log(`connected to database`);
}).catch(error => {
  console.log("error happened when to reach mongodb connection", error);
});

app.use("/user", userRouter)
app.use("/barbershop", barbershopRouter)

app.listen(port, () => {
  console.log(` server running on port: ${PORT}!`);
});
