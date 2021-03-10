const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const bookSeed = [
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
    photo: ""
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
    photo: ""
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
    photo: ""
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
