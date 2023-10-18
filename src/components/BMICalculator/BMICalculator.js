import React from 'react';
import styles from './BMICalculator.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const BMI = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <p className={styles.title_box}>
                    Find out your Body Mass Index
                    <span className={styles.title_box_logo}>CALCULATE BMI</span>
                    <svg className={styles.title_line} xmlns="http://www.w3.org/2000/svg" width="42" height="2" viewBox="0 0 42 2" fill="none">
                        <path d="M0 1.229H41.8414" stroke="#CF4044" />
                    </svg>
                </p>
                <div>
                    <input placeholder='FIT' className={styles.input_box}></input>
                    <input placeholder='IN' className={styles.input_box}></input>
                    <input placeholder='LESS' className={styles.input_box}></input>
                </div>
                <button className={styles.btn_cal}>
                    CALCULATE
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginLeft: '10px', fontSize: '22px' }} />
                </button>
            </div>

            <div className={styles.line_shadow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1410" height="35" viewBox="0 0 1410 35" fill="none">
                    <path opacity="0.15" d="M705 35C1094.36 35 1410 27.165 1410 17.5C1410 7.83502 1094.36 0 705 0C315.639 0 0 7.83502 0 17.5C0 27.165 315.639 35 705 35Z" fill="#2B2024" />
                </svg>
            </div>
        </div>
    )
}

export default BMI