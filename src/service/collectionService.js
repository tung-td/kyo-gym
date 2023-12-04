import { request } from '../utils/axiosInstance';
// GET FULL COURSE
export const getCards = async () => {
    const res = await request.get('/course');
    return res;
};

// GET DETAIL OF A COURSE -> JUST GET DAYS IN COMPONENT
export const getDays = async (days) => {
    try {
        const res = await request.get(`/course/${days}`);
        return res;
    } catch (error) {
        console.error('Error fetching days:', error);
        throw error;
    }
};

// GET FULL EXERCISES
export const getExercise = async () => {
    try {
        const res = await request.get(`/exercise`);
        return res;
    } catch (error) {
        console.error('Error fetching full exercises:', error);
        throw error;
    }
};

// GET EXERCISES OF DAYS IN A COURSE
export const getDetailDay = async (courseId, dayId) => {
    try {
        const res = await request.get(`/course/${courseId}/day/${dayId}/exercise`);
        return res;
    } catch (error) {
        console.error('Error fetching exercises:', error);
        throw error;
    }
};

// GET COMMENT OF EXERCISES IN A DAY
export const getComment = async (courseId, dayId) => {
    try {
        const res = await request.get(`/course/${courseId}/day/${dayId}/comment`);
        return res;
    } catch (error) {
        console.log('Error fetching comments', error);
        throw error;
    }
}

// GET COMMENT OF EXERCISES IN A DAY
export const postComment = async (data) => {
    try {
        const res = await request.post(`/comment/create`, data);
        return res;
    } catch (error) {
        console.log('Error fetching comments', error);
        throw error;
    }
}

export * as collectionService from './collectionService';
