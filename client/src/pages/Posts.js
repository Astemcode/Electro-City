import React, { useState, useEffect, Component } from "react";
import {app} from './Base'
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import axios from "axios";


function Posts() {
  // Setting our component's initial state
  const [posts, setPosts] = useState([])
  const [formObject, setFormObject] = useState({})
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)
  const [url, setURL] = useState(null)
  const [imageURL, setimageURL] = useState(null)

  const types = ['image/png', 'image/jpeg']

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

  function handlePhotoChange(event) {
    const selected = event.target.files[0];


    if (selected && types.includes(selected.type)){
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)')
    }
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload posts from the database
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (formObject.name && formObject.description && formObject.seller && formObject.state  && formObject.city && formObject.password && formObject.price ) {
   
      const storageRef = app.storage().ref()
      const fileRef = storageRef.child(file.name)
      await fileRef.put(file)
      const fileURL = await fileRef.getDownloadURL()
      console.log(fileURL)

      
      //acamind working code. This code will upload to the Electrocity project.
/*       const fd = new FormData();
      fd.append('image', file, file.name )
      axios.post('https://us-central1-electro-city-71615.cloudfunctions.net/uploadFile', fd)
        .then(res => {
         // const fileURL =  res.getDownloadURL();
          console.log(res.data);
        }) */
    
      API.savePost({

        //Put the criteria to save here (create posts)
         name: formObject.name,
         description: formObject.description,
         seller: formObject.seller,
         state: formObject.state,
         city: formObject.city,
         password: formObject.password,
         price: formObject.price,
         imageURL:fileURL 
          
      })
        .then(res => {
          setFormObject({});
          window.location.assign('/');
        })
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Jumbotron>
              <h1 className="postTitle">What would you like to sell?</h1>
            </Jumbotron>
            <form className="input-format">
              <Input
                onChange={handleInputChange}
                name="name"
                placeholder="What would you like to sell? (required)"
              />
              <Input
                onChange={handleInputChange}
                name="description"
                placeholder="Describe your item (required)"
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
              <br/>
              <div>
              <input 
              type="file"
              className="filePhoto"
              name="PhotoURL"
              onChange={handlePhotoChange}
              />
              <div className="output">
              {error && <div className="error">{ error }</div>}
              </div>
              <br/>
              <FormBtn
                disabled={!(formObject.name && formObject.description && formObject.seller && formObject.state  && formObject.city && formObject.password && formObject.price  )}
                onClick={handleFormSubmit}>
                Submit Post
              </FormBtn>
              </div>
            </form>
          </Row>
      </Container>
    );
  }


export default Posts;
