import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainNavComponent from './assets/MainNav';
import Home from './assets/Home';
import './App.css';
import Destinations from './assets/Destinations';
import CrewMembers from './assets/Crew';
import TechPage from './assets/Technology';

function App() {
  const [activePage, setActivePage] = useState('home');
  
  return (
    <Router>
      <div className="App">
        <MainNavComponent activePage={activePage} setActivePage={setActivePage} />
        <Routes>
           <Route exact path="/Space-Tourism-Site" forceRefresh={true} element={<Home/>} component={Home}/>
           <Route path="/Space-Tourism-Site/Destinations" forceRefresh={true} element={<Destinations/>}component={Destinations}/>
           <Route path="/Space-Tourism-Site/Crew" forceRefresh={true} element={<CrewMembers/>} component={CrewMembers}/>
           <Route path="/Space-Tourism-Site/Technology"  forceRefresh={true} element={<TechPage/>} component={TechPage}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
