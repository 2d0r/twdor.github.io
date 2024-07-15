import { useEffect, useState } from 'react';

export const useWindowWidth = () => {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

    useEffect(() => {
        // only execute all the code below in client side
        // Handler to call on window resize
        function handleResize() {
        // Set window width/height to state
        setWindowWidth(window.innerWidth);
        }
        
        // Add event listener
        window.addEventListener("resize", handleResize);
        
        // Call handler right away so state gets updated with initial window size
        handleResize();
        
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowWidth;
}