import "./Contact.css";
import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";
import staticloop from "../../images/static.mp4";
import ig from "../../images/ig.png";
import fb from "../../images/fb.png";
import yt from "../../images/yt.png";
import lin from "../../images/lin.png";
import phone from "../../images/phone-g.png";
import email from "../../images/email.png";
import bird from "../../images/bird.png";
import battery from "../../images/battery.mp4";
import signal from "../../images/signal.png";

function Contact() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const copyPhoneNumber = () => {
    const phoneNumberElement = document.getElementById("phoneNumber");
    const phoneNumber = phoneNumberElement.textContent;
    navigator.clipboard.writeText(phoneNumber);
  };

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
          <h2>
            <s class="strikethrough">EDITS</s>
          </h2>
          <Link className="link" to="/contact">
            <h2 className="current">CONTACT</h2>
          </Link>
          <Link className="link" to="/about">
            <h2>ABOUT</h2>
          </Link>
        </div>

        <div className="phone-view">
          <header className="header">
            <div className="signal-top">
              <img className="signal-img" src={signal} alt="signal" />
            </div>

            <span className="contacts">Contact me</span>
            <span className="hour">
              {currentTime.getHours().toString().padStart(2, "0")}:
              {currentTime.getMinutes().toString().padStart(2, "0")}
            </span>

            <video className="battery" autoPlay loop muted>
              <source
                className="battery-gif"
                src={battery}
                type="video/mp4"
                alt="static loop"
              />
            </video>
          </header>

          <div className="grid">
            <div className="grid-icon">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer">
                <img className="phone icon" src={phone} alt="phone" />
              </a>
              <p className="icon-text">Call me</p>
            </div>

            <div className="grid-icon-email">
              <img
                className="icon email"
                src={email}
                alt="email"
                onClick={openModal}
              />

              <ReactModal
                className="phone-modal"
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Modal">
                <h1 id="phoneNumber">+45 91 84 16 59</h1>
                <p>Feel free to call me any day between 11 and 18 o'clock</p>
                <div className="phone-modal-buttons">
                  <button className="copy-button" onClick={copyPhoneNumber}>
                    Copy
                  </button>
                  <button onClick={closeModal}>Close</button>
                </div>
              </ReactModal>

              <p className="icon-text icon-text-email">Mail me</p>
            </div>

            <div className="grid-icon">
              <a
                href="https://www.youtube.com/@medenka"
                target="_blank"
                rel="noopener noreferrer">
                <img className="yt icon" src={yt} alt="yt" />
                <p className="icon-text">My YouTube</p>
              </a>
            </div>

            <div className="grid-icon">
              <a
                href="https://www.instagram.com/vaniomednikarovv/"
                target="_blank"
                rel="noopener noreferrer">
                <img className="ig icon" src={ig} alt="ig" />
              </a>
              <p className="icon-text">My Instagram</p>
            </div>

            <div className="grid-icon">
              <a
                href="https://www.linkedin.com/in/ivan-mednikarov-420879158"
                target="_blank"
                rel="noopener noreferrer">
                <img className="lin icon" src={lin} alt="lin" />
              </a>
              <p className="icon-text">My LinkedIn</p>
            </div>

            <div className="grid-icon-email">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer">
                <img className="fb icon" src={fb} alt="fb" />
              </a>
              <p className="icon-text icon-text-fb">My Facebook</p>
            </div>

            <div className="grid-icon grid-icon-twitter">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer">
                <img className="icon" src={bird} alt="twitter" />
              </a>
              <p className="icon-text">Tweet @ me</p>
            </div>

            <div className="grid-item">.</div>
            <div className="grid-item">. </div>
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

export default Contact;
