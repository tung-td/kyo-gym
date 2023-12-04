import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './List_Day.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { collectionService } from '../../service/collectionService';

const List_Day = () => {

    const [days, setDays] = useState(null);

    const { courseId } = useParams();
    const containerRef = useRef(null);
    const [selectedCard, setSelectedCard] = useState(1);

    useEffect(() => {
        const getDaysOfCourse = async () => {
            try {
                const daysOfCourse = await collectionService.getDays(courseId)
                setDays(daysOfCourse.days)
            } catch (err) {
                console.log(err);
            }
        }
        getDaysOfCourse();
    }, [courseId])


    const scroll = (scrollOffset) => {
        containerRef.current.scrollBy({
            top: 0,
            left: scrollOffset,
            behavior: 'smooth'
        });
    };

    const handleCardClick = (dayId) => {
        setSelectedCard(dayId);
    };

    return (
        <div className={styles.List_Day_container}>
            <button className={styles.scrollButtonLeft} onClick={() => scroll(-1000)}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <div className={styles.container} style={{ overflowX: 'auto' }}>
                <div ref={containerRef} className={styles.cardContainer}>
                    {days && Array.isArray(days) && days.map(day => (
                        <div key={day.dayId} className={styles.cardWrapper}>
                            <Link
                                className={`${styles.card1} ${selectedCard === day.dayId ? styles.selectedCard : ''}`}
                                to={`/collections/${courseId}/days/${day.dayId}`}
                                onClick={() => handleCardClick(day.dayId)}
                            >
                                <h3 className={styles.title}>{day.dayName}</h3>
                                <div className={styles.go_corner}>
                                    <div className={styles.go_arrow}>
                                        →
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <button className={styles.scrollButtonRight} onClick={() => scroll(1000)}>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    );
};

export default List_Day;
