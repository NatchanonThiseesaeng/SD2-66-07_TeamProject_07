import React, { useState, useEffect } from 'react';

const icecoffeePage = () => {
  const [iceMenu, seticecoffeeMenu] = useState(null);

  useEffect(() => {
    // ส่งคำร้องขอไปยัง API เพื่อข้อมูลเมนูไก่
    fetch('http://localhost:3080/api/icecoffee')
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
          <h1>{iceMenu.name}</h1>
          <p>Price: {iceMenu.price} THB</p>
          <img src={iceMenu.image} alt={iceMenu.name} />
        </div>
      ) : (
        <p>Loading icecoffee menu...</p>
      )}
    </div>
  );
};

export default icecoffeePage;
