import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Collections_card.module.css';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { collectionService } from '../../service/collectionService';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const CollectionCard = ({ id, title, image, duration }) => {

    const renderRating = () => {
        const stars = [];

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

    return (
        <Card key={id} className={styles.collection_card}>
            <Card.Img variant="top" src={image} className={styles.img} />
            <Card.Body className={styles.card_body}>
                <Card.Title>{title}</Card.Title>
                <div className={styles.rating}>{renderRating()}<p style={{ marginLeft: '10px' }}>5 rating</p></div>
                <svg className={styles.line} xmlns="http://www.w3.org/2000/svg" width="414" height="2" viewBox="0 0 414 2" fill="none">
                    <path d="M0 1H413.5" stroke="#6A6B6C" stroke-width="0.5" />
                </svg>
                <div className={styles.footer}>
                    <p className={styles.collection_duration}>Duration: {duration}</p>
                    <Link to={`/collections/${id}/days/1`} className={styles.link}>
                        <button className={styles.btn}>Join now</button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
};

const Collections_card = ({ selectedCategory }) => {
    const [dataCourse, setDataCourse] = useState([]);

    const getCardsFunction = async () => {
        try {
            const cards = await collectionService.getCards();
            setDataCourse(cards);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCardsFunction();
    }, []);

    const filteredCards = dataCourse.filter(course => {
        if (selectedCategory === 'All') {
            return true; // Hiển thị tất cả các card nếu 'All' được chọn
        } else {
            // Lọc theo loại khóa được chọn
            return course.courseType.courseTypeName === selectedCategory;
        }
    });

    return (
        <div className={styles.collection}>
            {filteredCards.map(course => (
                <CollectionCard
                    key={course.courseId}
                    id={course.courseId}
                    title={course.courseName}
                    description={course.description}
                    duration={course.duration}
                    image={course.image}
                />
            ))}
        </div>
    );
};

export default Collections_card;
