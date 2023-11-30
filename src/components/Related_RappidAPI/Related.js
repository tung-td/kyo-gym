import React, { useState } from "react";
// import styles from "./Related.module.css"
import Exercises from "../Exercises";
import SearchExercises from "../SearchExercises";

const Related = () => {
    const [exercises, setExercises] = useState([])
    const [bodyPart, setBodyPart] = useState('all')

    return (
        <div>
            <SearchExercises
                setExercises={setExercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
            />
            <Exercises
                exercises={exercises}
                setExercises={setExercises}
                bodyPart={bodyPart}
            />
        </div>
    )
}

export default Related