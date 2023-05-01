import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import Home from './Home';
import About from './About';
import Contact from './Contact';

function Web() {
  const [activePage, setActivePage] = useState("home");

  const handleClick = (event) => {
    setActivePage(event.target.name);
  }

  let activeComponent = null;

  if (activePage === "home") {
    activeComponent = <Home />;
  } else if (activePage === "about") {
    activeComponent = <About />;
  } else if (activePage === "contact") {
    activeComponent = <Contact />;
  }
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Ritesh</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button name="home" onClick={handleClick} className={`nav-link btn btn-link ${activePage === "home" ? "active" : ""}`}>Home</button>
              </li>
              <li className="nav-item">
                <button name="about" onClick={handleClick} className={`nav-link btn btn-link ${activePage === "about" ? "active" : ""}`}>About</button>
              </li>
              <li className="nav-item">
                <button name="contact" onClick={handleClick} className={`nav-link btn btn-link ${activePage === "contact" ? "active" : ""}`}>Contact</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-5">
        {activeComponent}
      </div>
    </div>
  );
}
export default Web;
