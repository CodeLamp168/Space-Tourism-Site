import CorrespondingBackgroundImage from "./ResponsiveBackgrounds"
export default function Destinations(){
    const destinationDesktop = '/destination/background-destination-desktop.jpg'
    const destinationTablet = '/destination/background-destination-tablet.jpg'
    const destinationMobile = '/destination/background-destination-mobile.jpg'

    function PlanetDisplayComponent(){
       

        return(
        <>
         <div className="main-planet-display-component">
            <div className="planet-display-header">
                <p><span>01</span>PICK YOUR DESTINATION</p>
            </div>
            <div className="planet-display">
                <img className="planet" src="/destination/image-moon.png" alt="404" />
            </div>
         </div>
         
         <div className="main-planet-interactive-component">
             <nav>
                <button>MOON</button>
                <button>MARS</button>
                <button>EUROPA</button>
                <button>TITAN</button>
             </nav>
             <div>
                <h1>MOON</h1>
                <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
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