import React from "react";
import { useState, useEffect } from "react";
import meals from '../../data/meal'
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import ListVideo from "../ListVideo/ListVideo";
import styles from "./MainVideoPlayer.module.css";
import { collectionService } from '../../service/collectionService';

const MainVideoPlayer = ({ videos, setVideos, selectedVideo, setSelectedVideo }) => {

    const handleCommentSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className={styles.container}>
            <VideoPlayer exersise={selectedVideo} onCommentSubmit={handleCommentSubmit} meals={meals} />
            <ListVideo videos={videos} onVideoSelect={setSelectedVideo} />
        </div>
    )
}

export default MainVideoPlayer