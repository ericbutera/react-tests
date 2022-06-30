import React, { useState, useEffect } from 'react'
import './Bikes.css'

function Bikes() {
  const [bikes, setBikes] = useState([])

  useEffect(() => {
    // https://reactjs.org/docs/faq-ajax.html
    const fetchData = async () => {
      fetch('/bikes.json')
        .then(response => response.json())
        .then(data => {
          setBikes(data.bikes)
        })
    }

    fetchData()
  }, [])

  return (
    <ul className="bikes">
      {bikes.map(item => (
        <li key={item.id}>
          <span className="brand">{item.brand}</span>
          <span className="model">{item.model}</span>
          <img src={'/i/' + item.image} alt={item.model} className="view" />
        </li>
      ))}
    </ul>
  )
}

export default Bikes
