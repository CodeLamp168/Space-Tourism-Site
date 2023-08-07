import React from "react"
import CorrespondingBackgroundImage from "./ResponsiveBackgrounds"
export default function Home(){
    const homeDesktop = '/home/background-home-desktop.jpg'
    const homeMobile = '/home/background-home-mobile.jpg'
    const homeTablet = '/home/background-home-tablet.jpg'

    function HomeText(){
      return(
        <div className="home-main-text">

            <h3>SO, YOU WANT TO TRAVEL TO</h3>
            <h1>SPACE</h1>
            <p> Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience!</p>


        </div>
      )
    }

    function LandingPageBtn(){

      return(
        <button className="home-landing-page-btn">
          EXPLORE
        </button>
      )
    }
 

    return(
        <>
          <CorrespondingBackgroundImage
           desktopImageUrl={homeDesktop}
           tabletImageUrl={homeTablet}
           mobileImageUrl={homeMobile}/>
          <main className="main-content-container home-content-container">
            <HomeText/>
            <LandingPageBtn/>
          </main>
        </>
    )
}