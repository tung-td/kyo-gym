import React, { useEffect, useState } from 'react'
import { Pagination, Box, Stack, Typography } from '@mui/material'
import ExerciseCard from './ExerciseCard';
import db from '../data/db.json'
import back from '../data/back.json'
import cardio from '../data/cardio.json'
import chest from '../data/chest.json'
import arms from '../data/lower arms.json'
import legs from '../data/lower legs.json'
import neck from '../data/neck.json'
import shoulders from '../data/shoulders.json'


const Exercises = ({ exercises, setExercises, bodyPart }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 8;

    const paginate = (event, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 1800, behavior: 'smooth' });
    };

    // Tính toán chỉ số bắt đầu và kết thúc của danh sách hiển thị dựa trên trang hiện tại.
    const startIndex = (currentPage - 1) * exercisesPerPage;
    const endIndex = startIndex + exercisesPerPage;

    // Lấy danh sách bài tập cho trang hiện tại.
    const exercisesToDisplay = exercises.slice(startIndex, endIndex);

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exerciseData = []
            if (bodyPart === 'all') {
                exerciseData = db
            } else {
                // Nếu bodyPart là một giá trị khác, lọc dữ liệu phù hợp từ các tệp JSON tương ứng
                switch (bodyPart) {
                    case 'back':
                        exerciseData = back;
                        break;
                    case 'cardio':
                        exerciseData = cardio;
                        break;
                    case 'chest':
                        exerciseData = chest;
                        break;
                    case 'arms':
                        exerciseData = arms;
                        break;
                    case 'legs':
                        exerciseData = legs;
                        break;
                    case 'neck':
                        exerciseData = neck;
                        break;
                    case 'shoulders':
                        exerciseData = shoulders;
                        break;
                    default:
                        break;
                }
            }
            setExercises(exerciseData)
        }

        fetchExercisesData();
    }, [bodyPart])

    return (
        <Box
            id="exercises"
            sx={{ mt: { lg: '110px' } }}
            mt="50px"
            p="20px"
        >
            <Typography variant='h3' mb='30px' >
                Showing results
            </Typography>
            <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px' } }}
                flexWrap='wrap' justifyContent='center'>
                {exercisesToDisplay?.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise} />
                ))}
            </Stack>
            <Stack alignItems='center'>
                {exercises.length > exercisesPerPage && (
                    <Pagination
                        color='standard'
                        shape='rounded'
                        defaultPage={1}
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size='large'
                    />
                )}
            </Stack>
        </Box>
    );
}

export default Exercises