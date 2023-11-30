import React from 'react'
import { Stack, Typography } from '@mui/material'
import icon from "../images/review_avt.png"

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className='bodyPart-card'
            sx={{
                borderTop: bodyPart === item ? '4px solid #ff2625' : '',
                backgroundColor: '#ccc',
                width: '250px',
                height: '260px',
                cursor: 'pointer',
                gap: '47px'
            }}
            onClick={() => {
                setBodyPart(item)
                window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
            }}
        >
            <img src={icon} alt='slider' style={{ width: '50px', height: '50px' }}></img>
            <Typography fontSize="24px" fontWeight="bold">{item}</Typography>
        </Stack >
    )
}

export default BodyPart