import React from 'react';
import styles from './Banner.module.css';

import runner from '../../images/runner.png'
import eclipse from '../../images/Ellipse_Banner.png'
import star from '../../images/Star.png'
import cal from '../../images/circle_cal.png'
import react from '../../images/react.png'

const Banner = () => {
    return (
        <div className={styles.banner_container}>
            <div className={styles.bn_left}>
                <div className={styles.bn_left_1}>
                    <p className={styles.typo}>Workout MAKE YOUR</p>
                    <p className={styles.typo}><span className={styles.typo_red}>BODY </span>Shape</p>
                </div>

                <div className={styles.bn_left_2}>
                    <p className={styles.typo_des}>Discover your strongest self through the power of fitness. Join us and unlock a stronger, healthier you.</p>
                </div>

                <button className={styles.bn_left_btn}>start now</button>
            </div>
            <div className={styles.bn_center}>
                <img src={runner} alt="Runner" className={styles.runner}></img>
                <img src={eclipse} alt='Eclipse' className={styles.eclipse}></img>
            </div>
            <div className={styles.bn_right}>
                <div className={styles.rating}>
                    <div className={styles.rt}>
                        <img src={star} className={styles.star}></img>
                        <p className={styles.number_rating}>4.8</p>
                    </div>
                    <p className={styles.rating_title}>Average customer rating</p>
                </div>
                <div className={styles.circle}>
                    <img src={cal}></img>
                    <p className={styles.cal}>200 CAL</p>
                </div>
                <div>
                    <img src={react}></img>
                </div>
            </div>
        </div>
    )
}

export default Banner