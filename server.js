// import express
const express = require("express");

// import mongoose
const mongoose = require("mongoose");

// create the express app
const app = express();

// middleware to handle JSON request (body)
app.use(express.json());

// connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/e_commerce")
  .then(() => {
    // if mongodbb is successfully connected
    console.log("MongoDB is connected");
  })
  .catch((error) => {
    console.log(error);
  });

// root route
app.get("/", (req, res) => {
  res.send("Happy Coding!");
});

// import all the routes
const productRouter = require("./routes/product");
const categoryRouter = require("./routes/category");

// define urls for routers
app.use("/products", productRouter);
app.use("/categories", categoryRouter);

// start the server
app.listen(5555, () => {
  console.log("Server is running at http://localhost:5555");
});