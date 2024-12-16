import React, { useState } from "react";
import "../MainContent/MainContent.scss";
import { Card } from "react-bootstrap";
import BookCard from "../BookCard/BookCard";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../../utils/constants";

const MainContent = () => {
  const [searchText, setSearchText] = useState("");
  const [books, setBooks] = useState([]);

  const [readingList, setReadingList] = useState([]);

  console.log(books);

  const searchBook = (evt) => {
    if (evt.key === "Enter" || evt.type === "click") {
      let query = "";

      if (searchText.includes("author:")) {
        const authorName = searchText.replace("author:", "").trim();
        query = `inauthor:${authorName}`;
      } else if (searchText.includes("title:")) {
        const title = searchText.replace("title:", "").trim();
        query = `intitle:${title}`;
      } else {
        // general search matches title, author or any content
        query = `${searchText}`;
      }
      // API CALL
      axios
        .get(`${BASE_URL}${query}&key=${API_KEY}&maxResults=40`)
        .then((res) => {
          console.log(res.data);
          setBooks(res?.data?.items || []);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <section className="container-fluid">
      <div className="d-flex justify-content-between">
        <div className="col-9 text-center">
          <h1 className="fs-2 c-inclusive-sans-font">
            Empower your Mind Anywhere Anytime
          </h1>
        </div>
        <div>
          <button type="button" className="btn btn-dark c-inclusive-sans-font">
            Trending books
          </button>
        </div>
      </div>
      <div>
        <p className="c-inclusive-sans-font fs-5">Reading</p>
        <hr className="mb-3 border border-primary border-2 opacity-75 w-25"></hr>
      </div>
      <div>
        <div className="row d-flex">
          {readingList.length === 0 ? (
            <div className="text-body-tertiary c-inclusive-sans-font fs-5 w-75 d-flex justify-content-center align-items-center" style={{height: "13rem"}}>
              <p>You haven't added any books to read yet!</p>
            </div>
          ) : (
            <>
              <BookCard />
            </>
          )}
        </div>
      </div>
      <div className="d-flex gap-3 my-5 flex-wrap me-5 justify-content-center mr-lg-custom mr-xl-custom">
        <input
          type="text"
          className="c-input-sear-book c-inclusive-sans-font"
          placeholder="Search (e.g., author:J.K. Rowling, title: Harry Potter)"
          style={{ width: "535px", height: "48px" }}
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyDown={searchBook}
        ></input>
        <button
          className="btn c-btn-search-book c-inclusive-sans-font"
          onClick={searchBook}
        >
          Search
        </button>
      </div>
      <div>
        <p className="c-inclusive-sans-font fs-5">Books Collection</p>
        <hr className="mb-3 border border-primary border-2 opacity-75 w-25"/>
      </div>
      {/* Card groups */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 g-4">
        {books.length > 0 ? (
          books.map((bookData) => (
            <BookCard key={bookData.id} dataPass={bookData} />
          ))
        ) : (
          <></>
        )}
      </div>
      {books.length === 0 && (
        <div
          className="fs-5 text-body-tertiary c-inclusive-sans-font w-75 d-flex justify-content-center align-items-center"
          style={{ height: "17rem" }}
        >
          Search for books you want to track!
        </div>
      )}
    </section>
  );
};

export default MainContent;
