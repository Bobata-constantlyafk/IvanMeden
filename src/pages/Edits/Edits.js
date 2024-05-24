import React from "react";
import "./Edits.css";
import staticloop from "../../images/static.webm";
import lifestyle from "../../images/lifestyle.webp";
import car from "../../images/Car-montage.webp";
import memes from "../../images/meme-edit.webp";
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
                  src="https://www.youtube.com/watch?v=PeNXyN-l2Vg"
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
                  src="https://www.youtube.com/embed/66DTmiblMF8"
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
