import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      {/* <h1>This is About Page.</h1> */}
      <div className="banner">
        <div className="content">
          <h1>A Passionate Developer</h1>
          <p>Connect me by clicking on Below Links to see more awesome content like this!</p>
          <div>
            <button type="button" className="buttonLinks"><span className="spanLink"></span><a href="https://github.com/Shlok2" target="_blank" rel="noopener noreferrer">Github</a></button>
            <button type="button" className="buttonLinks"><span className="spanLink"></span><a href="https://www.linkedin.com/in/shlok-saraogi-b629b9190/" target="_blank" rel="noopener noreferrer">LinkedIn</a></button>
            <button type="button" className="buttonLinks"><span className="spanLink"></span><a href="https://www.instagram.com/shloksaraogi/" target="_blank" rel="noopener noreferrer">Instagram</a></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
