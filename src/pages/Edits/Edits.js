import React from "react";
import "./Edits.css";
import staticloop from "../../images/static.mp4";
import lifestyle from "../../images/lifestyle.png";
import car from "../../images/Car-montage.png";
import memes from "../../images/meme-edit.png";
import { Link } from "react-router-dom";

function Edits() {
  return (
    <div className="whole-page">
      <div className="tv-static">
        <video autoPlay loop muted>
          <source src={staticloop} type="video/mp4" alt="static loop" />
        </video>
      </div>
      <div className="da-grid-edit">
        <div className="menu-edit">
          <Link className="link" to="/">
            <h2>HOME</h2>
          </Link>
          <Link className="link" to="/edits">
            <h2 className="current">EDITS</h2>
          </Link>
          <Link className="link" to="/contact">
            <h2>CONTACT</h2>
          </Link>
          <Link className="link" to="/about">
            <h2>ABOUT</h2>
          </Link>
        </div>
        <div className="scroll-container">
          <div className="videos-container">
            <div className="vid-container">
              <img src={lifestyle} alt="medenka" className="vid" />
              <div className="video-wrapper">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/VA8a75_2IUs"
                  title="Embedded YouTube Video"
                  frameBorder="0"
                  allowFullScreen></iframe>
              </div>
            </div>
            <div className="vid-container">
              <img src={car} alt="medenka" className="vid" />
              <div className="video-wrapper">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/g4R13Oxs61U"
                  title="Embedded YouTube Video"
                  frameBorder="0"
                  allowFullScreen></iframe>
              </div>
            </div>
            <div className="vid-container">
              <img src={memes} alt="medenka" className="vid" />
              <div className="video-wrapper">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/6cmg75bgkkg"
                  title="Embedded YouTube Video"
                  frameBorder="0"
                  allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="title-edit">
          <h1 className="medec">
            IVAN <br />
            MEDEN <br />
            .COM
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Edits;
