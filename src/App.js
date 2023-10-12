import { Fragment } from "react";
import { Route, Routes, Outlet } from 'react-router-dom';
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
      <Routes >
        <Route path="spacetourism/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='technology' element={<Technology data={jsonData.technology}/>} />
          <Route path='crew' element={<Crew data={jsonData.crew}/>}/>
          <Route path='destination' element={<Destination data={jsonData.destinations}/>}/>
        </Route>        
      </Routes>
    </Fragment>
  );
}

function Layout() {
  return(
    <Fragment>
      <Navigation/>   
      <Outlet />
    </Fragment>
  )
}
export default App;
