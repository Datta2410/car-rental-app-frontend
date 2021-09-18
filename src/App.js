import './App.css';
import Route from './components/route/Route';
import Home from './containers/home/Home'
function App() {
  return (
    <div className="App">
      <Route path='/'>
      <Home/>
      </Route>
    </div>
  );
}

export default App;
