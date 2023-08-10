import CorrespondingBackgroundImage from "./ResponsiveBackgrounds";
export default function CrewMembers(){
    const destinationDesktop = '/destination/background-crew-desktop.jpg'
    const destinationTablet = '/destination/background-crew-tablet.jpg'
    const destinationMobile = '/destination/background-crew-mobile.jpg'

    function CrewDetails() {
        return(
            <div>

            </div>
        )
    }




    return (
        <>
        <CorrespondingBackgroundImage
         desktopImageUrl={destinationDesktop}
         tabletImageUrl={destinationTablet}
         mobileImageUrl={destinationMobile}/>
        <main className="main-content-container crew-content-container">
        </main>
      </>
    )
}