import React, { useState, useEffect } from "react";
import styles from "./VideoPlayer.module.css"
import Recipe from "../Recipe/Recipe";
import Comments from "../Comments/Comments";
import Instructions from "../Instructions/Instructions";
import ReactPlayer from 'react-player'
import { request } from '../../utils/axiosInstance';
import { useAuth } from '../../AuthContext'
import Badge from '@mui/material/Badge';
import { useParams } from 'react-router-dom';
import { collectionService } from '../../service/collectionService';
import List_Day from "../List_Day/List_Day";
import ListVideo from "../ListVideo/ListVideo";
import Chip from '@mui/material/Chip';

const VideoPlayer = ({ exercise, meals, videos, onVideoSelect }) => {
    const [lengthComment, setLengthComment] = useState(0);
    const [currentTab, setCurrentTab] = useState("instructions");
    const { courseId, dayId } = useParams();

    const switchTab = (tab) => {
        setCurrentTab(tab);
    };

    const handleDuration = (duration) => {
        console.log('Thời lượng video:', duration);
    };

    // PUT DONE EXERCISE
    const [isRequestSent, setIsRequestSent] = useState(false);

    const handleEnded = async () => {
        if (!isRequestSent) {
            try {
                const sendRequestDone = await collectionService.putDoneExercise(dayId, exercise.exerciseId);
                setIsRequestSent(true);
            } catch (error) {
                console.error('Lỗi khi gửi request PUT', error);
            }
        }
    };

    useEffect(() => {
        setIsRequestSent(false);
    }, [exercise.videoUrl]);

    // GET USER INFO
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

    // GET COMMENT
    const [listComment, setListComment] = useState([]);
    const [commentText, setCommentText] = useState([]);
    const [rating, setRating] = useState(1);

    useEffect(() => {
        const getCommentOfExercise = async () => {
            try {
                const comment = await collectionService.getComment(courseId, dayId);
                const filteredComment = Array.isArray(comment)
                    ? comment.filter(commentItem =>
                        (commentItem.exerciseId === exercise.exerciseId)
                        && (commentItem.courseId === exercise.courseId)
                        && (commentItem.dayId === exercise.dayId)
                    )
                    : [];

                setListComment(filteredComment);

                // Update lengthComment separately when listComment changes
                setLengthComment(filteredComment?.length || 0);
            } catch (error) {
                console.log(error);
            }
        };

        getCommentOfExercise();
    }, [courseId, dayId, exercise.exerciseId]);

    return (
        <div className={styles.container}>
            {exercise && exercise.videoUrl && (
                <ReactPlayer
                    key={exercise.videoUrl}
                    width="100%"
                    height="auto"
                    className={styles.video}
                    url={exercise.videoUrl}
                    playing={false}
                    controls={true}
                    loop={false}
                    onDuration={handleDuration}
                    onEnded={handleEnded}
                />
            )}

            <div className={styles.underVideo}>
                <div className={styles.groupTab}>
                    <div className={styles.info_video}>
                        <p className={styles.video_description}>
                            <p className={styles.video_title}>
                                {exercise.exerciseName}
                            </p>
                            <p className={styles.video_date}>4 days ago | more</p>
                            <p>{exercise.instructions}</p>
                            <p>Tags:
                                <Chip clickable className={styles.video_tags} label={exercise.target} />
                                <Chip clickable className={styles.video_tags} label={exercise.bodyPart} />
                                <Chip clickable className={styles.video_tags} label={exercise.equipment} />
                            </p>
                        </p>
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
                            <Badge badgeContent={lengthComment} color="primary">
                                Comments
                            </Badge>
                        </button>

                        <button
                            className={currentTab === "recipe" ? styles.tab_active : styles.tab_inactive}
                            onClick={() => switchTab("recipe")}
                        >
                            Recipe
                        </button>

                        <div style={{ borderTop: '1px solid #00000021;' }}>
                            {currentTab === "instructions" && (
                                <Instructions exercise={exercise} />
                            )}

                            {currentTab === "comments" && (
                                <Comments commentText={commentText} setCommentText={setCommentText}
                                    listComment={listComment} setListComment={setListComment}
                                    rating={rating} setRating={setRating}
                                    courseId={courseId}
                                    dayId={dayId}
                                    userData={userData}
                                    exercise={exercise}
                                    setLengthComment={setLengthComment}
                                />
                            )}

                            {currentTab === "recipe" && (
                                <Recipe meals={meals} />
                            )}
                        </div>
                    </div>
                </div>
                <ListVideo videos={videos} onVideoSelect={onVideoSelect} />
            </div>



        </div>
    )
}

export default VideoPlayer