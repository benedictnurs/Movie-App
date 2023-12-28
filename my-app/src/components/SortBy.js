import React from "react";
import { Link, BrowserRouter } from "react-router-dom";


export const SortBy = (props) => {
    
    const handleClick = () => {
        props.setSearchTerm(props.valueTerm);
        props.setSearch("")
        
    };
    
               

    return (
        <>

        <Link to="/" className="text-reset text-decoration-none">
        <h5
            className="my-3 pe-auto"
            onClick={handleClick}
            style={{
                cursor: "pointer",
                color: "white", // Initial color
            }}
            onMouseEnter={(e) => {
                e.target.style.transition = "color .5s ease"; // Apply transition on hover
                e.target.style.color = "#E50914"; // Change color to red on hover
            }}
            onMouseLeave={(e) => {
                e.target.style.color = "white"; // Change back to initial color on hover out
            }}
        >
            {props.value}
            </h5>
            </Link>
        
        </>    
    );
}; 