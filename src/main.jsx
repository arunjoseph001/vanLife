import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import About from "./components/About";
import Vans from "./components/Vans";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import "./server";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">
          #VanLife
        </Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
