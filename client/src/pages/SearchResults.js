import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { FilterForm } from "../components/FilterForm";


function SearchResults() {
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
    if (formObject.title && formObject.author) {
      API.savePost({

        //Put the criteria to save here (create posts)
        /* title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis */
      })
        .then(res => loadPosts())
        .catch(err => console.log(err));
    }
  };
  return (
    <Row>
      <Col size="sm-12">
        <Jumbotron>
          <h1>These are the items that we have for you!</h1>
        </Jumbotron>
        <FilterForm />
        {posts.length ? ( 
          <List>
            {posts.map((post) => ( 
              <ListItem key={post._id}>
                <Link to={"/posts/" + post._id}>
                  <strong>
                    {post.name} For sale by: {post.seller}
                  </strong>
                </Link>
                <DeleteBtn onClick={() => deletePost(posts._id)} />
              </ListItem>
            ))}
          </List>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </Col>
    </Row>
  );
}

export default SearchResults;
