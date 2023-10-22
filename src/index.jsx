import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import {books} from './books';
import {Book} from './book'; 

const BookList = () => {
  return (
    <>
    <h1>Amazon best sellers</h1>
    <section className="bookList">
      {books.map((input,index) => {
        return <Book {...input} key={input.id} number = {index} />;
      })}
    </section>
    </>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
