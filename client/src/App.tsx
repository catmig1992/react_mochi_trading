import "./App.css";
import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Category from "./components/Category";
import Store from "./components/Store";
import Event from "./components/Event";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p className="App-title">Mochi Land</p>
        </div>
      </header>

      <Router>
        <nav className="App-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/online-store">Online Store</Link>
            </li>
            <li>
              <Link to="/upcoming-events">Upcoming Events</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <div className="display">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Category />} />
            <Route path="/online-store" element={<Store />} />
            <Route path="/upcoming-events" element={<Event />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>

      <footer className="App-footer">
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Ebay</p>
      </footer>
    </div>
  );
}

export default App;
