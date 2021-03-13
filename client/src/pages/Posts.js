import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Posts() {
  // Setting our component's initial state
  const [posts, setPosts] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadPosts()
  }, [])

  // Loads all books and sets them to books
  function loadPosts() {
    API.getPosts()
      .then(res => 
        setPosts(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deletePost(id) {
    API.deletePost(id)
      .then(res => loadPosts())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name && formObject.seller && formObject.state  && formObject.city && formObject.password && formObject.price ) {
      API.savePost({

        //Put the criteria to save here (create posts)
        name: formObject.name,
         seller: formObject.seller,
         state: formObject.state,
         city: formObject.city,
         password: formObject.password,
         price: formObject.price
      })
        .then(res => loadPosts())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Jumbotron>
              <h1>What would you like to sell?</h1>
            </Jumbotron>
            <form className="input-format">
              <Input
                onChange={handleInputChange}
                name="name"
                placeholder="What would you like to sell? (required)"
              />
              <Input
                onChange={handleInputChange}
                name="seller"
                placeholder="Seller's phone# (required)"
              />
              <Input
                onChange={handleInputChange}
                name="state"
                placeholder="State"
              />
              <Input
                onChange={handleInputChange}
                name="city"
                placeholder="City"
              />
               <Input
                onChange={handleInputChange}
                name="password"
                placeholder="Password to delete post"
              />
              <Input
                onChange={handleInputChange}
                name="price"
                placeholder="Name Your Price"
              />
              
              <FormBtn
                disabled={!(formObject.name && formObject.seller && formObject.state  && formObject.city && formObject.password && formObject.price  )}
                onClick={handleFormSubmit}
              >
                Submit Post
              </FormBtn>

              
            </form>
          </Row>
      </Container>
    );
  }


export default Posts;
