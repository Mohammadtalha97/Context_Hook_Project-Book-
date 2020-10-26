import React, { useContext } from "react";
import { BookListContext } from "../context/BookListContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { books } = useContext(BookListContext);
 

  return books.length ? (
    <div className="book-list">
      <ul>
       
        {books.map((book) => {
           console.log("book-list", book)
          return <BookDetails book={book} key={book.id} />;
        })}
       
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read 😭</div>
  );
};

export default BookList;
