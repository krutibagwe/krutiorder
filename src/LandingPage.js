/*
// src/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // For styling

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1>Welcome to Our Website</h1>
      <p>Explore our services and make your orders easily!</p>
      <Link to="/order-form" className="order-link">Go to Order Form</Link>
    </div>
  );
};

export default LandingPage;
*/

// src/LandingPage.js
/*
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // For styling

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-container">
        <header className="header">
          <h1 className="title">Welcome to Our Website</h1>
          <p className="subtitle">Discover our services and make your orders with ease.</p>
          <Link to="/order-form" className="order-link">Start Now</Link>
        </header>
        <footer className="footer">
          <p>Made by </p>
          <p>Kruti Bagwe </p>
          <p>Roll no. 05 </p>
          <p>Internet Programming </p>
          <p>29 August 2024 </p>
        </footer>
      </div>
    );
  }
}

export default LandingPage;
*/

// src/LandingPage.js
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
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
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
