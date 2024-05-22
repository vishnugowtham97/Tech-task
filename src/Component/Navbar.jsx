import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS file

function Navbar() {
  return (
    <nav className="navbar-container">
      <h3> Round-3 Assesment</h3>
      <div>
        <li>
          {/* link to home page */}
          <Link to="/">Redux_PAgination_export</Link>
        </li>
      </div>
      <div>
        <li>
          {/* link to crud page */}
          <Link to="/task3">Crud</Link>
        </li>
      </div>
    </nav>
  );
}

export default Navbar;
