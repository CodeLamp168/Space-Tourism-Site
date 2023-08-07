import React from "react"
import CorrespondingBackgroundImage from "./ResponsiveBackgrounds"
export default function Home(){

    const homeDesktop = '/home/background-home-desktop.jpg'
    const homeMobile = '/home/background-home-mobile.jpg'
    const homeTablet = '/home/background-home-tablet.jpg'
 

    return(
        <>
          <CorrespondingBackgroundImage
           desktopImageUrl={homeDesktop}
           tabletImageUrl={homeTablet}
           mobileImageUrl={homeMobile}/>
          <main className="main-content-container">
          </main>
        </>
    )
}