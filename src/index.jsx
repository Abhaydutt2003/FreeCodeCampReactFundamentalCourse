import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    author: "morgan housel",
    title: "The Psychology Of Money",
    img: "./images/money.jpg",
    id: 1,
  },
  {
    author: "hector garcia",
    title: "Ikigai",
    img: "./images/ikigai.jpg",
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="bookList">
      <EventExamples />
      {books.map((input) => {
        return <Book {...input} key={input.id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(`Input name : ${e.target.name}`);
    console.log(`Input value : ${e.target.value}`);
    console.log("Handle  form input");
  };
  const handleButtonInput = () => {
    alert("handle button input");
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
        <button type="submit">submit</button>
      </form>
      <div>
        <button onClick={handleButtonInput}>Click Me!</button>
      </div>
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="BLAH BLAH 1" />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
