import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../utils/API";
import Modal from "../components/Modal";



function Detail(props) {
  const [post, setPost] = useState({})
  const [open, setOpen] = useState(false);

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
                          
<div class="row">
    <div class="col s12 m7">
      <div class="card hoverable transparent lighten-1">
        <div class="card-image">
          <img src={post.imageURL}/>
          <span class="card-title">{post.name}</span>
        </div>
        <div class="card-content">
          <h4 className="flow-text ">{post.description}</h4>
        </div>
        <div class="card-action">
    <a href="/search" className="blue-text darken-3">Back to results</a>
    <a href="/" className="blue-text darken-3">Home</a>
    {post ? (
      <>
      <a onClick={()=> setOpen(true)} className="blue-text darken-3">Contact </a>
      <Modal setOpen={setOpen} open={open} post={post}/>    
      </>  
    )
  : null}
  </div>
      </div>
    </div>
  </div>
    
    );
  }
  
  
  {/* <div class="card-action">
    <a href="/search">Back to results</a>
    <a href="/">Home</a>
    {post ? (
      <>
      <a onClick={()=> setOpen(true)}>See More </a>
      <Modal setOpen={setOpen} open={open} images={post}/>    
      </>  
    )
  : null}
  </div> */}
export default Detail;
