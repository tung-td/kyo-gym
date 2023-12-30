import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import { ThemeProvider, Container, CssBaseline, Box, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button, Grid, Link, createTheme } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const Login = () => {
    const { user, setUser } = useAuth();
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const defaultTheme = createTheme();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/v1/public/login', {
                username: username,
                password: password
            });

            if (response.status === 200) {
                const token = response.data.token;
                localStorage.setItem('token', token);
                setUser(token);
                navigate('/');
            } else {
                setUsernameError('Username không hợp lệ')
                setPasswordError('Password không hợp lệ')
                console.error('Đăng nhập không thành công');
            }
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
        }
    };

    const handleNavigateToRegister = () => {
        navigate('/register');
    };

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [navigate, user]);

    const handleGoogleLoginSuccess = async (response) => {
        try {
            // Send the Google OAuth token to your server
            const googleToken = response.credential;
            const googleResponse = await axios.post('http://localhost:8080/api/v1/public/oauth/google', {
                token: googleToken,
            });

            if (googleResponse.status === 200) {
                const token = googleResponse.data.token;
                localStorage.setItem('token', token);
                setUser(token);
                navigate('/');
            } else {
                console.error('Google login not successful');
            }
        } catch (error) {
            console.error('Error during Google login:', error);
        }
    };

    const handleGoogleLoginFailure = (error) => {
        console.error('Google login failed:', error);
    };

    return (
        <div>
            <div className={styles.myContainer}>
                <div className={styles.myCol}>
                    <h1 className={styles.myTitle}>
                        Unleash Your Potential<br />
                        <span className={styles.text_red}>with Fitness AI</span>
                    </h1>
                    <p className={styles.mySubtitle}>
                        Discover the future of fitness with our AI-powered platform.
                        Personalized workouts, smart nutrition, and innovative solutions await you.
                        Embark on a journey to a healthier, stronger you – where technology meets transformation.
                        Your fitness evolution starts here.
                    </p>
                </div>
                <div className={styles.myCard}>
                    <div className={styles.myCardBody}>
                        <ThemeProvider theme={defaultTheme}>
                            <Container component="main" maxWidth="xs">
                                <CssBaseline />
                                <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Avatar sx={{ m: 1, bgcolor: 'var(--color-red-body)' }}>
                                        <LockOutlinedIcon />
                                    </Avatar>
                                    <Typography component="h1" variant="h5">
                                        Sign in
                                    </Typography>
                                    <Box component="form" Validate sx={{ mt: 1 }} onSubmit={handleLogin}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            name="email"
                                            label="Email Address"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            autoFocus
                                            error={!!usernameError}
                                            helperText={usernameError}
                                        />
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="password"
                                            name="password"
                                            label="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            type="password"
                                            autoComplete="current-password"
                                            error={!!passwordError}
                                            helperText={passwordError}
                                        />
                                        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                            Sign In
                                        </Button>
                                        <Grid container>
                                            <Grid item xs>
                                                <Link onClick={handleNavigateToRegister} className={styles.link} variant="body2">
                                                    Forgot password?
                                                </Link>
                                            </Grid>
                                            <Grid item>
                                                <Link onClick={handleNavigateToRegister} className={styles.link} variant="body2">
                                                    {"Don't have an account? Sign Up"}
                                                </Link>
                                            </Grid>
                                            <Grid>
                                                <GoogleOAuthProvider clientId="407042400394-382jp0sktf2dn0eqjg4m9c2ujkc4lgqq.apps.googleusercontent.com">
                                                    <GoogleLogin
                                                        onSuccess={handleGoogleLoginSuccess}
                                                        onFailure={handleGoogleLoginFailure}
                                                        cookiePolicy={'single_host_origin'}
                                                        useOneTap
                                                    />
                                                </GoogleOAuthProvider>

                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Container>
                        </ThemeProvider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
