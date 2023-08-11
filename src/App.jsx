import { useState } from 'react';
import MainNavComponent from './assets/MainNav';
import Home from './assets/Home';
import './App.css'
import Destinations from './assets/Destinations';
import CrewMembers from './assets/Crew';
import TechPage from './assets/Technology';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home />;
      case 'destinations':
        return <Destinations />;
      case 'crew':
        return <CrewMembers />;
      case 'tech': 
        return <TechPage/>;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
       <MainNavComponent activePage={activePage} setActivePage={setActivePage}/>
       {renderPage()}
    </div>
  )
}

export default App
