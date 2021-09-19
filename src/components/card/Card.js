import './Card.css'
import React from 'react'
import Button from '../button/Button'

const Card = ({car}) => {
    console.log(car)
    const img = 'https://ibb.co/JmLw10p'
    return (
        <div className='card'>
            {/* <img src={img}/> */}
            <p>{car.carName}</p>
            <p>{car.type}</p>
            <p>{car.status}</p>
            <p>{car.odometer}</p>
            <div>
                <Button/>
            </div>
        </div>
    )
}

export default Card
