import React from "react";

function Nav() {
  return (
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo center">Logo</a>
      <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>
  <ul id='dropdown1' class='dropdown-content'>
    <li><a href="#!">one</a></li>
    <li><a href="#!">two</a></li>
    <li class="divider" tabindex="-1"></li>
    <li><a href="#!">three</a></li>
    <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
    <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
  </ul>
    </div>
  </nav>
  );
}

export default Nav;
