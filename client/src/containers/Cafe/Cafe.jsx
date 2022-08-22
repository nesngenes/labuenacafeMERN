import React from 'react'
import './styles.css'

const Cafe = ({cafes}) => {
  return (
  <div className='cafes-container'>
    <div className='cafes'>
        {cafes.map(cafe => (
            <div className='cafe'>
                <h1>{cafe.cafeName}</h1>
                <p>{cafe.state}</p>
                <p>{cafe.description}</p>
            </div>
        ))}
    </div>
  </div>

  )
}

export default Cafe