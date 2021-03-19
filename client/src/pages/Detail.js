import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";


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


// class Detail extends Component {
//   constructor(props) {
//     super(props)

//     this.handleSubscribe = this.handleSubscribe.bind(this);
//     this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
//     this.verifyCallback = this.verifyCallback.bind(this);

//     this.state = {
//       isVerified: false
//     }
//   }

//   // A verification that informs us that recaptcha has loaded properly and this function is going to be called 
//   recaptchaLoaded() {
//     console.log('capcha successfully loaded');
//   }

//   handleSubscribe() {
//     if (this.state.isVerified) {
//       alert('You have successfully subscribed!');
//     } else {
//       alert('Please verify that you are a human!');
//     }
//   }

//   // This callback function is called once the user successfully verifies themselves  
//   verifyCallback(response) {
//     if (response) {
//       this.setState({
//         isVerified: true
//       })
//     }
//   }}

  //render()
  return (
      <Container fluid>
  <div class="row">
    <div class="col s12 m6">
      <div class="card teal hoverable">
        <div class="card-content white-text">
          <br/>
          <br/>
        {/* <div class="card-image">
          <img src=""/> */}
          <span class="card-title">{post.name}</span>
          {/* <a class="btn-floating halfway-fab waves-effect waves-light red"><p style={{ display:'flex', justifyContent:'center' }}>Add</p></a> */}
        {/* </div> */}
          <p>{post.seller}'s item is located in {post.city}, {post.state}</p>
          <br />
          <p> 
            Phone Number : 
          </p>

          {/* <Recaptcha
            sitekey="6Le5aHQaAAAAAM4YFOcYK7kOVL8lORMfM80Ajvec"
            render="explicit"
            theme="dark"
            onloadCallback={this.recaptchaLoaded}
            verifyCallback={this.verifyCallback}
          /> */}

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
