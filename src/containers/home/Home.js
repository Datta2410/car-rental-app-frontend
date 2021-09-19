import React, { useEffect, useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/footer/Footer'
import Button from '../../components/button/Button'
import Card from '../../components/card/Card'
import axios from 'axios'
import url from '../../constants/urls'
const Home = () => {
    const [Cars, setCars] = useState([])
    useEffect(() => {
        axios.get(url+'/cars/getAllCars')
        .then(result => {
            setCars(result.data)
            console.log(result.data)
        })
        .catch(error => console.log(error))
    }, [])
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
