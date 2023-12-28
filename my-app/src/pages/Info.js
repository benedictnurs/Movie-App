import React from 'react';
import {Link, useParams} from "react-router-dom";
import { Header } from '../components/Header.js';


export const Info = ({ selectedMovie }) => {
  const {id} = useParams()
  return (
    <>
      <Header/>
      <p>Movie Information for {id}</p>

    </>
  );
};
