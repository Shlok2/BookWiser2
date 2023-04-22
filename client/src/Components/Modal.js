import React from "react";
import "./style.css";
// import { Link } from "react-router-dom";

const Modal = ({ show, item }) => {
  // Modal will only be shown if show is true.
  if (!show) {
    return null;
  }
  // Details about a single book.
  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  let title = item.volumeInfo.title;
  let authors = item.volumeInfo.authors;
  let publisher = item.volumeInfo.publisher;
  let publishedDate = item.volumeInfo.publishedDate;
  let description = item.volumeInfo.description;
  let previewLink = item.volumeInfo.previewLink;

  function closeModal() {
    // To reload the page whenever the cross button is pressed.
    window.location.reload(false);
  }

  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={closeModal}>
            <i className="fas fa-times"></i>
            {/* <h3>home</h3> */}
          </button>

          <div className="inner-box">
            <img src={thumbnail} alt="title" />
            <div className="info">
              <h1>{title}</h1>
              <h3>{authors}</h3>
              <h4>
                {publisher} <span>{publishedDate}</span>
              </h4>
              <br />
              <a href={previewLink} target="_blank" rel="noreferrer">
                <button>Read</button>
              </a>
            </div>
          </div>
          <h4 className="description">
            {description.substring(0, 1070) + "  ..."}
          </h4>
        </div>
      </div>
    </>
  );
};

export default Modal;

// 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
