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
            <h2>HOME</h2>
          </Link>
          <Link className="link">
            <h2 className="current">
              <s class="strikethrough">EDITS</s>
            </h2>
          </Link>
          <Link className="link" to="/contact">
            <h2>CONTACT</h2>
          </Link>
          <Link className="link" to="/about">
            <h2>ABOUT</h2>
          </Link>
        </div>

        <div className="vid-container">
          <img src={ivan} alt="medenka" className="ivan" />
          <img src={ivan} alt="medenka" className="ivan" />
          <img src={ivan} alt="medenka" className="ivan" />
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
}

export default Edits;
