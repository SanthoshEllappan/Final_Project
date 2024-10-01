import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AuthUser } from '../AuthRouter';
import { useNavigate } from 'react-router-dom';
import {
    Button,
    CssBaseline,
    TextField,
    Link,
    Grid,
    Box,
    Typography,
    Container,
    createTheme,
    ThemeProvider,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const theme = createTheme();

// Styles
const useStyles = makeStyles((theme) => ({
    section: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },
    form: {
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
    },
    img: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '8px',
    },
    button: {
        backgroundColor: '#87A2FF', // Change to dark violet
        color: '#fff',
        '&:hover': {
            backgroundColor: '#4F75FF', // Darker shade for hover effect
        },
    },
    footer: {
        backgroundColor: '',
        color: 'white',
        textAlign: 'center',
        padding: '1rem 0',
        marginTop: 'auto',
    },
    errorButton: {
        backgroundColor: 'red',
        color: 'white',
        marginTop: '20px',
    },
}));

export default function AdminSignIn() {
    const classes = useStyles();
    let auth = AuthUser();
    let navigate = useNavigate();

    const initialUser = { email: '', password: '' };
    const [user, setUser] = useState(initialUser);
    const [isSubmit, setIsSubmit] = useState(false);
    const [formError, setFormError] = useState({});

    useEffect(() => {
        if (Object.keys(formError).length === 0 && isSubmit) {
            console.log('data sending');
        }
    }, [formError, isSubmit]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmit(true);
        setFormError(validate(user));

        if (Object.keys(formError).length === 0) {
            const { data } = await axios.post('http://127.0.0.1:8080/admin/login', user);

            if (data?.status === 201) {
                auth.adminLogin(data);
                navigate('/admin', { replace: true });
            } else {
                setFormError({ error: data.message });
            }
        }
    };

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const validate = (value) => {
        const error = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!value.email) {
            error.email = 'Email is required';
        } else if (!regex.test(value.email)) {
            error.email = 'Invalid email format';
        }
        if (!value.password) {
            error.password = 'Password is required';
        } else if (value.password.length < 5) {
            error.password = 'Password must be more than 4 characters';
        } else if (value.password.length > 10) {
            error.password = 'Password must be within 10 characters';
        }

        return error;
    };

    return (
        <ThemeProvider theme={theme}>
            <section className={classes.section}>
                <Container className={classes.container}>
                    <Grid container spacing={2}>
                        <Grid item md={6} className="d-flex justify-content-center align-items-center">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                alt="Sample"
                                className={classes.img}
                            />
                        </Grid>
                        <Grid item md={6}>
                            <form onSubmit={handleSubmit} className={classes.form}>
                                <h1 style={{ textAlign: 'center', color: '#87A2FF' }} className="mb-4">
                                    ADMIN SIGN IN
                                </h1>

                                <TextField
                                    error={!!formError.email}
                                    helperText={formError.email || ''}
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={handleChange}
                                    autoFocus
                                />
                                <TextField
                                    error={!!formError.password}
                                    helperText={formError.password || ''}
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    onChange={handleChange}
                                    autoComplete="current-password"
                                />

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    className={classes.button}
                                >
                                    Sign In
                                </Button>

                                {formError.error && (
                                    <Button
                                        type="button"
                                        fullWidth
                                        variant="contained"
                                        className={classes.errorButton}
                                    >
                                        {formError.error}
                                    </Button>
                                )}
                            </form>
                        </Grid>
                    </Grid>
                </Container>
                <footer className={classes.footer}>
                    Copyright © 2024. All rights reserved.
                </footer>
            </section>
        </ThemeProvider>
    );
}
