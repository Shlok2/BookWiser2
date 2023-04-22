import React, { useState } from "react";
import Card from "./Card";
// import { Paper, Container } from "@material-ui/core";
import axios from "axios";
import GoToTop from "./GoToTop";

// import "./style.css";

const Main = () => {
  // To store what is searched in inputbox.
  const [search, setSearch] = useState("");
  // To store all books from keyword searched.
  const [bookData, setBookData] = useState([]);

  const searchBook = (evt) => {
    // get Json file from google api servece for search keyword.
    // bookData will store all the books with searched keyword.
    // &maxResults means it will show 40 items.
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyDO4rPzyDcRdbL5LJb1T8KDhXanE9-Ldp0" +
            "&maxResults=40&download=epub"
        )
        .then((res) => setBookData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            "A room without books is like
            <br /> a body without a soul."
          </h1>
        </div>
        <div className="row2">
          {/* <Container fixed> */}
          <h2>Find Your Book</h2>
          <div className="search">
            <input
              id="custom"
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
              className="Find_book"
            />
          </div>
          <img src="./images/bg2.png" alt="" className="image" />
          {/* </Container> */}
        </div>
      </div>
      <div className="container">{<Card book={bookData} />}</div>
      <GoToTop />
    </>
  );
};

export default Main;
