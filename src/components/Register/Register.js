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
    const [isUser, setIsUser] = useState(false);

    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');

    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');

    const [gender, setGender] = useState('');

    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const [dateOfBirth, setDateOfBirth] = useState(null);

    const [idCard, setIdCard] = useState('');
    const [idCardError, setIdCardError] = useState('');

    const [address, setAddress] = useState('');
    const [addressError, setAddressError] = useState('');

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const navigate = useNavigate();

    const handleLogin = async () => {
        navigate('/login')
    };

    const defaultTheme = createTheme();

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);

        if (value.length < 3 || value.length > 50) {
            setNameError('Họ tên phải có độ dài từ 3 đến 50 ký tự');
        } else if (!/^[a-zA-ZÀ-Ỹà-ỹ ]+$/.test(value)) {
            setNameError('Họ tên không được chứa ký tự đặc biệt hoặc số');
        } else {
            setNameError('');
        }
    };

    const handleUsernameChange = (e) => { // THÊM ĐIỀU KIỆN KO TRÙNG
        const value = e.target.value;
        setUsername(value);

        if (value.length < 3 || value.length > 50) {
            setUsernameError('Họ tên phải có độ dài từ 3 đến 50 ký tự');
        } else {
            setUsernameError('');
        }
    };

    const handlePhoneNumberChange = (e) => {
        const value = e.target.value;
        setPhone(value);

        if (!/^\d+$/.test(value)) {
            setPhoneError('Vui lòng chỉ nhập số');
        } else if (value.length !== 10) {
            setPhoneError('Number phải chứa 10 số')
        } else {
            const prefixes = /^(086|096|097|098|038|037|036|035|034|033|032|091|094|088|081|082|083|084|085|070|076|077|078|079|089|090|093|092|052|056|058|099|059|087)/;
            if (!prefixes.test(value.substr(0, 3))) {
                setPhoneError('Số điện thoại không hợp lệ, vui lòng kiểm tra lại tiền tố');
            } else {
                setPhoneError('');
            }
        }
    }

    const handleIdCardChange = (e) => {
        const value = e.target.value;
        setIdCard(value);

        if (!/^\d+$/.test(value)) {
            setIdCardError('Vui lòng chỉ nhập số');
        } else if (value.length !== 12) {
            setIdCardError('Vui lòng nhập đủ 12 số');
        } else if (!/^(001|002|004|006|008|010|011|012|014|015|017|019|020|022|024|025|026|027|030|031|033|034|035|036|037|038|040|042|044|045|046|048|049|051|052|054|056|058|060|062|064|066|067|068|070|072|074|075|077|079|080|082|083|084|086|087|089|091|092|093|094|095|096)([0-9])(00|0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9])([0-9]{6})$/.test(value)) {
            setIdCardError('Số căn cước công dân không hợp lệ');
        } else {
            setIdCardError('');
        }
    }

    const handleAddressChange = (e) => {
        const value = e.target.value;
        setAddress(value)

        if (value.length < 5) {
            setAddressError('Địa chỉ ngắn quá (< 5 ký tự)')
        } else if (value.length > 100) {
            setAddressError('Địa chỉ dài quá (> 100 ký tự)')
        } else {
            setAddressError('')
        }
    }

    const handleEmailChange = (e) => { // THEM KIEM TRA TRUNG TAI KHOAN EMAIL
        const value = e.target.value;
        setEmail(value)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(value)) {
            setEmailError('Email không đúng định dạng')
        } else if (value.length > 30) {
            setEmailError('Email qua dai (> 30 ký tự)')
        } else {
            setEmailError('')
        }
    }

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value)

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(value)) {
            setPasswordError('Password chưa đủ mạnh. Yêu cầu ít nhất 8 ký tự, chứa ít nhất một chữ cái và một chữ số.');
        } else {
            setPasswordError('');
        }
    }

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);

        if (value !== password) {
            setConfirmPasswordError('Confirm password không trùng khớp')
        } else {
            setConfirmPasswordError('')
        }
    }

    const handleRegister = async (e) => {
        try {
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
            console.log('userData', userData);
            if (response.status === 200) {
                // navigate('/login');
            } else {
                console.error('Đăng ký không thành công');
            }
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
        }
    };

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
                                <Box component="form" Validate sx={{ mt: 3 }} onSubmit={handleRegister}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                value={name}
                                                onChange={handleNameChange}
                                                fullWidth
                                                id="name"
                                                label="Full name"
                                                required
                                                error={!!nameError}
                                                helperText={nameError}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                value={username}
                                                onChange={handleUsernameChange}
                                                fullWidth
                                                id="username"
                                                label="User name"
                                                required
                                                error={!!usernameError}
                                                helperText={usernameError}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <FormControl fullWidth required>
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
                                            <TextField
                                                value={phone}
                                                onChange={handlePhoneNumberChange}
                                                fullWidth
                                                id="phone"
                                                label="Phone number"
                                                required
                                                error={!!phoneError}
                                                helperText={phoneError}
                                            />
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
                                            <TextField
                                                value={idCard}
                                                onChange={handleIdCardChange}
                                                fullWidth
                                                id="idCard"
                                                label="ID card"
                                                required
                                                error={!!idCardError}
                                                helperText={idCardError}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                value={address}
                                                onChange={handleAddressChange}
                                                fullWidth
                                                id="address"
                                                label="Address"
                                                required
                                                error={!!addressError}
                                                helperText={addressError}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                value={email}
                                                onChange={handleEmailChange}
                                                fullWidth
                                                id="email"
                                                label="Email"
                                                required
                                                error={!!emailError}
                                                helperText={emailError}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                value={password}
                                                onChange={handlePasswordChange}
                                                fullWidth
                                                id="password"
                                                type="password"
                                                label="Password"
                                                required
                                                error={!!passwordError}
                                                helperText={passwordError}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                value={confirmPassword}
                                                onChange={handleConfirmPasswordChange}
                                                fullWidth
                                                id="confirmPassword"
                                                type="password"
                                                label="Confirm Password"
                                                required
                                                error={!!confirmPasswordError}
                                                helperText={confirmPasswordError}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleRegister}>
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
