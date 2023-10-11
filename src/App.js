import { Fragment } from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home";
import Technology from './Components/Technology/Technology';
import Crew from './Components/Crew/Crew';
import Destination from './Components/Destination/Destination';
import Navigation from "./Components/Ui/Navigation/Navigation";
import './scss/commons.scss';
import jsonData from './data/data.json';

function App() {
  return (
    <Fragment >
      <Navigation/>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/technology' element={<Technology/>} />
        <Route path='/crew' element={<Crew data={jsonData.crew}/>}/>
        <Route path='/destination' element={<Destination data={jsonData.destinations}/>}/>
      </Routes>
    </Fragment>
  );
}

export default App;
