import React, { useContext, useState } from 'react'
import Button from '../../components/button/Button.js'
import CardInventory from '../../components/card/CardInventory.js'
import Footer from '../../components/footer/Footer.js'
import Header from '../../components/headerNav/Header.js'
import CarsContext from '../../contexts/CarsContext.js'
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
