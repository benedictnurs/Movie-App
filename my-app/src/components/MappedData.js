import React from 'react';


export const MapData = (props) => {
    const firstSixData = props.data.slice(0, 5).map(listedData => listedData.name).join(', ');
    return (
        <><span className="bold">{props.name}: </span>{firstSixData}</>
    );
  };
  