import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../../AuthContext'
import styles from './UserInformation.module.css'
import { Container, Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import banner from '../../images/user_banner.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFolder } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faLocationDot, faChartLine, faClockRotateLeft, faDumbbell, faVenusMars, faCakeCandles, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { request } from '../../utils/axiosInstance';
import ChartCircle from '../ChartCircle/ChartCircle'
import ChartLine from '../ChartLine/ChartLine';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useNavigate } from 'react-router-dom';


const UserInformation = () => {
    const { user } = useAuth();
    const [userData, setUserData] = useState([]);

    const [recommendedCourse, setRecommendedCourse] = useState('')
    const [lengthCourse, setLengthCourse] = useState(0)

    const theme = useTheme();
    const navigate = useNavigate();


    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await request.get('/customer/detail')
                setUserData(res)
                setRecommendedCourse(res.recommendedCourses.find(course => course.recommendedStatus === true))
                setLengthCourse(res.recommendedCourses.length)
            } catch (error) {
                console.log("Error fetching user information", error);
            }
        }

        if (user) {
            fetchUserData();
        }
    }, [user])

    return (
        <div className={styles.container}>
            <Container component="main" maxWidth="100%">
                <Grid container spacing={2}>
                    <Grid item xs={9}>
                        <Container component="main" maxWidth="100%" className={styles.grid_container}>
                            <Grid container spacing={2} className={styles.grid_container}>
                                <Grid item xs={12}>
                                    <Card className={styles.banner}>
                                        <CardActionArea>
                                            <CardMedia
                                                className={styles.img_cover}
                                                component="img"
                                                height="185"
                                                image={banner || ''}
                                                alt="banner"
                                            />
                                        </CardActionArea>
                                        <CardContent className={styles.under_banner}>
                                            <CardMedia
                                                className={styles.img_ava}
                                                component="img"
                                                image={userData.customerImg || ''}
                                                height='auto'
                                                alt="avatar"
                                            />
                                            <Typography variant="h5" component="div" className={styles.customer_name}>
                                                {userData.customerName || ''}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={3}>
                                    <Card className={styles.card_tracking}>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div" className={styles.card_tracking_title}>
                                                    Weekly Activity
                                                </Typography>
                                                <div variant="body2" className={styles.card_tracking_data_icon}>
                                                    <p className={styles.card_tracking_data}>35%</p>
                                                    <div className={styles.card_tracking_icon_bg}><FontAwesomeIcon icon={faChartLine} className={styles.card_tracking_icon} /></div>
                                                </div>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item xs={3}>
                                    <Card className={styles.card_tracking}>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div" className={styles.card_tracking_title}>
                                                    Worked This Week
                                                </Typography>
                                                <div variant="body2" className={styles.card_tracking_data_icon}>
                                                    <p className={styles.card_tracking_data}>40:00:05</p>
                                                    <div className={styles.card_tracking_icon_bg}><FontAwesomeIcon icon={faClockRotateLeft} className={styles.card_tracking_icon} /></div>
                                                </div>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item xs={3}>
                                    <Card className={styles.card_tracking}>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div" className={styles.card_tracking_title}>
                                                    Course In Progress
                                                </Typography>
                                                <div variant="body2" className={styles.card_tracking_data_icon}>
                                                    <p className={styles.card_tracking_data}>{lengthCourse}</p>
                                                    <div className={styles.card_tracking_icon_bg}><FontAwesomeIcon icon={faFolder} className={styles.card_tracking_icon} /></div>
                                                </div>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item xs={3}>
                                    <Card className={styles.card_tracking}>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div" className={styles.card_tracking_title}>
                                                    BMI
                                                </Typography>
                                                <div variant="body2" className={styles.card_tracking_data_icon}>
                                                    <p className={styles.card_tracking_data}>{recommendedCourse?.bmi || 0}</p>
                                                    <div className={styles.card_tracking_icon_bg}><FontAwesomeIcon icon={faDumbbell} className={styles.card_tracking_icon} /></div>
                                                </div>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item xs={9}>
                                    <ChartLine />
                                </Grid>
                                <Grid item xs={3}>
                                    <ChartCircle />
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                    <Grid item xs={3} >
                        <Container component="main" maxWidth="100%" className={styles.grid_container}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Card className={styles.information}>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" className={styles.info_title}>
                                                Information
                                            </Typography>
                                            <div variant="body2" style={{ display: 'flex', marginTop: '5px' }}>
                                                <FontAwesomeIcon icon={faEnvelope} className={styles.info_title_icon} /> <br />
                                                <div component="div" variant="body2">
                                                    <h2 className={styles.info_title_tag}>Email</h2>
                                                    <h1 className={styles.info_title_item}>{userData.accountEmail || ''}</h1>
                                                </div>
                                            </div>
                                            <div variant="body2" style={{ display: 'flex', marginTop: '5px' }}>
                                                <FontAwesomeIcon icon={faPhone} className={styles.info_title_icon} /> <br />
                                                <div component="div" variant="body2">
                                                    <h2 className={styles.info_title_tag}>Phone</h2>
                                                    <h1 className={styles.info_title_item}>{userData.customerPhone || ''}</h1>
                                                </div>
                                            </div>
                                            <div variant="body2" style={{ display: 'flex', marginTop: '5px' }}>
                                                <FontAwesomeIcon icon={faLocationDot} className={styles.info_title_icon} /> <br />
                                                <div component="div" variant="body2">
                                                    <h2 className={styles.info_title_tag}>Location</h2>
                                                    <h1 className={styles.info_title_item}>{userData.customerAddress || ''}</h1>
                                                </div>
                                            </div>

                                            <Typography gutterBottom variant="h5" component="div" className={styles.info_title}>
                                                Biography
                                            </Typography>
                                            <div variant="body2" style={{ display: 'flex', marginTop: '5px' }}>
                                                <FontAwesomeIcon icon={faVenusMars} className={styles.info_title_icon} /> <br />
                                                <div component="div" variant="body2">
                                                    <h2 className={styles.info_title_tag}>Gender</h2>
                                                    <h1 className={styles.info_title_item}>{userData.customerGender ? 'Male' : 'Female' || ''}</h1>
                                                </div>
                                            </div>
                                            <div variant="body2" style={{ display: 'flex', marginTop: '5px' }}>
                                                <FontAwesomeIcon icon={faCakeCandles} className={styles.info_title_icon} /> <br />
                                                <div component="div" variant="body2">
                                                    <h2 className={styles.info_title_tag}>Date of birth</h2>
                                                    <h1 className={styles.info_title_item}>{userData.dateOfBirth || ''}</h1>
                                                </div>
                                            </div>
                                            <div variant="body2" style={{ display: 'flex', marginTop: '5px' }}>
                                                <FontAwesomeIcon icon={faUserGroup} className={styles.info_title_icon} /> <br />
                                                <div component="div" variant="body2">
                                                    <h2 className={styles.info_title_tag}>Type account</h2>
                                                    <h1 className={styles.info_title_item}>{userData.customerTypeName || ''}</h1>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className={styles.chart}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DateCalendar />
                                        </LocalizationProvider>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                    <Grid item xs={6}>
                        <Card sx={{ display: 'flex' }} className={styles.grid_container}>
                            {recommendedCourse && (
                                <>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography component="div" variant="h5">
                                                {recommendedCourse.courseName}
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                                {recommendedCourse.courseTypeName}
                                            </Typography>
                                        </CardContent>
                                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                            <IconButton aria-label="previous">
                                                {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                                            </IconButton>
                                            <IconButton aria-label="play/pause" onClick={() => navigate(`/collections/${recommendedCourse.courseId}/days/1`)}>
                                                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                                            </IconButton>
                                            <IconButton aria-label="next">
                                                {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                                            </IconButton>
                                        </Box>
                                    </Box>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 392 }}
                                        image={recommendedCourse.image}
                                        alt="Live from space album cover"
                                    />
                                </>
                            )}
                        </Card>
                        <Container component="main" maxWidth="100%" className={styles.grid_container}>

                        </Container>
                    </Grid>
                    <Grid item xs={6}>

                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default UserInformation