import React from 'react';
import Avatar from '@mui/material/Avatar';
import styles from './Comments.module.css';

const Comments = ({ exersise, onCommentSubmit }) => {
    return (
        <div className={styles.tab_info_cmt}>
            <form onSubmit={onCommentSubmit} className={styles.summitComment}>
                <div className={styles.avatar}>
                    <Avatar>Me</Avatar>
                </div>
                <input type="text" placeholder="Add a comment" className={styles.commentInput} />
                <button type="submit" className={styles.commentSubmit}>Submit</button>
            </form>
            <ul style={{ paddingLeft: '8rem' }}>
                {Array.isArray(exersise.comments) && exersise.comments?.map((comment) => (
                    <li key={comment.id} className={styles.commentContainer}>
                        <div className={styles.avatarNameContainer}>
                            <div className={styles.avatar}>
                                <Avatar>{comment.avatar}</Avatar>
                            </div>
                            <div className={styles.commentInfo}>
                                <h6 className={styles.name}>{comment.name}</h6>
                            </div>
                        </div>
                        <div className={styles.commentBox}>
                            <p className={styles.commentText}>{comment.text}</p>
                            <div className={styles.ratingContainer}>
                                <div className={styles.rating}>Rating: {comment.rating}/5</div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Comments;
