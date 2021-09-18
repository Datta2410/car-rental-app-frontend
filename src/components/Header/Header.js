import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='Header'>
            <h2>Car Rental App</h2>
            <div className='anchors'>
                <a href='/rent'><h3>Rent A Car</h3></a>
                <a href='/inventory'><h3>Car Inventory</h3></a>

            </div>
        </div>
    )
}

export default Header
