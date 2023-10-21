import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import {books} from './books';
import {Book} from './book'; 

const BookList = () => {
  return (
    <section className="bookList">
      {books.map((input) => {
        return <Book {...input} key={input.id} />;
      })}
    </section>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
