import React, { useState, useRef } from "react";
import "./Contact.css";
import { Card } from "@material-ui/core";
import emailjs from "emailjs-com";
// import Result from "./Result";

const Result = () => {
  return (
    <Card
      style={{ backgroundColor: "#292a2b", color: "#afaeaf" }}
      className="form_sent_message"
      elevation={6}
    >
      <p className="top_height"> ✔️ Your message has been successfully sent.</p>
    </Card>
  );
};

// console.log("Hi");

const Contact = () => {
  const form = useRef();
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z4kjrv6",
        "template_hxewf2f",
        form.current,
        "OnzNu_btSFGUOiQl_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  return (
    <>
      <div className="head">
        <h1 className="con">CONTACT US !</h1>
      </div>
      <Card
        elevation="6"
        className="card-component"
        style={{ backgroundColor: "#292a2b" }}
      >
        <form ref={form} onSubmit={sendEmail}>
          <input
            className="form_input name"
            placeholder="First Name"
            type="text"
            name="from_name"
            required
          />
          <input
            className="form_input lastName"
            placeholder="Last Name"
            type="text"
          />
          <input
            className="form_input email"
            placeholder="Email"
            type="email"
            name="email"
            required
          />
          <input
            className="form_input phone"
            placeholder="Phone"
            type="tel"
            name="phone"
            required
          />
          <textarea
            className="form_input message"
            placeholder="Message"
            name="message"
            required
          />
          {/* <button class="form_input submit" type="submit" disabled>
            <span class="front">SUBMIT</span>
          </button> */}
          <input type="submit" value="Send" className="form_input2 submit" />
        </form>
      </Card>
      <div>{result ? <Result /> : null}</div>
    </>
  );
};

export default Contact;
