import React, { useState } from "react";
// import { Paper,Card,CardActions,CardMedia,CardContent } from "@material-ui/core";
import "./style.css";
import Modal from "./Modal";

const CardSection = ({ book }) => {
  // If this is true -> then show model.js
  // If this is false -> then don't show model.js
  const [show, setShow] = useState(false);
  // To store a singular card.
  const [bookItem, setBookItem] = useState();

  return (
    <>
      {/* let thumbnail = item.volumeInfo.imageLinks.smallThumbnail; */}
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        let title = item.volumeInfo.title;

        if (thumbnail != undefined && amount != undefined) {
          return (
            <>
              {/* If user click on card -> then show = true */}
              <div
                className="card"
                onClick={() => {
                  setShow(true);
                  setBookItem(item);
                }}
              >
                {/* <Card raised elevation={6} > */}
                {/* </Card> */}
                {/* <CardMedia className={classes.media} image={post.selectedFile} title={post.title} /> */}
                <img src={thumbnail} alt="book_image" />
                <div className="bottom">
                  <h3 className="title">{title}</h3>
                  {/* &8377; -> html code for rupee symbol. */}
                  <p className="amount">&#8377; {amount}</p>
                </div>
              </div>
              <Modal show={show} item={bookItem} />
            </>
          );
        }
      })}
    </>
  );
};

export default CardSection;
