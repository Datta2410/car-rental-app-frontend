import axios from 'axios';
import { useEffect, useState } from 'react';
import Route from './components/routecomp/Route';
import url from './constants/urls';
import Home from './containers/home/Home'
import Inventory from './containers/inventory/Inventory';
import { CarsProvider } from './contexts/CarsContext';

const App = () => {
  const [Cars, setCars] = useState([])
  useEffect(() => {
    axios.get(url+'/cars/getAllCars')
    .then(result => {
        setCars(result.data)
    })
    .catch(error => console.log(error))
}, [])
  return (
    <CarsProvider value={Cars}>
      <div className="App">
        <Route path='/'>
        <Home/>
        </Route>
        <Route path='/inventory'>
        <Inventory/>
        </Route>
      </div>
    </CarsProvider>
  );
}

export default App;
