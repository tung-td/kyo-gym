import React from "react";
import styles from "./VideoDescription.module.css"

const VideoDescription = ({ video }) => {
    return (
        <div>
            <h2>{video.title}</h2>
            <p>Author: {video.author}</p>
            <p>Description: {video.description}</p>
        </div>
    )
}

export default VideoDescription