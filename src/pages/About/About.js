import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'
import staticloop from "../../images/static.webm";
import tornPaper from "../../images/paper.webp";
import tapeImage from "../../images/tape1.webp";

function About() {
  return (
    <div className="whole-page">
      <div className="tv-static">
        <video autoPlay loop muted>
          <source src={staticloop} type="video/mp4" alt="static loop" />
        </video>
      </div>
      <div className="da-grid">
        <div className="menu">
          <Link className="link" to="/">
            <h2>HOME</h2>
          </Link>
          <Link className="link" to="/edits">
            <h2>EDITS</h2>
          </Link>
          <Link className="link" to="/contact">
            <h2>CONTACT</h2>
          </Link>
          <Link className="link" to="/about">
            <h2 className="current">ABOUT</h2>
          </Link>
        </div>

        <div className="torn-sheet">
          <div className="paper">
            <img className="tape" src={tapeImage} alt="Tape" />
            <img className="torn-paper" src={tornPaper} alt="Torn Paper" />
            <div className="lines">
              <div className="text" contentEditable spellCheck="false">
                <h2>Who Am I?</h2>
                Hey there, folks! The name is Ivan Mednikarov, I am video
                editor&nbsp; for&nbsp; hire!
              </div>
              <div className="text text-2" contentEditable spellCheck="false">
                <h2>Why I edit?</h2>I am dedicated to mastering&nbsp;
                editing&nbsp; by taking on diverse video styles. So hit me up
                with your&nbsp; ideas. The crazier the better!
              </div>
            </div>
          </div>
        </div>

        <div className="title">
          <h1 className="medec">
            IVAN <br />
            MEDEN <br /> .COM
          </h1>
        </div>
      </div>
    </div>
  );
}

export default About;