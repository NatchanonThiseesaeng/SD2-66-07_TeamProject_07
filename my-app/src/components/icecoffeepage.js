import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './icecoffeepage.css'; // Import CSS file for styling

const MenuContainer = ({ name, price, image }) => (
  <div className="col-md-4">
    <div className="menu-container">
      <p>{name}</p>
      <p>{price}</p>
      <img src={image} alt={name} className="menu-image" />
    </div>
  </div>
);

const IcecoffeePage = () => {
  const [iceMenu, seticecoffeeMenu] = useState(null);

  useEffect(() => {
    // Send request to server to fetch chicken menu data from MySQL
    fetch('/api/icecoffee') // Change from '/api/chickenMenu' to '/api/chicken'
      .then(response => response.json())
      .then(data => {
        seticecoffeeMenu(data);
      })
      .catch(error => console.error('Error fetching chicken menu:', error));
  }, []);


  return (
    <div>
      {iceMenu ? (
        <div>
          <div className="row">
          <div className="col-md-3 mb-2">
              <Link to="/icecoffeePage" className="btn btn-lg btn-block" style={{ backgroundColor: 'rgb(201, 222, 190)', color: 'white' }}>สั่งกาแฟ</Link>
            </div>
          </div>
          <div className="row">
            {iceMenu.map(icemenu => (
              <MenuContainer
                key={icemenu.id}
                name={`ชื่อเมนู: ${icemenu.name}`}
                image={icemenu.image_url}
              />
            ))}
          </div>
        </div>
      ) : (
        <p>Loading icecoffee menu...</p>
      )}
    </div>
  );
};

export default IcecoffeePage;