import React, { useContext } from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
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
