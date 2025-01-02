require("dotenv").config();
// import express
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// create the express app
const app = express();

// middleware to handle JSON request
app.use(express.json());

// setup cors policy
app.use(cors());

// connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/ecommerce")
  .then(() => {
    // if mongodb is successfully connected
    console.log("MongoDB is connected");
  })
  .catch((error) => {
    console.log(error);
  });

// root route
app.get("/", (req, res) => {
  res.send("Happy coding!");
});

// import all the routes
const productRoutes = require("./routes/product");

app.use("/products", productRoutes);
app.use("/categories", require("./routes/category"));
app.use("/orders", require("./routes/order"));
app.use("/payment", require("./routes/payment"));
app.use("/auth", require("./routes/user"));

// start the server
app.listen(5555, () => {
  console.log("Server is running at http://localhost:5555");
});
