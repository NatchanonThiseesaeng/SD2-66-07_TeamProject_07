// DisplayBoard.js
import React from 'react';
import { Link } from 'react-router-dom';

const DisplayBoard = ({ numberOfUsers }) => {
  return (
    <div className="display-board">
      <h4>Users Created</h4>
      <div className="number">
        {numberOfUsers}
      </div>
      <div className="btn">
        <Link to="/icecoffee" className="btn btn-warning">ดูเมนูกาแฟเย็น</Link>
      </div>
    </div>
  );
}

export default DisplayBoard;
