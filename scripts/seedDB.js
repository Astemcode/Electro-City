const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactsaleslist"
);

const postSeed = [
  {
    name: "Bike",
    seller: "Stephen King",
    description:
      "Used BMX",
    state: "Florida",
    city: "Miami",
    date: new Date(Date.now()),
    password: "",
    price: 75,
    imageURL: ""
  },
  {
    name: "Table",
    seller: "Lion King",
    description:
      "Dining Table 8 ft.",
    state: "Florida",
    city: "Plantation",
    date: new Date(Date.now()),
    password: "",
    price: 250,
    imageURL: ""
  },
  {
    name: "Lamp",
    seller: "Jessica",
    description:
      "UIndustrial Lamp",
    state: "Florida",
    city: "Miami",
    date: new Date(Date.now()),
    password: "",
    price: 15,
    imageURL: ""

  }
];

db.Post
  .remove({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
