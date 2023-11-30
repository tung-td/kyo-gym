import React from "react";
import styles from "./VideoPlayer.module.css"
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import Comments from "../Comments/Comments";
import Instructions from "../Instructions/Instructions";
import ReactPlayer from 'react-player'

const VideoPlayer = ({ exersise, onCommentSubmit, meals }) => {

    const [currentTab, setCurrentTab] = useState("instructions");

    const switchTab = (tab) => {
        setCurrentTab(tab);
    };

    return (
        <div className={styles.container}>
            {exersise && exersise.videoUrl && (
                <ReactPlayer
                    width="1236px"
                    height="auto"
                    className={styles.video}
                    url={exersise.videoUrl}
                    playing={true}
                    controls={true}
                    loop={true}
                />
            )}
            <div className={styles.info_video}>
                <h1 className={styles.video_title}>{exersise.exerciseName}</h1>
                <p className={styles.video_description}>{exersise.instructions}</p>
            </div>

            <div className={styles.tab_buttons}>
                <button
                    className={currentTab === "instructions" ? styles.tab_active : styles.tab_inactive}
                    onClick={() => switchTab("instructions")}
                >
                    Instructions
                </button>
                <button
                    className={currentTab === "comments" ? styles.tab_active : styles.tab_inactive}
                    onClick={() => switchTab("comments")}
                >
                    Comments
                </button>
                <button
                    className={currentTab === "recipe" ? styles.tab_active : styles.tab_inactive}
                    onClick={() => switchTab("recipe")}
                >
                    Recipe
                </button>

                <div>
                    {currentTab === "instructions" && (
                        <Instructions exersise={exersise} />
                    )}

                    {currentTab === "comments" && (
                        <Comments exersise={exersise} onCommentSubmit={onCommentSubmit} />
                    )}

                    {currentTab === "recipe" && (
                        <Recipe meals={meals} />
                    )}
                </div>
            </div>

        </div>
    )
}

export default VideoPlayer