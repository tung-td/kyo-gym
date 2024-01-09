import React from 'react';
import styles from './Banner.module.css';
import { useAuth } from '../../AuthContext'
import runner from '../../images/runner.png'
import eclipse from '../../images/Ellipse_Banner.png'
import star from '../../images/Star.png'
import cal from '../../images/circle_cal.png'
import react from '../../images/react.png'
import { Link } from 'react-router-dom';

import ChartCircle from '../ChartCircle/ChartCircle';

const Banner = () => {

    const { user } = useAuth();
    var isLogin = false;
    if (user) {
        isLogin = true;
    }

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

                <Link to="/recommend" style={{ textDecoration: 'none', color: '#fff' }} className={styles.bn_left_btn}>
                    Recommend
                </Link>
            </div>
            <div className={styles.bn_center}>
                <img alt="img" src={runner} className={styles.runner}></img>
                <img alt="img" src={eclipse} className={styles.eclipse}></img>
            </div>
            <div className={styles.bn_right}>
                <div className={styles.rating}>
                    <div className={styles.rt}>
                        <img alt="img" src={star} className={styles.star}></img>
                        <p className={styles.number_rating}>4.8</p>
                    </div>
                    <p className={styles.rating_title}>Average customer rating</p>
                </div>
                <div className={styles.circle}>
                    {isLogin ? (<ChartCircle />) :
                        (
                            <div><img alt="img" src={cal}></img>
                                <p className={styles.cal}>200 CAL</p></div>
                        )
                    }
                </div>
                <div>
                    <img alt="img" src={react}></img>
                </div>
            </div>
        </div>
    )
}

export default Banner