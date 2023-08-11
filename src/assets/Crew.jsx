import CorrespondingBackgroundImage from "./ResponsiveBackgrounds";
import Label from "./PageLabel";
export default function CrewMembers(){
    const destinationDesktop = '/crew/background-crew-desktop.jpg'
    const destinationTablet = '/crew/background-crew-tablet.jpg'
    const destinationMobile = '/crew/background-crew-mobile.jpg'

    function CrewDetails() {
        return(
            <div className="crew-detail-container">
                <div className="crew-text-info">
                    <h3 className="crew-role">COMMANDER</h3>
                    <h2 className="crew-name">DOUGLAS HURLEY</h2>
                    <p className="crew-info">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2</p>
                </div>
                <div className="crew-btn-list">
                    <button className="crew-display-btn"></button>
                    <button className="crew-display-btn"></button>
                    <button className="crew-display-btn"></button>
                    <button className="crew-display-btn"></button>
                </div>
            </div>
        )
    }

    function CrewImage(){

        return (
        <div className="crew-image-container">
            <img src="/crew/image-douglas-hurley.png" alt="404" />
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
          <Label labelNumber={'02'} labelHeader={'MEET YOUR CREW'} labelWebClass={'crew-label'} />
          <CrewDetails/>
          <CrewImage/>
        </main>
      </>
    )
}