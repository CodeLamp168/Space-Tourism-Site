import React from 'react';

function CorrespondingBackgroundImage({ desktopImageUrl, tabletImageUrl, mobileImageUrl }) {
  const imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: '-1',
  };

  const desktopBreakpoint = 1025; // Set the breakpoint for desktop devices
  const tabletBreakpoint = 640; // Set the breakpoint for tablet devices

  const [backgroundImage, setBackgroundImage] = React.useState(mobileImageUrl);

  const handleResize = () => {
    if (window.innerWidth >= desktopBreakpoint) {
      setBackgroundImage(desktopImageUrl);
    } else if (window.innerWidth >= tabletBreakpoint) {
      setBackgroundImage(tabletImageUrl || mobileImageUrl);
    } else {
      setBackgroundImage(mobileImageUrl);
    }
  };

  React.useEffect(() => {
    handleResize(); // Call the function initially to set the background image based on the current screen size
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [desktopImageUrl, tabletImageUrl, mobileImageUrl]);

  return <img src={backgroundImage} alt="404" style={imgStyle} />;
}

export default CorrespondingBackgroundImage;