import React from "react";
import meals from '../../data/meal'
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import ListVideo from "../ListVideo/ListVideo";
import styles from "./MainVideoPlayer.module.css";

const MainVideoPlayer = ({ videos, setVideos, selectedVideo, setSelectedVideo }) => {

    return (
        <div className={styles.container}>
            <VideoPlayer exercise={selectedVideo} meals={meals} videos={videos} onVideoSelect={setSelectedVideo} />
        </div>
    )
}

export default MainVideoPlayer