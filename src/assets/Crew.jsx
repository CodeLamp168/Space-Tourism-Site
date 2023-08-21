import React, { useState } from 'react';
import CorrespondingBackgroundImage from "./ResponsiveBackgrounds";
import Label from "./PageLabel";
import data from './data.json';

export default function CrewMembers() {
  const destinationDesktop = 'crew/background-crew-desktop.jpg';
  const destinationTablet = 'crew/background-crew-tablet.jpg';
  const destinationMobile = 'crew/background-crew-mobile.jpg';

  function CrewDisplayComponent({ crewMember, selectedCrewIndex, onCrewButtonClick }) {
    return (
      <>
        <div className="crew-detail-container">
          <div className="crew-text-info">
            <h3 className="crew-role">{crewMember.role}</h3>
            <h2 className="crew-name">{crewMember.name}</h2>
            <p className="crew-info">{crewMember.bio}</p>
          </div>
          <div className="crew-btn-list">
            {data.crew.map((member, index) => (
              <button
                key={index}
                className={`crew-display-btn ${selectedCrewIndex === index ? 'active-crew-display-btn' : ''}`}
                onClick={() => onCrewButtonClick(index)}
              >
              </button>
            ))}
          </div>
        </div>
  
        <div className="crew-image-container">
          <img src={crewMember.images.png} alt="404" />
        </div>
      </>
    );
  }

  const [selectedCrew, setSelectedCrew] = useState(0);
  const selectedCrewMember = data.crew[selectedCrew];

  return (
    <>
      <CorrespondingBackgroundImage
        desktopImageUrl={destinationDesktop}
        tabletImageUrl={destinationTablet}
        mobileImageUrl={destinationMobile}
      />
      <main className="main-content-container crew-content-container">
        <Label labelNumber={'02'} labelHeader={'MEET YOUR CREW'} labelWebClass={'crew-label'} />
        <CrewDisplayComponent
          crewMember={selectedCrewMember}
          selectedCrewIndex={selectedCrew}
          onCrewButtonClick={setSelectedCrew}
        />
      </main>
    </>
  );
}
