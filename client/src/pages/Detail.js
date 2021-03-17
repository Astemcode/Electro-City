import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Books from "./Books";

function Detail(props) {
  const [post, setPost] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getPost(id)
      .then(res => setPost(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
      <Container fluid>
  <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{post.name}</span>
          <p>{post.seller}'s item is located in {post.city}, {post.state}</p>
          <br />
          <p> 
            Phone Number : 
          </p>
        </div>
        <div class="card-action">
          <a href="/search">Back to results</a>
          <a href="/">Home</a>
        </div>
      </div>
    </div>
  </div>
      </Container>
    );
  }


export default Detail;
