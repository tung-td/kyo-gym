import React, { useState, useEffect } from 'react';
import styles from './ListVideo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ListVideo = ({ videos, onVideoSelect }) => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        if (videos.length > 0) {
            setSelectedVideo(videos[0]);
        }
    }, [videos]);

    const renderRating = () => {
        const stars = [];

        const duration = 5;

        for (let i = 1; i <= 5; i++) {
            if (i <= duration) {
                stars.push(<span key={i}>
                    <FontAwesomeIcon icon={faStar} key={i} className={styles.star} />
                </span>);
            } else {
                stars.push(<span key={i}>
                    <FontAwesomeIcon icon={faStar} key={stars.length} className={styles.star} />
                </span>);
            }
        }

        return stars;
    };

    const handleVideoSelect = (video) => {
        setSelectedVideo(video);
        onVideoSelect(video);
    };

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredVideos = videos.filter(video =>
        video.exerciseName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.videoContainer}>
            <input
                type="text"
                placeholder="Search by exercise name"
                value={searchTerm}
                onChange={handleSearch}
                className={styles.searchBar}
            />
            <div className={styles.videoList}>
                {filteredVideos.length > 0 ? (
                    filteredVideos?.map((video) => (
                        <div
                            key={video.exerciseId}
                            onClick={() => handleVideoSelect(video)}
                            className={`${styles.videoItem} ${selectedVideo === video ? styles.videoItemSelected : ''}`}
                        >
                            <div className={styles.videoThumbnail}></div>
                            <div className={styles.videoInfo}>
                                <h3 className={styles.title}>{video.exerciseName}</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="179" height="7" viewBox="0 0 179 7" fill="none">
                                    <rect x="0.549805" y="0.0119629" width="178" height="6" rx="3" fill="#DDEDFF" />
                                    <rect x="0.549805" y="0.0119629" width="118" height="6" rx="3" fill="#007AFF" />
                                </svg>
                                <div className={styles.rating}>{renderRating()}</div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className={styles.notFound}>Not Found!</p>
                )}
            </div>
        </div>
    );
};

export default ListVideo;
