import "../styles/template3.scss";
import { YoutubeProps, YoutubeData } from "customTypes";
import { useEffect, useState } from "react";
import Video from "./video";
type video = any[];

function Template3({credentals}: YoutubeData) {
    //console.log("Template3: " + credentals.key + " " + credentals.channelId + " " + credentals.results);
    let videos = GetYoutubeVids(credentals.channelId, credentals.key, credentals.results);
    console.log(videos);
    {if(videos != undefined) {
        return (
            <div className="template3"> 
                <div className="content-container3">
                    <div className="header">
                        <h2 className="header-title">Music</h2>
                        <h5 className="header-description">hehe</h5>
                    </div>
                </div>
                <div className="video-list-container">
                    <ol className="video-list">

                    </ol>
                </div> 
            </div>
        )
    }}
    return(
        <div className="template3">
                            <div className="content-container3">
                            <div>loading...</div>
                            </div>
        </div>
    )
}

export default Template3;

function GetYoutubeVids (channelId: string, key: string, results_count: number) {
    const [videos, setVideos] = useState<any>();
    console.log("checking if getyoutubevids is called")
    //console.log("Template3: " + key + " " + channelId + " " + results_count);
    // using html string interpolation to create api call. 
    let url: string = `https://www.googleapis.com/youtube/v3/search?`;
    let params = {
        order: `order=date`,
        part: `&part=snippet`,
        channel: `&channelId=${channelId}`,
        results: `&maxResults=${results_count}`,
        key: `&key=${key}`
    }
    Object.values(params).forEach((k) => { url+=k });

    useEffect(() => {
        async function GetYoutubeVideos() {
            const resp = await fetch(`${url}`) 
                .then(data => {
                    return data;
                })
                .catch(error => {
                    alert("Error: " + error);
                })
            const vids = await resp?.json();

            console.log(vids.items);
            setVideos({
                videos: [...vids.items],
            })
        }
        GetYoutubeVideos();
    },[])
    return videos;
}