const mongoos = require("mongoose");
const connectionString = process.env.DB;

mongoos
  .connect(connectionString)
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });
