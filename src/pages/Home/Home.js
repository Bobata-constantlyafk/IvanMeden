import './Home.css';
import staticloop from "../../images/static.webm";
import ivan from "../../images/home-page-pic-1.webp";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = ivan;
    img.onload = () => {
      setLoaded(true);
    };
  }, []);

  if (!loaded) {
    return <div>Loading...</div>;
  }

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
            <h2 className="current">HOME</h2>
          </Link>
          <Link className="link" to="/edits">
            <h2>EDITS</h2>
          </Link>
          <Link className="link" to="/contact">
            <h2>CONTACT</h2>
          </Link>
          <Link className="link" to="/about">
            <h2>ABOUT</h2>
          </Link>
        </div>

        <div className="image-container">
          <img src={ivan} alt="medenka" className="ivan" />
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
};

export default Home;
