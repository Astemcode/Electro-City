import React from 'react';

function FilterForm() {
    return (
        <form>
            <div className="input-field col s12">
                <label>Choose Filter: </label>
                <select multiple>
                    <option value="1">City</option>
                    <option value="2">State</option>
                    <option value="3">Price</option>
                </select>
            </div>
            <div className="row">
                <div className="input-field col s3">
                    <input id="city" type="text" className="validate" />
                        <label className="active" htmlFor="city">City</label>
                </div>
                <div className="input-field col s3">
                    <input id="state" type="text" className="validate" />
                        <label className="active" htmlFor="state">State</label>
                </div><div className="input-field col s3">
                    <input id="first_name2" type="number" className="validate" />
                        <label className="active" htmlFor="price">Price</label>
                </div>
            </div>
            <button waves-effect waves-light btn-small>Filter</button>
        </form>
    )
}

export default FilterForm;

