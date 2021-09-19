import './Card.css'
import React, { useState } from 'react'
import Button from '../button/Button'
import Popup from '../popup/Popup'
import axios from 'axios'
import url from '../../constants/urls'

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
            if(days < 5) setRent(500)
            else{
                setRent(500 + (days - 5)*500)
            }
        }
        if(carType === 'Sedan'){
            if(days < 3) setRent(500)
            else{
                setRent(500 + (days - 3)*500)
            }
        }
        if(carType === 'SUV'){
            setRent(1000*days)
        }
    }
    const updateAvail = () => {
        axios.post(url+'/cars/updateAvail', {
            _id: car._id
        })
        car.status = "Unavailable"
    }
    return (
        <>
        <div className='card'>
            <img src={car.urls[0].url} className='car-img'/>
            <p>{car.carName}</p>
            <p>{car.type}</p>
            <p>{car.status}</p>
            <div className='button-div'>
                <Button 
                disabled={car.status === "Unavailable"  ? true : false}
                onClick={() => setpopup(true)}>
                    {car.status === "Unavailable"  ? "Unavailable" : "Book"}
                </Button>
            </div>
        </div>
        <Popup Trigger={popup} setTrigger={popClose}>
            <div>
                {rent > 0 ? (
                    <>
                        <h2>Receipt</h2>
                        <div className='car-info'>
                            <h3>Customer Name: {custName}</h3>
                            <h3>Date: {Date().toString().substr(4,11)}</h3>
                        </div>
                        <div>
                            <h3>Car: {car.carName} ({car.type})</h3>
                            <h3>Rental Period: {rentDays} days</h3>
                        </div>
                        <h2>Total: Rs. {rent}</h2>
                    </>
                ): (
                    <>
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
                        className='inp'
                        value={custName}
                        onChange={ e => setcustName(e.target.value)}/>
                    </div>
                    <div>
                        <h4>Number of Days</h4>
                        <input 
                        type='number' 
                        className='inp'
                        onChange={e => setRentDays(e.target.value)}/>
                    </div>
                </div>
                <div className='button-div2'>
                    <Button 
                    onClick={() => {
                        rentCalc(car.type, rentDays)
                        updateAvail()
                        }}>
                        Rent the Car
                    </Button>
                </div>
                    </>
                )}
            </div>
               
        </Popup>
        </>
    )
}

export default Card
