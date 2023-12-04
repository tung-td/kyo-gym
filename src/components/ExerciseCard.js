import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const ExerciseCard = ({ exercise }) => {
    return (
        // <Link
        //     sx={{ textDecoration: 'none' }}
        //     className='exercise-card' to={`/exercise/${exercise.id}`}>
        //     <img src={exercise.videoUrl} alt={exercise.name} loading='lazy' />
        //     <Stack>
        //         <Typography>
        //             Body part:
        //             <Button
        //                 sx={{ ml: '21px', color: '#000', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize', textDecoration: 'none' }}
        //             >
        //                 {exercise.bodyPart}
        //             </Button>
        //         </Typography>

        //         <Typography>
        //             Target muscle:
        //             <Button
        //                 sx={{ ml: '21px', color: '#000', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize', textDecoration: 'none' }}
        //             >
        //                 {exercise.target}
        //             </Button>
        //         </Typography>

        //         <Typography sx={{ ml: '21px', color: '#000', fontWeight: 'bold', mt: '10px', pb: '10px', textTransform: 'uppercase' }}>
        //             {exercise.name}
        //         </Typography>
        //     </Stack>
        // </Link>
    )
}

export default ExerciseCard