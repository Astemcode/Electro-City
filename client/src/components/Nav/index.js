import React from "react";

function Nav() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    //   <a className="navbar-brand" href="/">
    //     Electro-City
    //   </a>
    // </nav>
    <nav className="blue-green-bg">
      <div className="nav-wrapper">
      <img src="/public/images/logo2.png" id="logo" />
        <a href="/" className="brand-logo">
          Electro-City
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="/addToPosts">Post Item</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
