import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Select,
    Typography,
    useMediaQuery,
    MenuItem,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import Google from 'assets/images/icons/social-google.svg';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// ===========================|| FIREBASE - REGISTER ||=========================== //

const FirebaseRegister = ({ ...others }) => {
    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const customization = useSelector((state) => state.customization);
    const [showPassword, setShowPassword] = useState(false);
    const [checked, setChecked] = useState(true);

    const [strength, setStrength] = useState(0);
    const [level, setLevel] = useState();

    const googleHandler = async () => {
        console.error('Register');
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const changePassword = (value) => {
        const temp = strengthIndicator(value);
        setStrength(temp);
        setLevel(strengthColor(temp));
    };

    useEffect(() => {
        changePassword('123456');
    }, []);

    const [open, setOpen] = React.useState(false);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(Number(event.target.value) || '');
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    };
    const labele = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    password: Yup.string().max(255).required('Password is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        if (scriptedRef.current) {
                            setStatus({ success: true });
                            setSubmitting(false);
                        }
                    } catch (err) {
                        console.error(err);
                        if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} {...others}>
                        <Grid container spacing={matchDownSM ? 0 : 2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Full Name"
                                    margin="normal"
                                    name="fname"
                                    type="text"
                                    defaultValue=""
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Username"
                                    margin="normal"
                                    name="lname"
                                    type="text"
                                    defaultValue=""
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-email-register">Email Address</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-email-register"
                                type="email"
                                value={values.email}
                                name="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                inputProps={{}}
                            />
                            {touched.email && errors.email && (
                                <FormHelperText error id="standard-weight-helper-text--register">
                                    {errors.email}
                                </FormHelperText>
                            )}
                        </FormControl>

                        <Grid container spacing={matchDownSM ? 0 : 2}>
                            <Grid item xs={8} sm={8} paddingRight={1}>
                                <Select
                                    fullWidth
                                    margin="normal"
                                    name="fname"
                                    type="text"
                                    placeholder="select"
                                    defaultValue={0}
                                    sx={{ ...theme.typography.customInput }}
                                >
                                    <MenuItem value={0}>
                                        <div style={{ color: 'grey' }}> select your institution</div>
                                    </MenuItem>
                                    <MenuItem value={10}>University of portHarcourt</MenuItem>
                                    <MenuItem value={20}>River state university</MenuItem>
                                    <MenuItem value={30}>Madonna University</MenuItem>
                                    <MenuItem value={30}>PAMO University</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <Select
                                    fullWidth
                                    margin="normal"
                                    name="fname"
                                    type="text"
                                    placeholder="select"
                                    defaultValue={0}
                                    sx={{ ...theme.typography.customInput }}
                                >
                                    <MenuItem value={0}>
                                        <div style={{ color: 'grey' }}>level</div>
                                    </MenuItem>
                                    <MenuItem value={10}>200</MenuItem>
                                    <MenuItem value={20}>300</MenuItem>
                                    <MenuItem value={30}>400</MenuItem>
                                    <MenuItem value={30}>500</MenuItem>
                                    <MenuItem value={30}>600</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>

                        <FormControl fullWidth>
                            <Button
                                onClick={handleClickOpen}
                                style={{
                                    border: '0.2px solid blue',
                                    borderRadius: '5px',
                                    paddingTop: '10px',
                                    paddingBottom: '10px',
                                    marginTop: '5px',
                                    marginBottom: '5px'
                                }}
                            >
                                select courses you offer
                            </Button>
                            <Dialog fullWidth disableEscapeKeyDown open={open} onClose={handleClose}>
                                <DialogTitle>Select courses of your choice</DialogTitle>
                                <DialogContent>
                                    <Grid container>
                                        <Grid item xs={6} sm={3}>
                                            <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                                <FormControl
                                                    sx={{
                                                        m: 1,
                                                        minWidth: 120,
                                                        border: '1px solid black',
                                                        borderRadius: '10px',
                                                        padding: '10px'
                                                    }}
                                                >
                                                    <span>Pharmacology</span>
                                                    <Checkbox {...labele} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                                                </FormControl>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} sm={3}>
                                            <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                                <FormControl
                                                    sx={{
                                                        m: 1,
                                                        minWidth: 120,
                                                        border: '1px solid black',
                                                        borderRadius: '10px',
                                                        padding: '10px'
                                                    }}
                                                >
                                                    <span>Anatomy</span>
                                                    <Checkbox {...labele} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                                                </FormControl>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} sm={3}>
                                            <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                                <FormControl
                                                    sx={{
                                                        m: 1,
                                                        minWidth: 120,
                                                        border: '1px solid black',
                                                        borderRadius: '10px',
                                                        padding: '10px'
                                                    }}
                                                >
                                                    <span>Medical Microbiology</span>
                                                    <Checkbox {...labele} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                                                </FormControl>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} sm={3}>
                                            <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                                <FormControl
                                                    sx={{
                                                        m: 1,
                                                        minWidth: 120,
                                                        border: '1px solid black',
                                                        borderRadius: '10px',
                                                        padding: '10px'
                                                    }}
                                                >
                                                    <span>Anatomical Pathology</span>
                                                    <Checkbox {...labele} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                                                </FormControl>
                                            </Box>
                                        </Grid>

                                        <Grid item xs={6} sm={3}>
                                            <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                                <FormControl
                                                    sx={{
                                                        m: 1,
                                                        minWidth: 120,
                                                        border: '1px solid black',
                                                        borderRadius: '10px',
                                                        padding: '10px'
                                                    }}
                                                >
                                                    <span>Biochemistry</span>
                                                    <Checkbox {...labele} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                                                </FormControl>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} sm={3}>
                                            <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                                <FormControl
                                                    sx={{
                                                        m: 1,
                                                        minWidth: 120,
                                                        border: '1px solid black',
                                                        borderRadius: '10px',
                                                        padding: '10px'
                                                    }}
                                                >
                                                    <span>Chemical Pathology</span>
                                                    <Checkbox {...labele} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                                                </FormControl>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} sm={3}>
                                            <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                                <FormControl
                                                    sx={{
                                                        m: 1,
                                                        minWidth: 120,
                                                        border: '1px solid black',
                                                        borderRadius: '10px',
                                                        padding: '10px'
                                                    }}
                                                >
                                                    <span>Physiology</span>
                                                    <Checkbox {...labele} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                                                </FormControl>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} sm={3}>
                                            <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                                <FormControl
                                                    sx={{
                                                        m: 1,
                                                        minWidth: 120,
                                                        border: '1px solid black',
                                                        borderRadius: '10px',
                                                        padding: '5px'
                                                    }}
                                                >
                                                    <span>Haematology and immunology</span>
                                                    <Checkbox {...labele} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                                                </FormControl>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button onClick={handleClose}>save</Button>
                                </DialogActions>
                            </Dialog>
                        </FormControl>

                        <FormControl
                            fullWidth
                            error={Boolean(touched.password && errors.password)}
                            sx={{ ...theme.typography.customInput }}
                        >
                            <InputLabel htmlFor="outlined-adornment-password-register">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password-register"
                                type={showPassword ? 'text' : 'password'}
                                value={values.password}
                                name="password"
                                label="Password"
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    handleChange(e);
                                    changePassword(e.target.value);
                                }}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            size="large"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                inputProps={{}}
                            />
                            {touched.password && errors.password && (
                                <FormHelperText error id="standard-weight-helper-text-password-register">
                                    {errors.password}
                                </FormHelperText>
                            )}
                        </FormControl>

                        {strength !== 0 && (
                            <FormControl fullWidth>
                                <Box sx={{ mb: 2 }}>
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid item>
                                            <Box
                                                style={{ backgroundColor: level?.color }}
                                                sx={{ width: 85, height: 8, borderRadius: '7px' }}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1" fontSize="0.75rem">
                                                {level?.label}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </FormControl>
                        )}

                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checked}
                                            onChange={(event) => setChecked(event.target.checked)}
                                            name="checked"
                                            color="primary"
                                        />
                                    }
                                    label={
                                        <Typography variant="subtitle1">
                                            Agree with &nbsp;
                                            <Typography variant="subtitle1" component={Link} to="#">
                                                Terms & Condition.
                                            </Typography>
                                        </Typography>
                                    }
                                />
                            </Grid>
                        </Grid>
                        {errors.submit && (
                            <Box sx={{ mt: 3 }}>
                                <FormHelperText error>{errors.submit}</FormHelperText>
                            </Box>
                        )}

                        <Box sx={{ mt: 2 }}>
                            <AnimateButton>
                                <Button
                                    disableElevation
                                    disabled={isSubmitting}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                >
                                    Sign up
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default FirebaseRegister;
