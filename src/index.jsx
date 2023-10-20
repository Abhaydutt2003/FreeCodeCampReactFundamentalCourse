import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const firstBook = {
  author: "morgan housel",
  title: "The Psychology Of Money",
  img: "./images/money.jpg",
};

const secondBook = {
  author: "hector garcia",
  title: "Ikigai",
  img: "./images/ikigai.jpg",
};

const BookList = () => {
  return (
    <section className="bookList">
      <Book
        img={firstBook.img}
        author={firstBook.author}
        title={firstBook.title}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
          doloribus, est qui libero eum sunt cumque aut reiciendis cum
          veritatis, dolorum perspiciatis, dicta repudiandae facere dolore et
          vero. Ipsa, reiciendis?
        </p>
        <button>Click Me</button>
      </Book>
      <Book
        img={secondBook.img}
        author={secondBook.author}
        title={secondBook.title}
      />
    </section>
  );
};

const Book = ({ author, img, title,children }) => {
  return (
    <article className="book">
      <img src={img} alt="BLAH BLAH 1" />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
