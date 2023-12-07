import React from 'react'
import styles from './StepSubmit.module.css'
import Button from '@mui/material/Button';

const StepSubmit = ({ handlePrevious }) => {
    return (
        <div className={styles.groupCard}>
            <div className={styles.wrapCard}>
                <div className={styles.loadSteps}>
                    <div className={styles.stepCircle}>
                        <p className={styles.stepNumber}>1</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <circle cx="17.2012" cy="17.3235" r="17" fill="#CF4044" />
                        </svg>
                    </div>
                    <div className={styles.lineStepFull}></div>
                    <div className={styles.stepCircle}>
                        <p className={styles.stepNumber}>2</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <circle cx="17.2012" cy="17.3235" r="17" fill="#CF4044" />
                        </svg>
                    </div>
                    <div className={styles.lineStepFull}></div>
                    <div className={styles.stepCircle}>
                        <p className={styles.stepNumber}>3</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <circle cx="17.2012" cy="17.3235" r="17" fill="#CF4044" />
                        </svg>
                    </div>
                    <div className={styles.lineStepFull}></div>
                    <div className={styles.stepCircle}>
                        <p className={styles.stepNumber}>4</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <circle cx="17.2012" cy="17.3235" r="17" fill="#CF4044" />
                        </svg>
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.gridCard}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="158" height="145" viewBox="0 0 158 145" fill="none">
                        <rect opacity="0.5" x="14.4922" y="0.663574" width="51.5427" height="51.5427" rx="10" fill="#9E96FF" />
                        <rect opacity="0.5" x="128.443" y="33.5337" width="29.3594" height="29.3594" rx="10" fill="#9E96FF" />
                        <rect opacity="0.5" x="0.443359" y="75.5337" width="31.5329" height="31.5329" rx="8" fill="#DEDBFF" />
                        <rect opacity="0.5" x="114.73" y="107.485" width="36.5935" height="36.5935" rx="8" fill="#DEDBFF" />
                        <circle cx="83.9199" cy="79.0391" r="60" fill="#CF4044" />
                        <g filter="url(#filter0_d_234_15542)">
                            <path d="M61.2031 82.2838L74.1836 95.2643L106.635 62.813" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <filter id="filter0_d_234_15542" x="27.2031" y="32.813" width="113.432" height="100.451" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="15" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.290196 0 0 0 0 0.227451 0 0 0 0 1 0 0 0 0.3 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_234_15542" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_234_15542" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                    <h4>Submit your quote request</h4>
                    <Button
                        type="submit"
                        variant="contained"
                        onClick={handlePrevious}
                        sx={{ marginTop: 10, borderRadius: 55, color: '#fff', backgroundColor: '#CF4044', width: '8rem' }}
                        color="error"
                    >
                        Submit
                    </Button>
                </div>
                <div className={styles.btnGroup}>
                    <Button
                        variant="outlined"
                        onClick={handlePrevious}
                        sx={{ marginTop: 10, borderRadius: 55, color: '#CF4044', border: '1px solid #CF4044' }}
                        color="error"
                    >
                        Previous step
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default StepSubmit