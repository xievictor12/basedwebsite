import "../styles/template3.scss";
import { YoutubeProps, YoutubeData, videoType, itemType } from "customTypes";
import { useEffect, useState } from "react";
import Video from "./video";

function Template3({credentals}: YoutubeData) {
    let videos: videoType | undefined = GetYoutubeVids(credentals.channelId, credentals.key, credentals.results);
    {if(videos != undefined) {
        return (
            <div className="template3"> 
                <div className="content-container3">
                    <div className="video-list-container">
                        <div className="header">
                            <h2 className="header-title">Music</h2>
                            <h5 className="header-description">hehe</h5>
                        </div>
                        <ul className="video-list">
                            {
                                videos.items.map((video: itemType, index) => {
                                    return <Video index={index} video={video}/>
                                })
                            }
                        </ul>
                    </div> 
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
    let [videos, setVideos] = useState<videoType>();
    // using html string interpolation to create api call. 
    let url: string = `https://www.googleapis.com/youtube/v3/search?type=video`;
    let params = {
        order: `&order=date`,
        part: `&part=snippet`,
        channel: `&channelId=${channelId}`,
        results: `&maxResults=${results_count}`,
        key: `&key=${key}`
    }
    Object.values(params).forEach((k) => { url+=k });

    useEffect(() => {
        fetch(`${url}`) 
            .then(data => data.json())
            .then((res: videoType) => {
                setVideos(res);
            })
            .catch(error =>  alert("Error: " + error))
    },[url])
    return videos;
}