import React, { useState, useEffect, Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import axios from "axios";



class App extends Component {
    fileSelectHandler = event =>{
    console.log(event.target.files[0]);

    this.setState({
    selectedFile: event.target.files[0]
    })
    }
    
    fileUploadHandler = () =>{
        axios.post("")
    }

render(){
    return (
        <>
        <input type="file" onChange={this.fileSelectedHandler} />
        <button onclick={this.fileUploadHandler}>Photo of item for sale</button>
        </>
    )
}

}