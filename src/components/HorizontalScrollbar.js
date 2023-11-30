import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import BodyPart from './BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()}>
            <FontAwesomeIcon icon={faArrowLeft} />
        </Typography>
    );
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()}>
            <FontAwesomeIcon icon={faArrowRight} />
        </Typography>
    );
}

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {

    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {data?.map((item) => (
                <Box
                    key={item.id || item}
                    itemId={item.id || item}
                    title={item.id || item}
                    m="0 40px"
                >
                    <BodyPart
                        item={item}
                        bodyPart={bodyPart}
                        setBodyPart={setBodyPart}
                    />
                </Box>
            ))}
        </ScrollMenu>
    )
}

export default HorizontalScrollbar