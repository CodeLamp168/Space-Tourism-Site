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
           <Route exact path="/Space-Tourism-Site" element={<Home/>} component={Home}/>
           <Route path="/Destinations" element={<Destinations/>}component={Destinations}/>
           <Route path="/Crew" element={<CrewMembers/>} component={CrewMembers}/>
           <Route path="/Technology" element={<TechPage/>} component={TechPage}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
