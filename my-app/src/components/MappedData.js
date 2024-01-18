import React from 'react';

export const MapData = (props) => {
    const data = props.data.slice(0, 5).map(listedData => listedData.name).join(', ');
    return (
        <><span className="bold">{props.name}: </span>{data}</>
    );
  };
  