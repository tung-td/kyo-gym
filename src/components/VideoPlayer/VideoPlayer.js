import React, { useState, useEffect } from "react";
import styles from "./VideoPlayer.module.css"
import Recipe from "../Recipe/Recipe";
import Comments from "../Comments/Comments";
import Instructions from "../Instructions/Instructions";
import ReactPlayer from 'react-player'
import { request } from '../../utils/axiosInstance';
import { useAuth } from '../../AuthContext'

const VideoPlayer = ({ exercise, onCommentSubmit, meals }) => {

    const [currentTab, setCurrentTab] = useState("instructions");

    const switchTab = (tab) => {
        setCurrentTab(tab);
    };

    const { user } = useAuth();
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await request.get('/customer/detail')
                setUserData(res)
            } catch (error) {
                console.log("Error fetching user information", error);
            }
        }

        if (user) {
            fetchUserData();
        }
    }, [user])

    return (
        <div className={styles.container}>
            {exercise && exercise.videoUrl && (
                <ReactPlayer
                    width="1236px"
                    height="auto"
                    className={styles.video}
                    url={exercise.videoUrl}
                    playing={true}
                    controls={true}
                    loop={true}
                />
            )}
            <div className={styles.info_video}>
                <h1 className={styles.video_title}>{exercise.exerciseName}</h1>
                <p className={styles.video_description}>{exercise.instructions}</p>
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
                        <Instructions exercise={exercise} />
                    )}

                    {currentTab === "comments" && (
                        <Comments exercise={exercise} userData={userData} />
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