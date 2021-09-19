import React, { useContext, useState } from 'react'
import Button from '../../components/button/Button'
import CardInventory from '../../components/card/CardInventory'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import CarsContext from '../../contexts/CarsContext'
import './Inventory.css'

const Inventory = () => {
    const Cars = useContext(CarsContext)
    const [showAll, setshowAll] = useState(true)
    return (
        <div>
            <Header/>
            <div className='inv-buttons'>
                <div>
                    <Button
                    onClick={() => setshowAll(true)}>
                        Show All Cars
                    </Button>
                </div>
                <div>
                    <Button
                    onClick={() => setshowAll(false)}>
                        Show Available Cars
                    </Button>
                </div>
            </div>
            {showAll ? (
                Cars.map(car => {
                    return (
                    <CardInventory car={car}/>)
            })
            ):(
                Cars.map(car => {
                    if(car.status === "Available"){
                        return (<CardInventory car={car}/>)
                    }
                    
                })
            )}
            <Footer/>
        </div>
    )
}

export default Inventory
