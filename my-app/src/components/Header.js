import React from 'react';
import { Link } from "react-router-dom";


export const Header = (props) => {
  return (
    <div>
      <nav className="d-lg-flex justify-content-between align-items-end nav-color">
        <Link to="/" className="text-reset text-decoration-none">

        <h2 className="my-3 mx-4 header ml-lg-auto">BenFlix</h2>
        </Link>
          {props.categories} 
          {props.searchComponent} 
      </nav>
    </div>
  );
};
