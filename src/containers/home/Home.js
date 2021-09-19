import React, { useContext } from 'react'
import './Home.css'
import Header from '../../components/headerNav/Header.js'
import Footer from '../../components/footer/Footer.js'
import Card from '../../components/card/Card.js'
import CarsContext from '../../contexts/CarsContext.js'
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
