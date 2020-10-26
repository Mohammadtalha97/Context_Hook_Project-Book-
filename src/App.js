import React from "react";

import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import BookListContextProvider from "./context/BookListContext";

const App = () => {
  return (
    <div className="App">
      <BookListContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookListContextProvider>
    </div>
  );
};

export default App;
