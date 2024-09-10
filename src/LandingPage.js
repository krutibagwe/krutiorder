//LandingPage.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './assets/images/background.jpg'; 
import './LandingPage.css'; 

class LandingPage extends Component {
  render() {
    const backgroundStyle = {
      // Style object for the background image and gradient overlay
      background: `linear-gradient(135deg, rgba(30, 60, 114, 0.7), rgba(105, 118, 221, 0.7)), url(${backgroundImage}) no-repeat center center`,
      backgroundSize: 'cover',
    };

    return (
      <div className="landing-container" style={backgroundStyle}>
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-brand">MyWebsite</div>
          <ul className="navbar-links">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Main Header Section */}
        <header className="header">
          <h1 className="title">Welcome to Our Website</h1>
          <p className="subtitle">Discover our services and place your orders with ease.</p>
          <Link to="/order-form" className="order-link">Start Now</Link>
        </header>

        {/* Footer Section */}
        <footer className="footer">
          <p>Made by</p>
          <p>Kruti Bagwe</p>
          <p>Roll no. 05</p>
          <p>Internet Programming</p>
          <p>09 September 2024</p>
        </footer>
      </div>
    );
  }
}

export default LandingPage;
