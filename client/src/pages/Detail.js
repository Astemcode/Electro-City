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
      <div class="card hoverable red darken-2">
        <div class="card-image">
          <img src="images/sample-1.jpg"/>
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
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
