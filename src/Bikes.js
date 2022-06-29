import React, { useState, useEffect } from 'react';

function Bikes() {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        '/bikes.json',
      ).then(response => response.json())
      .then(data => {
        setBikes(data.bikes)
      });
    };

    fetchData();
  }, []);

  return (
    <ul>
      {bikes.map(item => (
        <li key={item.id}>
          <div>{item.brand}</div>
          <div>{item.model}</div>
        </li>
      ))}
    </ul>
  );
}

export default Bikes;