import Err from "../components/error";
import { YoutubeProps, YoutubeData } from "customTypes";
import Template1 from "../components/template1";
import Template2 from "../components/template2";
import Template3 from "../components/template3"
/**
 * Case match coresponding Component and returns a component with content.
 * content returned is determined by contentType. Returns Err page if not derived.
 * @param: contentType: string => determines template returned.
 * @returns Component coorisponding to contentType
 */
function Page({contentType}: {contentType: string; }) {
    // Need to develope pages
    const YoutubeAuth = {
        channelId: "UCiIB6uB5cIGITWVcXemRfCA",
        key: "AIzaSyAsT0ODpsocky1Ov-NJpjcDEDcN1-tc-W8", 
        results: 20,
    }
    //console.log(YoutubeAuth);

    switch(contentType){
        case("Landing"):
            return (
                <Template1/>
            )
        case("Bio"):
            return (
                <Template2/>
            )
        case("Music"):
            return (
                <Template3 credentals = {YoutubeAuth}/>
            )
        case("Blog"):
            return (
                <Template2/>
            )
        case("Contact"):
            return (
                <Template2/>
            )
    }

    // Default returns error if case is not matched.
    return (
        <Err/>
    )
}

export default Page;