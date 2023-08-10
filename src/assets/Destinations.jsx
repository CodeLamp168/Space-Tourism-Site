import React, { useState, useEffect } from 'react';
import CorrespondingBackgroundImage from "./ResponsiveBackgrounds"
import data from "./data.json"
export default function Destinations(){
    const destinationDesktop = '/destination/background-destination-desktop.jpg'
    const destinationTablet = '/destination/background-destination-tablet.jpg'
    const destinationMobile = '/destination/background-destination-mobile.jpg'

    function PlanetDisplayComponent(){
       

        return(
        <>
         <div className="main-planet-display-component">
            <div className="planet-display">
                <img className="planet" src="/destination/image-moon.png" alt="404" />
            </div>
         </div>
         
         <div className="main-planet-interactive-component">
             <nav className="planet-interactive-nav-row">
                <button>MOON</button>
                <button>MARS</button>
                <button>EUROPA</button>
                <button>TITAN</button>
             </nav>
             <div>
                <h1>MOON</h1>
                <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                <div className="display-distance-travel-time">
                    <div>
                        <p>AVG. DISTANCE</p>
                        <h2>384,400</h2>
                    </div>
                    <div>
                        <p>AVG. DISTANCE</p>
                        <h2>3 DAYS</h2>
                    </div>
                </div>
             </div>

         </div>
         </>
        )
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