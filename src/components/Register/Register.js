import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import styles from './Register.module.css'
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Register = () => {
    const { user, setUser } = useAuth();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [gender, setGender] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [idCard, setIdCard] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        navigate('/login')
    };

    const defaultTheme = createTheme();

    const handleRegister = async () => {
        try {
            // Chuyển đổi chuỗi 'true'/'false' thành giá trị boolean

            // Kiểm tra mật khẩu và xác nhận mật khẩu
            if (password !== confirmPassword) {
                console.error('Mật khẩu và xác nhận mật khẩu không khớp');
                return;
            }

            const userData = {
                name: name,
                username: username,
                gender: gender,
                dateOfBirth: dateOfBirth,
                address: address,
                phone: phone,
                idCard: idCard,
                email: email,
                password: password
            };

            const response = await axios.post('http://localhost:8080/api/v1/public/signup', userData);

            if (response.status === 200) {
                const token = response.data.token;
                localStorage.setItem('token', token);
                setUser(token);
                navigate('/login');
            } else {
                console.error('Đăng ký không thành công');
            }
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
        }
    };

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [navigate, user]);

    return (
        <div className={styles.myContainer}>
            <div className={styles.myCol}>
                <h1 className={styles.myTitle}>
                    The best offer <br />
                    <span className={styles.text_red}>for your business</span>
                </h1>
                <p className={styles.mySubtitle}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                    quibusdam tempora at cupiditate quis eum maiores libero
                    veritatis? Dicta facilis sint aliquid ipsum atque?
                </p>
            </div>

            <div className={styles.myCard}>
                <div className={styles.myCardBody}>
                    <ThemeProvider theme={defaultTheme}>
                        <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Avatar sx={{ m: 1, bgcolor: 'var(--color-red-body);' }}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Sign up
                                </Typography>
                                <Box component="form" Validate sx={{ mt: 3 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField value={name} onChange={(e) => setName(e.target.value)} fullWidth id="name" label="Full name" />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField value={username} onChange={(e) => setUsername(e.target.value)} fullWidth id="username" label="User name" />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <FormControl fullWidth>
                                                <InputLabel htmlFor="gender">Gender</InputLabel>
                                                <Select
                                                    label="Gender"
                                                    value={gender}
                                                    onChange={(e) => setGender(e.target.value)}
                                                    inputProps={{
                                                        name: 'gender',
                                                        id: 'gender',
                                                    }}
                                                >
                                                    <MenuItem value={true}>Male</MenuItem>
                                                    <MenuItem value={false}>Female</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={8}>
                                            <TextField value={phone} onChange={(e) => setPhone(e.target.value)} fullWidth id="phone" label="Phone number" />
                                        </Grid>
                                        <Grid item xs={12} >
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DemoContainer components={['DatePicker']}>
                                                    <DatePicker
                                                        label="Date"
                                                        value={dateOfBirth}
                                                        onChange={(newDate) => setDateOfBirth(newDate)}
                                                        className={styles.date}
                                                    />
                                                </DemoContainer>
                                            </LocalizationProvider>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField value={idCard} onChange={(e) => setIdCard(e.target.value)} fullWidth id="idCard" label="ID card" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField value={address} onChange={(e) => setAddress(e.target.value)} fullWidth id="address" label="Address" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField value={email} onChange={(e) => setEmail(e.target.value)} fullWidth id="email" label="Email" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField value={password} onChange={(e) => setPassword(e.target.value)} fullWidth id="password" type="password" label="Password" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} fullWidth id="confirmPassword" type="password" label="Confirm Password" />
                                        </Grid>
                                    </Grid>

                                    <Button onClick={handleRegister} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                        Sign Up
                                    </Button>
                                    <Grid container justifyContent="flex-end">
                                        <Grid item>
                                            <Link onClick={handleLogin} variant="body2" className={styles.link}>
                                                Already have an account? Sign in
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Container>
                    </ThemeProvider>
                </div>
            </div>
        </div >
    );
};

export default Register;
