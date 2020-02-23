import React from "react";

const NavBar = ({ title = "Github Finder", icon = "fab fa-github" }) => (
  <nav className='navbar bg-primary'>
    <h1>
      <i className={icon} /> {title}
    </h1>
  </nav>
);

export default NavBar;
