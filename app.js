const express = require("express");
const shoeRoute = require("./routes/shoes");
const { mongodbConnection } = require("./database/mongodb");
const userRoute = require("./routes/users");
const bagsRoute = require("./routes/bags");

const app = express();
const PORT = 8080;

// mongodbConnection();
app.use(express.json());
app.use("/shoes", shoeRoute);
app.use("/users", userRoute);
app.use("/bags", bagsRoute);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Westlake store");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    error: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
