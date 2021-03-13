import React from "react";
import "./style.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

export class FilterForm extends React.Component {
  componentDidMount() {
    console.log(M);
    M.AutoInit();
  }

  render() {
    return (
      <form className="filter-form">
        <div className="row">
          <div className="input-field col s3">
              <select multiple={true} value={""}>
                <option value="City">City</option>
                <option value="State">State</option>
                <option value="Price">Price</option>
              </select>
            <label>Choose your filter</label>
          </div>
          <div className="input-field col s3">
            <input id="city" type="text" className="validate" />
            <label className="active" htmlFor="city">
              City
            </label>
          </div>
          <div className="input-field col s3">
            <input id="state" type="text" className="validate" />
            <label className="active" htmlFor="state">
              State
            </label>
          </div>
          <div className="input-field col s3">
            <input id="first_name2" type="number" className="validate" />
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
      </form>
    );
  }
}
