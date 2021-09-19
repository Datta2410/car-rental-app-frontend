import React from 'react'

const CardInventory = ({car}) => {
    return (
        <div className='card-inventory'>
            <img src={car.urls[0].url} alt='Loading' className='car-img'/>
            <p>{car.carName}</p>
            <p>{car.type}</p>
            <p>{car.status}</p>
        </div>
    )
}

export default CardInventory
