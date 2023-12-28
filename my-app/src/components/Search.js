// Search.js
import React from "react";

export const Search = (props) => {
  return (
    
    <input
      className="mx-4 my-3 rounded-pill px-3 py-1"
      placeholder="Search..."
      aria-label="Search"
      value={props.value}
      onChange={(e) => props.setSearch(e.target.value)}
    />
  );
};
