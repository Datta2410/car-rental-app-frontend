import './Card.css'
import React, { useState } from 'react'
import Button from '../button/Button'
import Popup from '../popup/Popup'

const Card = ({car}) => {
    const [popup, setpopup] = useState(false)
    const [custName, setcustName] = useState("")
    const [rentDays, setRentDays] = useState("")
    const [rent, setRent] = useState(0)
    const popClose = () => {
        setpopup(false)
        setcustName("")
        setRentDays("")
        setRent(0)
    }
    const rentCalc = (carType, days) => {
        if(carType === 'Hatchback'){
            if(days < 5) return 500
            else{
                setRent(500 + (days - 5)*500)
            }
        }
        if(carType === 'Sedan'){
            if(days < 3) return 500
            else{
                setRent(500 + (days - 3)*500)
            }
        }
        if(carType === 'SUV'){
            setRent(1000*days)
        }
    }
    return (
        <>
        <div className='card'>
            {/* <img src={img}/> */}
            <p>{car.carName}</p>
            <p>{car.type}</p>
            <p>{car.status}</p>
            <p>{car.odometer}</p>
            <div className='button-div'>
                <Button onClick={() => setpopup(true)}>Book</Button>
            </div>
        </div>
        <Popup Trigger={popup} setTrigger={popClose}>
            <div>
                <h3>Car Details</h3>
                <div className='car-info'>
                    <h4>Car : {car.carName}</h4>
                    <h4>Car Type: {car.type}</h4>
                    <h4>Status: {car.status}</h4>
                </div>
                <div className='car-info'>
                    <div>
                        <h4>Customer Name</h4>
                        <input 
                        type='text'
                        className='text-inp'
                        value={custName}
                        onChange={ e => setcustName(e.target.value)}/>
                    </div>
                    <div>
                        <h4>Number of Days</h4>
                        <input 
                        type='number' 
                        className='num-inp'
                        onChange={e => setRentDays(e.target.value)}/>
                    </div>
                </div>
                <div className='button-div2'>
                    <Button 
                    onClick={() => rentCalc(car.type, rentDays)}>
                        Rent the Car
                    </Button>
                </div>
                {rent > 0 ? (<p>{rent}</p>): null}
            </div>
               
        </Popup>
        </>
    )
}

export default Card
