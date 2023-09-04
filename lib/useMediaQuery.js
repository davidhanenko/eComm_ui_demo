import { useEffect, useState } from 'react';

const useMediaQuery = width => {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia(
      `(max-width: ${width}px)`
    );

    // Set the initial value of the `isMobile` state variable
    setIsToggled(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = event => {
      setIsToggled(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener(
      'change',
      handleMediaQueryChange
    );

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener(
        'change',
        handleMediaQueryChange
      );
    };
  }, []);

  return isToggled;
};

export default useMediaQuery;
