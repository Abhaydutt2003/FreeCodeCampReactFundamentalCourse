import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const author = "morgan housel";
const title = "The Psychology Of Money";
const img = "./images/money.jpg";

const BookList = () => {
  return (
    <section className="bookList">
      <Book img={img} author={author} title={title} />
      <Book img={img} author={author} title={title} />
    </section>
  );
};

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="BLAH BLAH 1" />
      <h2>{props.title}</h2>
      <h4>{props.author.toUpperCase()}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
