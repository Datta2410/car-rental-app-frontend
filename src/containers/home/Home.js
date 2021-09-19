import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/footer/Footer'
import Button from '../../components/button/Button'
import Card from '../../components/card/Card'
import CarsContext from '../../contexts/CarsContext'
const Home = () => {
    const Cars = useContext(CarsContext)
    return (
        <div className='home'>
            <Header/>
            {Cars.map(car => {
                return (
                <Card car={car}/>)
            })}
            <Footer/>
        </div>
    )
}

export default Home
