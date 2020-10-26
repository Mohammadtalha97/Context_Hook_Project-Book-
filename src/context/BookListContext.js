import React, { createContext, useReducer, useEffect } from "react";
import { bookReducers } from "../reducers/bookReducers";
export const BookListContext = createContext();

const BookListContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducers, [], () => {
    //here we have set the default value for books
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    //whenever book add or delete this gona reflect
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  return (
    <BookListContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookListContext.Provider>
  );
};

export default BookListContextProvider;
