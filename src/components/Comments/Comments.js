import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import styles from './Comments.module.css';
import { collectionService } from '../../service/collectionService';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as starFull } from '@fortawesome/free-solid-svg-icons';
import { faStar as starNon } from '@fortawesome/free-regular-svg-icons';

const Comments = ({ exercise, userData }) => {
    const navigate = useNavigate();
    const { courseId, dayId } = useParams();
    const [listComment, setListComment] = useState([]);
    const [commentText, setCommentText] = useState([]);
    const [rating, setRating] = useState(1);

    useEffect(() => {
        const getCommentOfExercise = async () => {
            try {
                const comment = await collectionService.getComment(courseId, dayId);
                // Kiểm tra nếu comment không phải là mảng, gán giá trị mảng rỗng cho filteredComment
                const filteredComment = Array.isArray(comment)
                    ? comment.filter(commentItem =>
                        (commentItem.exerciseId === exercise.exerciseId)
                        && (commentItem.courseId === exercise.courseId)
                        && (commentItem.dayId === exercise.dayId)
                    )
                    : [];

                setListComment(filteredComment);
            } catch (error) {
                console.log(error);
            }
        }
        getCommentOfExercise();
        console.log(exercise.exerciseId);
    }, [courseId, dayId, exercise.exerciseId]);

    const handleCommentSubmit = async (e) => {
        e.preventDefault();

        const newComment = {
            commentText,
            rating,
            customer: userData.customerId,
            exercise: exercise.exerciseId
        }

        try {
            await collectionService.postComment(newComment);
            const updatedComments = await collectionService.getComment(courseId, dayId);
            setListComment(updatedComments);
            setCommentText('');
            setRating(1);
        } catch (error) {
            console.log(error);
        }
    }

    const [hoveredRating, setHoveredRating] = useState(0);

    // Function to handle hover on stars
    const handleStarHover = (rating) => {
        setHoveredRating(rating);
    };

    // Function to handle click on stars
    const handleStarClick = (rating) => {
        setRating(rating);

    };

    return (
        <div className={styles.tab_info_cmt}>
            <form onSubmit={handleCommentSubmit} className={styles.summitComment}>
                <div className={styles.ava_name}>
                    <div className={styles.avatar}>
                        <Avatar>Me</Avatar>
                    </div>
                    <div className={styles.name}>{userData.customerName}</div>
                </div>
                <div className={styles.starRating}>
                    <div className={styles.name}>Your rating</div>
                    <div className={styles.boxRating}>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={`${styles.star} ${star <= (hoveredRating || rating) ? styles.starFilled : ''}`}
                                onMouseEnter={() => handleStarHover(star)}
                                onMouseLeave={() => setHoveredRating(0)}
                                onClick={() => handleStarClick(star)}
                            >
                                <FontAwesomeIcon icon={star <= (hoveredRating || rating) ? starFull : starNon} className={styles.star} />
                            </span>
                        ))}
                    </div>
                </div>
                <textarea type="text"
                    placeholder="Add a comment"
                    className={styles.commentInput}
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                />
                <button type="submit" className={styles.commentSubmit} >Submit</button>
            </form>
            <div className={styles.customerReview}>
                <h1>Customer Review</h1>
                <ul className={styles.ulComment}>
                    {Array.isArray(listComment) &&
                        [...listComment].reverse().map((comment) => (
                            (comment.exerciseId === exercise.exerciseId) && (
                                <li key={comment.commentId} className={styles.commentContainer}>
                                    <div className={styles.avatarNameContainer}>
                                        <div className={styles.avatar}>
                                            <img src={comment.customerImg} alt="Customer Avatar" />
                                        </div>
                                        <div className={styles.commentInfo}>
                                            <h6 className={styles.name}>{comment.customerName}</h6>
                                        </div>
                                    </div>
                                    <div className={styles.commentBox}>
                                        <p className={styles.commentText}>{comment.commentText}</p>
                                        <div className={styles.ratingContainer}>
                                            <div className={styles.rating}>Rating: {comment.rating}/5</div>
                                        </div>
                                    </div>
                                </li>
                            )
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default Comments;
