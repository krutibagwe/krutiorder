/*
// src/LandingPage.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // For styling

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-container">
        {/* Navbar }
        <nav className="navbar">
          <div className="navbar-brand">MyWebsite</div>
          <ul className="navbar-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Main Header Section }
        <header className="header">
          <h1 className="title">Welcome to Our Website</h1>
          <p className="subtitle">Discover our services and place your orders with ease.</p>
          <Link to="/order-form" className="order-link">Start Now</Link>
        </header>

        {/* Footer Section }
        <footer className="footer">
          <p>Made by</p>
          <p>Kruti Bagwe</p>
          <p>Roll no. 05</p>
          <p>Internet Programming</p>
          <p>29 August 2024</p>
        </footer>
      </div>
    );
  }
}

export default LandingPage;
*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // For styling

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-brand">MyWebsite</div>
          <ul className="navbar-links">
            <li><Link to="/home">Gallery</Link></li>
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
          <p>29 August 2024</p>
        </footer>
      </div>
    );
  }
}

export default LandingPage;
