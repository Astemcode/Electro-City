import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { FilterForm } from "../components/FilterForm";
import Modal from "../components/Modal";

function SearchResults() {
  const [open, setOpen] = React.useState(false);
  const [verified, setVerified] = React.useState(false);

  function getList() {
    API.getPosts().then((data) => {
      console.log(data);
      setOpen(true);
    });
  }
  // Setting our component's initial state
  const [posts, setPosts] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all books and store them with setBooks
  useEffect(() => {
    loadPosts();
  }, []);

  // Loads all books and sets them to books
  function loadPosts() {
    API.getPosts()
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }

  // Deletes a book from the database with a given id, then reloads books from the db
  function deletePost(id) {
    API.deletePost(id)
      .then((res) => loadPosts())
      .catch((err) => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
    console.log(formObject);
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();

    let regex;
    if(formObject.item){
      regex = new RegExp(formObject.item.toLowerCase());
    }
    
    let filteredPosts;
    if (formObject.city && !formObject.state && !formObject.price && !formObject.item) {
      filteredPosts = posts.filter(
        (post) => post.city.toLowerCase() === formObject.city.toLowerCase()
      );
    } else if (formObject.state && !formObject.city && !formObject.price && !formObject.item) {
      filteredPosts = posts.filter(
        (post) => post.state.toLowerCase() === formObject.state.toLowerCase()
      );
    } else if (formObject.price && !formObject.city && !formObject.state && !formObject.item) {
      filteredPosts = posts.filter((post) => post.price <= formObject.price);
    } else if (formObject.item && !formObject.city && !formObject.state && !formObject.price){
      filteredPosts = posts.filter(post => regex.test(post.name.toLowerCase()));
    } else if (formObject.city && formObject.state && !formObject.price && !formObject.item) {
      filteredPosts = posts.filter(
        (post) =>
          post.city.toLowerCase() === formObject.city.toLowerCase() &&
          post.state.toLowerCase() === formObject.state.toLowerCase()
      );
    } else if (formObject.city && formObject.price && !formObject.state && !formObject.item) {
      filteredPosts = posts.filter(
        (post) =>
          post.city.toLowerCase() === formObject.city.toLowerCase() &&
          post.price <= formObject.price
      );
    } else if (formObject.state && formObject.price && !formObject.city && !formObject.item) {
      filteredPosts = posts.filter(
        (post) =>
          post.state.toLowerCase() === formObject.state.toLowerCase() &&
          post.price <= formObject.price
      );
    } else if (formObject.item && formObject.city && !formObject.state && !formObject.price){
      filteredPosts = posts.filter(post => post.city.toLowerCase() === formObject.city.toLowerCase() && regex.test(post.name.toLowerCase()));
    } else if (formObject.item && formObject.state && !formObject.city && !formObject.price) {
      filteredPosts = posts.filter(post => post.state.toLowerCase() === formObject.state.toLowerCase() && regex.test(post.name.toLowerCase()))
    } else if (formObject.item && formObject.price && !formObject.city && !formObject.state) {
      filteredPosts = posts.filter(post => post.price <= formObject.price && regex.test(post.name.toLowerCase()))
    } else if (formObject.city && formObject.state && formObject.price && formObject.item) {
      filteredPosts = posts.filter(
        (post) =>
          post.city.toLowerCase() === formObject.city.toLowerCase() &&
          post.state.toLowerCase() === formObject.state.toLowerCase() &&
          post.price <= formObject.price &&
          regex.test(post.name.toLowerCase())
      );
    }
    console.log(filteredPosts);
    setPosts(filteredPosts);
  }

  function handleButtonClick(event) {
    event.preventDefault();
    loadPosts();
  }

  return (
    <Row>
      <Col size="sm-12">
        <Jumbotron>
          <h1 id="logo" className="center-align">
            Welcome to Electro-City
          </h1>
          <h4 className="center-align">What are you looking for?</h4>
        </Jumbotron>
        <FilterForm
          onChange={handleInputChange}
          onSubmit={handleFormSubmit}
          onClick={handleButtonClick}
          verified={verified} setVerified={setVerified}
        />
        {posts.length && verified ? (
          <List>
            {posts.map((post) => (
              <ListItem key={post._id}>
                <Link to={"/posts/" + post._id}>
                  <div>
                  <strong>
                    "{post.name}" Price: ${post.price}
                  </strong>
                  </div>
                  <ul>
                    <li>Location: {post.city}, {post.state}</li>
                    <li>Contact: {post.seller}</li>
                  </ul>
                </Link>
                <hr />
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
