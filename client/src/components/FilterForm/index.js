import React from "react";
import Recaptcha from "react-recaptcha";
import "./style.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

export class FilterForm extends React.Component {
  constructor(props){
    super(props)

    this.componentDidMount = this.componentDidMount.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);

    this.state = {
      isVerified: false
  }}
  recaptchaLoaded() {
    console.log('capcha successfully loaded');
  }

  componentDidMount() {
    console.log(M);
    M.AutoInit();
    if (this.state.isVerified) {
      alert('You have successfully subscribed!');
    } else {
      alert('Please verify that you are a human!');
    }
  }

  verifyCallback(response) {
    if (response) {
      this.props.setVerified(true);
    }
  }

  

  render() {
    return (
      <form className="filter-form" onSubmit={this.props.onSubmit}>
        <div className="filterForm">
          {/* <div className="input-field col s3">
              <select multiple={true} value={""} name="filter" onChange={this.props.onChange}>
                <option value="City">City</option>
                <option value="State">State</option>
                <option value="Price">Price</option>
              </select>
            <label>Choose your filter</label>
          </div> */}
          <div className="input-field col s3">
            <input id="city" type="text" className="validate" onChange={this.props.onChange} name="item"/>
            <label className="active" htmlFor="city">
              Item 
            </label>
          </div>
          <div className="input-field col s3">
            <input id="city" type="text" className="validate" onChange={this.props.onChange} name="city"/>
            <label className="active" htmlFor="city">
              City
            </label>
          </div>
          <div className="input-field col s3">
            <input id="state" type="text" className="validate" onChange={this.props.onChange} name="state"/>
            <label className="active" htmlFor="state">
              State
            </label>
          </div>
          <div className="input-field col s3">
            <input id="first_name2" type="number" className="validate" onChange={this.props.onChange} name="price"/>
            <label className="active" htmlFor="price">
              Price
            </label>
          </div>
        </div>
        <input
          className="waves-effect waves-light btn-small"
          type="submit"
          value="Filter"
        />
        <button className="waves-effect waves-light btn-small" onClick={this.props.onClick}>Get All Posts</button>
        
        <Recaptcha
            sitekey= "6Le5aHQaAAAAAM4YFOcYK7kOVL8lORMfM80Ajvec"
            render="explicit"
            theme="dark"
            onloadCallback={this.recaptchaLoaded}
            verifyCallback={this.verifyCallback}
          />

      </form>
    );
  }
}
