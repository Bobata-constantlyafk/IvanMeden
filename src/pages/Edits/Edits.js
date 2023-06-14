import "./Edits.css";
import staticloop from "../../images/static.mp4";
import ivan from "../../images/ivan.png";
import { Link } from "react-router-dom";

function Edits() {
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
          <h2>
            <s class="strikethrough">EDITS</s>
          </h2>
          <Link className="link" to="/contact">
            <h2>CONTACT</h2>
          </Link>
          <Link className="link" to="/about">
            <h2>ABOUT</h2>
          </Link>
        </div>
        <div className="image-container">.</div>
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

export default Edits;
