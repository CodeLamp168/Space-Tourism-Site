import React, { useState, useEffect } from 'react';
import CorrespondingBackgroundImage from "./ResponsiveBackgrounds"
import data from "./data.json"
export default function Destinations(){
    const destinationDesktop = '/destination/background-destination-desktop.jpg'
    const destinationTablet = '/destination/background-destination-tablet.jpg'
    const destinationMobile = '/destination/background-destination-mobile.jpg'

    function PlanetDisplayComponent(){
      const [activePlanetIndex, setActivePlanetIndex] = useState(0);

  const handleButtonClick = (index) => {
    setActivePlanetIndex(index);
  };

  useEffect(() => {
    // Set "Moon" as the default active planet
    setActivePlanetIndex(0);
  }, []);

  return (
    <>
      <div className="main-planet-display-component">
        <div className="planet-display">
          <img
            className="planet"
            src={data.destinations[activePlanetIndex].images.png}
            alt="404"
          />
        </div>
      </div>

      <div className="main-planet-interactive-component">
        <nav className="planet-interactive-nav-row">
          {data.destinations.map((planet, index) => (
            <button
              key={index}
              className={`${
                index === activePlanetIndex ? 'destination-active' : ''
              }`}
              onClick={() => handleButtonClick(index)}
            >
              {planet.name.toUpperCase()}
            </button>
          ))}
        </nav>
        <div>
          <h1>{data.destinations[activePlanetIndex].name}</h1>
          <p>{data.destinations[activePlanetIndex].description}</p>
          <div className="display-distance-travel-time">
            <div>
              <p>AVG. DISTANCE</p>
              <h2>{data.destinations[activePlanetIndex].distance}</h2>
            </div>
            <div>
              <p>TRAVEL TIME</p>
              <h2>{data.destinations[activePlanetIndex].travel}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

    return(
        <>
          <CorrespondingBackgroundImage
           desktopImageUrl={destinationDesktop}
           tabletImageUrl={destinationTablet}
           mobileImageUrl={destinationMobile}/>
          <main className="main-content-container destination-content-container">
            <PlanetDisplayComponent/>
          </main>
        </>
    )
}