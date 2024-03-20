import React from 'react';
import { Link } from 'react-router-dom';

// Import the image
import tapIcon from '../tap.ico';

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">หน้าแรก</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/icecoffeepage">เมนูกาแฟเย็น</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hotcoffeepage">เมนูกาแฟร้อน</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/otherpage">เมนูอื่นๆ</Link>
            </li>
          </ul>
        </div>
        <img src={tapIcon} alt="logo" /> {/* ไอคอน */}
      </div>
    </nav>
  );
};
