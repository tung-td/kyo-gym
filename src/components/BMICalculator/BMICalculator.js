import React, { useState } from 'react';
import styles from './BMICalculator.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const BMI = () => {
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [bmi, setBmi] = useState('')

    const calculateBMI = () => {
        const weightInKg = parseFloat(weight);
        const heightInM = parseFloat(height) / 100;

        if (isNaN(weightInKg) || isNaN(heightInM) || weightInKg <= 0 || heightInM <= 0) {
            setBmi('Not valid');
            return;
        }

        const bmiResult = (weightInKg / (heightInM * heightInM)).toFixed(2);
        setBmi(bmiResult)
    }

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
                    <input placeholder='Weight (kg)' className={styles.input_box} value={weight} onChange={(e) => setWeight(e.target.value)}></input>
                    <input placeholder='Height (cm)' className={styles.input_box} value={height} onChange={(e) => setHeight(e.target.value)}></input>
                    <input placeholder='BMI' className={styles.input_box} value={bmi}></input>
                </div>
                <button className={styles.btn_cal} onClick={calculateBMI}>
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