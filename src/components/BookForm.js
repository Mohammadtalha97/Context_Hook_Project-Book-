import React, { useState, useContext } from "react";
import { BookListContext } from "../context/BookListContext";

const BookForm = () => {
  // const { addBook } = useContext(BookListContext);
  const { dispatch } = useContext(BookListContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // addBook(title, author);
    dispatch({
      type: "ADD_BOOK",
      book: {
        title,
        author,
      },
    });
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="book title"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="book author"
        required
      />
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default BookForm;
