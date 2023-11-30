import React from "react";
import { useState } from "react";
import styles from "./Review.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import avt from "../../images/review_avt.png"

const reviews = [
    {
        id: 1,
        text: "Great gym with excellent facilities! The trainers are knowledgeable and friendly. I've seen amazing results since joining.",
        author: "John Doe",
        rating: 5,
    },
    {
        id: 2,
        text: "The atmosphere at this gym is fantastic. It's clean, well-maintained, and the classes are enjoyable. Highly recommend!",
        author: "Jane Smith",
        rating: 4.5,
    },
    {
        id: 3,
        text: "Disappointing experience. The equipment is outdated, and the staff is not very helpful. I expected more for the price.",
        author: "Bob Wilson",
        rating: 2,
    },
    {
        id: 4,
        text: "Incredible gym! The trainers are dedicated, and the variety of classes keeps things interesting. Definitely worth the membership fee.",
        author: "Alice Johnson",
        rating: 4.8,
    },
    {
        id: 5,
        text: "I love the flexibility of their class schedule. It allows me to work out at times that suit my busy lifestyle. Thumbs up!",
        author: "Chris Thompson",
        rating: 4,
    },
];

const Review = () => {

    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const currentReview = reviews[currentReviewIndex];

    const handlePrev = () => {
        setCurrentReviewIndex((prevIndex) =>
            prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentReviewIndex((prevIndex) =>
            prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
    };

    const renderRatingStars = (rating) => {
        const stars = [];
        for (let i = 0; i < Math.floor(rating); i++) {
            stars.push(<FontAwesomeIcon icon={faStar} key={i} className="star" />);
        }
        if (rating % 1 !== 0) {
            stars.push(<FontAwesomeIcon icon={faStarHalf} key={stars.length} className="star" />);
        }
        return stars;
    };

    return (
        <div className={styles.container}>
            <p className={styles.title}>WHAT PEOPLE SAY ABOUT US</p>

            <div className={styles.slider}>
                <div className={styles.slider_title}>
                    <svg style={{ marginRight: "15px", marginTop: "7px" }} xmlns="http://www.w3.org/2000/svg" width="46" height="3" viewBox="0 0 46 3" fill="none">
                        <path d="M45.4324 1.5H0.5" stroke="#CF4044" stroke-width="2" />
                    </svg>
                    TESTIMONIAL
                </div>
                <div className={styles.slider_review}>
                    <div className={styles.avt_name_star}>
                        <img src={avt} alt="avt" className={styles.slider_avt}></img>
                        <div className={styles.name_star}>
                            <div className={styles.name}>{currentReview.author}</div>
                            <div className="rating-stars">{renderRatingStars(currentReview.rating)}</div>
                        </div>
                    </div>

                    <p className={styles.slider_cmt}>{currentReview.text}</p>
                    <p className={styles.cmt_line}>,,</p>
                </div>
                <div className={styles.slider_btn}>
                    <button onClick={handlePrev}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button onClick={handleNext}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Review