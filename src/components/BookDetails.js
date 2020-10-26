import React, { useContext } from "react";
import { BookListContext } from "../context/BookListContext";

const BookDetails = ({ book }) => {
  // const { removeBook } = useContext(BookListContext);
  const { dispatch } = useContext(BookListContext);
  return (
    // <li onClick={() => removeBook(book.id)}>
    <li onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;
