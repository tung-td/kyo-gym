import React, { useState } from 'react'
import styles from './Step2.module.css'

import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

const Step2 = ({ formData, handleChange, handleNext, handlePrevious }) => {
    const [height, setHeight] = useState('');
    const [heightError, setHeightError] = useState('');
    const [weight, setWeight] = useState('');
    const [weightError, setWeightError] = useState('');
    const [age, setAge] = useState('');
    const [ageError, setAgeError] = useState('');
    const [gender, setGender] = useState('');
    const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);

    const handleHeightChange = (e) => {
        const value = e.target.value;
        setHeight(value)

        if (value < 150 || value > 170) {
            setHeightError('Range from 150 -> 170cm')
        } else {
            setHeightError('')
        }

        updateNextButtonState();
    }

    const handleWeightChange = (e) => {
        const value = e.target.value;
        setWeight(value)

        if (value < 40 || value > 60) {
            setWeightError('Range from 40 -> 60kg')
        } else {
            setWeightError('')
        }

        updateNextButtonState();
    }

    const handleAgeChange = (e) => {
        const value = e.target.value;
        setAge(value)

        if (value < 18 || value > 30) {
            setAgeError('Range from 18 -> 30 years old')
        } else {
            setAgeError('')
        }

        updateNextButtonState();
    }

    const updateNextButtonState = () => {
        if (gender !== '' && age !== '' && height !== '' && weight !== '') {
            setIsNextButtonDisabled(false)
        }
    };

    const showOut = () => {
        const heightValue = parseFloat(height) / 100;
        const weightValue = parseFloat(weight);

        if (heightValue > 0 && weightValue > 0 && !isNaN(heightValue) && !isNaN(weightValue)) {
            const bmiValue = (weightValue / (heightValue * heightValue)).toFixed(0);
            handleChange({
                target: {
                    name: 'bmi',
                    value: bmiValue,
                },
            });
        } else {
            console.log('Invalid height or weight values');
        }
        handleChange({
            target: {
                name: 'age',
                value: age,
            },
        });
        handleChange({
            target: {
                name: 'gender',
                value: gender,
            },
        });
        handleNext();
    };

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
                    <div className={styles.lineStepNon}></div>
                    <div className={styles.stepCircle}>
                        <p className={styles.stepNumberNon}>3</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <circle cx="17.3809" cy="17.3235" r="17" fill="#EFF0F7" />
                        </svg>
                    </div>
                    <div className={styles.lineStepNon}></div>
                    <div className={styles.stepCircle}>
                        <p className={styles.stepNumberNon}>4</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <circle cx="17.3809" cy="17.3235" r="17" fill="#EFF0F7" />
                        </svg>
                    </div>
                </div>
                <div className={styles.line}></div>
                <h4>Okay, Next fill in your body index</h4>
                <div className={styles.gridCard}>
                    <TextField
                        type='number'
                        label="Age"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        name="age"
                        value={age}
                        onChange={handleAgeChange}
                        color='error'
                        error={!!ageError}
                        helperText={ageError}
                        required
                        InputProps={{
                            endAdornment: <InputAdornment position="end"></InputAdornment>,
                        }}
                    />
                    <FormControl sx={{ m: 1, width: '25ch' }}>
                        <InputLabel id="demo-simple-select-label" color='error'>Gender</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={gender}
                            label="gender"
                            color='error'
                            required
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <MenuItem value='Male'>Male</MenuItem>
                            <MenuItem value='Female' disabled>Female</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        type='number'
                        label="Height"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        name="height"
                        value={height}
                        color='error'
                        onChange={handleHeightChange}
                        error={!!heightError}
                        helperText={heightError}
                        required
                        InputProps={{
                            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                        }}
                    />
                    <TextField
                        type='number'
                        label="Weight"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        name="weight"
                        value={weight}
                        color='error'
                        onChange={handleWeightChange}
                        error={!!weightError}
                        helperText={weightError}
                        required
                        InputProps={{
                            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                        }}
                    />
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
                    <Button
                        variant="contained"
                        onClick={showOut}
                        sx={{ marginTop: 10, borderRadius: 55, color: '#fff', backgroundColor: '#CF4044' }}
                        color="error"
                        disabled={isNextButtonDisabled}
                    >
                        Next step
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Step2