import react, { useEffect, useState } from "react";
import "../styles/template1.scss";
interface windowSize {
    height: number,
    width: number,
}

function Template() {
    const size = useWindowSize();
    return (
        <iframe className="landing-vid"
            width={size?.width}
            height={size?.height}
            src="https://www.youtube.com/embed/Y4hsj5HXjU8?controls=1&amp;autoplay=1&amp;modestbranding=1;" 
            title="" 
            allow="autoplay; encrypted-media; picture-in-picture;" 
            />
    )
}

export default Template;

// resizes the window onEffect.
// Youtube window will not resize on window resize. Need function to resize.
function useWindowSize() {
    const [windowSize, setWindowSize] = useState<windowSize | undefined>();
    useEffect(() => {
        function handleResize() {
            // TODO: could have a more graceful implementation
            setWindowSize({
                width:  window.innerWidth,
                height: window.innerWidth/1.78,
            })
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [])
    return windowSize;
}