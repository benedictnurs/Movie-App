import React from "react"

export const Rating = (props) => {
    if (props.rating >= 8){
      return(
        <span className="text-success">{props.rating}</span>
      )    
    } else if (props.rating >=6){
      return(
        <span className="text-warning">{props.rating}</span>
        )
    } else{
      return(
        <span className="text-danger">{props.rating}</span>
      )
    }
  }