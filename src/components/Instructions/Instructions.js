import React from 'react';
import styles from './Instructions.module.css';

const Instructions = ({ exersise }) => {

    // Nhầm giữa des vs instruc
    const separatedInstructions = exersise && exersise.exerciseDescription ? exersise.exerciseDescription.split('.').filter(sentence => sentence.trim() !== '') : [];


    return (
        <div className={styles.tab_info}>
            <div>
                <img src={exersise.gifUrl} alt={exersise.name} />
            </div>
            <div>
                <p><span className={styles.video_author}>Body target: </span><span>{exersise.target}</span></p>
                <p><span className={styles.video_author}>Body part: </span><span>{exersise.bodyPart}</span></p>
                <p><span className={styles.video_author}>Equipment: </span><span>{exersise.equipment}</span></p>
                <p>How you can do that:</p>
                <ol>
                    {separatedInstructions?.map((sentence, index) => (
                        <li key={index}>{sentence.trim()}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default Instructions;
