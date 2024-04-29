const express = require("express");

const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./db/connection");

const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

connectDB()

app.use(express.json());

app.use("/api/contacts", require("./routes/ContactRouter"));
app.use("/api/users" , require("./routes/UserRouter"))
app.use(errorHandler);


app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
