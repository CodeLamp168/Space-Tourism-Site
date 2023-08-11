import React, { useState, useEffect } from 'react';
import Label from "./PageLabel";
import data from"./data.json";
import CorrespondingBackgroundImage from "./ResponsiveBackgrounds";
export default function TechPage(){
    const technologyDesktop = '/technology/background-technology-desktop.jpg'
    const technologyTablet = '/technology/background-technology-tablet.jpg'
    const technologyMobile = '/technology/background-technology-mobile.jpg'


function TechnologyDisplayComponent() {
    const [selectedTechIndex, setSelectedTechIndex] = useState(0);
    const [isPortrait, setIsPortrait] = useState(window.innerWidth <= 1190);

    useEffect(() => {
      const handleResize = () => {
        setIsPortrait(window.innerWidth <= 1190);
      };

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const handleTechButtonClick = (index) => {
      setSelectedTechIndex(index);
    };

    const selectedTechnology = data.technology[selectedTechIndex];
    const selectedImage = isPortrait
      ? selectedTechnology.images.landscape
      : selectedTechnology.images.portrait;

    return (
      <>
        <div className="techno-display">
          <img
            src={selectedImage}
            alt="404"
          />
        </div>

        <div className="techno-interactive-component">
          <div className="techno-btn-list">
            {data.technology.map((tech, index) => (
              <button
                key={index}
                className={selectedTechIndex === index ? 'active-tech-btn' : ''}
                onClick={() => handleTechButtonClick(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <div className="techno-info-wrapper">
            <h3 className="techno-header">THE TERMINOLOGY....</h3>
            <h2 className="techno-title">{selectedTechnology.name}</h2>
            <p className="techno-info">{selectedTechnology.description}</p>
          </div>
        </div>
      </>
    );
  }

    return (
        <>
          <CorrespondingBackgroundImage
            desktopImageUrl={technologyDesktop}
            tabletImageUrl={technologyTablet}
            mobileImageUrl={technologyMobile}
          />
          <main className="main-content-container technology-content-container">
            <Label labelNumber={'03'} labelHeader={'SPACE LAUNCH 101'} labelWebClass={'space-launch-label'} />
            <TechnologyDisplayComponent/>
          </main>
        </>
      );
}