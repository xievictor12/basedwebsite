import { useRef, useState } from "react";
import Video from "../assets/test.webm";
import Muted from "../assets/icons/Muted.svg"
import Unmuted from "../assets/icons/volumeOn.svg"
import "../styles/template1.scss";

function Template1() {
    /*
    BACKUP FOR YOUTUBE

    import react, { useEffect, useState } from "react";

    interface windowSize {
    height: number,
    width: number,
    }

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
    */
    let [muted, setMuted] = useState(true);
    let videoRef = useRef<HTMLVideoElement>(null);

    function setIcon(){
        if(muted) return Muted;
        else return Unmuted;
    }

    function videoHandler(){
            if(videoRef.current?.muted ==  true && muted == true){
                videoRef.current.muted = false;
                videoRef.current.volume = .5;
                setMuted(muted = !muted);
                
            }
            else if(videoRef.current?.muted == false && muted == false) {
                videoRef.current.muted = true;
                setMuted(muted = !muted)
            }
    }
    return (
        <div className="container">
            <div className="overlay">
                <h1><b>VICTOR XIE</b> <big>|</big>  Performer & Composer</h1>
                <img src={setIcon()} className="volume" onClick={() => videoHandler()}/>

            </div>
            <video 
            src={Video}
            ref={videoRef}
                autoPlay
                loop
                muted
            >
            </video>
        </div>
    )
}
export default Template1;