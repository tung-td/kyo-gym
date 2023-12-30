import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MainVideoPlayer from "../components/MainVideoPlayer/MainVideoPlayer"
import Related from "../components/Related/Related";
import List_Day from "../components/List_Day/List_Day";
import { collectionService } from "../service/collectionService";

const Workout = () => {
    const { courseId, dayId } = useParams();

    const [selectedVideo, setSelectedVideo] = useState([]);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getExercisesOfCourse = async () => {
            try {
                const exercises = await collectionService.getDetailDay(courseId, dayId);
                setVideos(exercises);
                setSelectedVideo(exercises[0]);
            } catch (err) {
                console.log(err);
            }
        }
        getExercisesOfCourse();
    }, [courseId, dayId])

    return (
        <div>
            <Header />
            <List_Day />
            <MainVideoPlayer videos={videos} setVideos={setVideos} selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} />
            {/* <Related /> */}
            <Footer />
        </div>
    )
}

export default Workout