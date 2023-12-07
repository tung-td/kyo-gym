import React, { useState } from 'react';
import { collectionService } from '../../service/collectionService';
import Step1 from '../Steps/Step1';
import Step2 from '../Steps/Step2';
import Step3 from '../Steps/Step3';
import Step4 from '../Steps/Step4';
import StepSubmit from '../Steps/StepSubmit';

const Question = () => {
    const [formData, setFormData] = useState({
        activity_level: '',
        age: '',
        gender: '',
        bmi: '',
        training_goals: '',
        training_history: ''
    });

    const [currentStep, setCurrentStep] = useState(1);

    const handleChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value
        }));
    };

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePrevious = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('formData', formData)

        if (Object.values(formData).every(value => value !== '')) {
            try {
                const submitSurveyResponse = await collectionService.postRecommend(formData);
                console.log('submitSurveyResponse', submitSurveyResponse.recommendedCourses);
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log('Please fill out all fields before submitting.');
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <Step1 formData={formData} handleChange={handleChange} handleNext={handleNext} />
                );
            case 2:
                return (
                    <Step2 formData={formData} handleChange={handleChange} handleNext={handleNext} handlePrevious={handlePrevious} />
                );
            case 3:
                return (
                    <Step3 formData={formData} handleChange={handleChange} handleNext={handleNext} handlePrevious={handlePrevious} />
                );
            case 4:
                return (
                    <Step4 formData={formData} handleChange={handleChange} handleNext={handleNext} handlePrevious={handlePrevious} />
                );
            case 5:
                return (
                    <StepSubmit handlePrevious={handlePrevious} />
                );
            default:
                return null;
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {renderStep()}
        </form>
    );
};

export default Question;
