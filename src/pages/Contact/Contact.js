import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'
import staticloop from '../../images/static.mp4';
import ig from '../../images/ig.png';
import fb from '../../images/fb.png';
import yt from '../../images/yt.png';
import lin from '../../images/lin.png';
import phone from '../../images/phone.png'
import email from '../../images/email.png'
import bird from '../../images/bird.png'
// import battery from '../../images/batteryFlip.mp4';

function Contact() {
  return (
    <div className='whole-page'>
    <div className="tv-static">
      <video autoPlay loop muted>
        <source src={staticloop} type="video/mp4" alt="static loop"/>
      </video>
    </div>
    <div className='da-grid'>
    <div className='menu'>
          <Link className="link" to="/">
            <h2>HOME</h2>
          </Link>
          <h2><s class="strikethrough">EDITS</s></h2>
          <Link className="link" to="/contact">
            <h2 className='current'>CONTACT</h2>
          </Link>
          <Link className="link" to="/about">
            <h2>ABOUT</h2>
          </Link>
      </div>
      <div className="phone-view">
        {/* <header className="header">
          <div className="signal-top">
            <div className="signal-1"></div>
            <div className="signal-2"></div>
          </div>
          <div className="circle"></div>
          <span className="hour">18:34</span>
          <div className="battery"> 
            <video className='bateriq' autoPlay loop muted>
              <source className='bateriq' src={battery} type="video/mp4" alt="static loop"/>
            </video>
          </div>

          <div className="signal-bot">
            <div className="signal-3"></div>
            <div className="signal-4"></div>
            <div className="signal-5"></div>
          </div>
          <span className="contacts">Contact</span>
          <div className="line"></div>
        </header> */}
        
        <div className="grid">
          <img className="icon email" src={email} alt="email" />
          <img className="yt icon" src={yt} alt="yt" />
          <img className="ig icon" src={ig} alt="ig" />
          <img className="fb icon" src={fb} alt="fb" />
          <img className="lin icon" src={lin} alt="lin" />
          <img className="phone icon" src={phone} alt="phone" />
          <img className="icon" src={bird} alt="twitter" />
          <div className="grid-item">.</div>
          <div className="grid-item">. </div>
        </div>
      </div>

    <div className='title'>
      <h1 className='medec'>IVAN <br/>MEDEN <br/> .COM</h1>
    </div>
    </div>
    
  </div>
  );
}

export default Contact;