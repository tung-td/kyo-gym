import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, Popover, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faXmark, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { collectionService } from '../../service/collectionService';
import styles from './List_Day.module.css';

const List_Day = () => {
    const [days, setDays] = useState(null);
    const { courseId } = useParams();
    const containerRef = useRef(null);
    const [selectedCard, setSelectedCard] = useState(1);
    const [anchorEl, setAnchorEl] = useState(document.body);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const getDaysOfCourse = async () => {
            try {
                const daysOfCourse = await collectionService.getDays(courseId);
                setDays(daysOfCourse.days);
            } catch (err) {
                console.log(err);
            }
        };
        getDaysOfCourse();
    }, [courseId, days]);

    const handleCardClick = (dayId, event) => {
        setSelectedCard(dayId);
        if (event) {
            setAnchorEl(event.currentTarget);
        }
    };

    const openPopup = (event) => {
        setAnchorEl(event ? event.currentTarget : document.body);
    };

    const closePopup = () => {
        setAnchorEl(null);
    };

    const handleScroll = () => {
        const st = window.scrollY;

        if (st < lastScrollTop || lastScrollTop === 0) {
            openPopup();
        } else {
            closePopup();
        }

        setLastScrollTop(st);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <div className={styles.List_Day_container}>
            <Button onClick={openPopup} style={{ color: '#fff', fontSize: '17px' }}>
                Days
                <FontAwesomeIcon icon={faCalendarCheck} color='#37383c' style={{ marginLeft: '6px', marginBottom: '5px', color: '#fff', fontSize: '17px' }} />
            </Button>

            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={closePopup}
                disableScrollLock={true}
                classes={{
                    paper: styles.popoverPaper,
                }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <Typography variant="h6">Choose Days</Typography>
                        <Button className={styles.popupClose} onClick={closePopup}>
                            <FontAwesomeIcon icon={faXmark} style={{ color: '#37383c' }} />
                        </Button>
                        <div className={styles.popupDays}>
                            {days &&
                                Array.isArray(days) &&
                                days.map((day) => (
                                    <Link
                                        key={day.dayId}
                                        to={`/collections/${courseId}/days/${day.dayId}`}
                                        className={`${styles.popupDay} ${selectedCard === day.dayId ? styles.selectedCard : ''} ${day.status !== true ? styles.disabledCard : ''}`}
                                        onClick={() => {
                                            handleCardClick(day.dayId);
                                            closePopup();
                                        }}
                                    >
                                        {day.dayName}
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>
            </Popover>
        </div>
    );
};

export default List_Day;

