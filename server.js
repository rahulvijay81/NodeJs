const express = require("express");

// error handler
const errorHandler = require("./middleware/errorHandler");

// database connection
const connectDB = require("./db/connection");

// dotenv config
const dotenv = require("dotenv").config();

const app = express();

//port configuration
const port = process.env.PORT || 5000;

//db connection
connectDB()

app.use(express.json());

// middleware
app.use("/api/contacts", require("./routes/ContactRouter"));
app.use("/api/users" , require("./routes/UserRouter"))

// error handler middleware
app.use(errorHandler);


app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
