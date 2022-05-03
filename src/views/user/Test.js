import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    MenuItem,
    Select,
    Skeleton
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/styles';
import StarBorder from '@mui/icons-material/StarBorder';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RecommendIcon from '@mui/icons-material/Recommend';
import CircularProgress from '@mui/material/CircularProgress';
import Quiz from './quiz_components/Quiz';

const Test = () => {
    const [isLoading, setLoading] = useState(true);
    const [isLoading2, setLoading2] = useState(false);
    const [step, setStep] = useState(0);
    /* useEffect(() => {
        setLoading(false);
    }, []); */
    setTimeout(() => {
        setLoading(false);
    }, 5000);
    const Demo = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.background.paper
    }));
    const Div = styled('div')(({ theme }) => ({
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1)
    }));
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    const theme = useTheme();
    const [open1, setOpen1] = React.useState(true);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const handleClick1 = () => {
        setOpen1(!open1);
    };
    const handleClick2 = () => {
        setOpen2(!open2);
    };
    const handleClick3 = () => {
        setOpen3(!open3);
    };
    const [openDialog, setOpenDialog] = useState(false);
    const handleClickOpenDialog = () => {
        setOpenDialog(true);
    };
    const handleCloseDialog = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpenDialog(false);
        }
    };
    return (
        <>
            {step === 1 ? (
                <Quiz />
            ) : (
                <>
                    {isLoading ? (
                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item xs={12} md={11} style={{ margin: 'auto' }}>
                                <Demo>
                                    <List dense={dense}>
                                        <ListItem>
                                            <Grid container alignItems="center" justifyContent="space-between">
                                                <Grid item xs={12} sm={5} style={{ margin: 'auto' }}>
                                                    <Grid container alignItems="center" justifyContent="space-between">
                                                        <Grid item xs={12} sm={12} alignItems="center" justifyContent="center">
                                                            <Skeleton
                                                                variant="rectangular"
                                                                height={34}
                                                                xs={12}
                                                                sm={12}
                                                                style={{ marginBottom: '5px', borderRadius: '10px' }}
                                                            />
                                                            <Skeleton
                                                                variant="rectangular"
                                                                xs={12}
                                                                sm={12}
                                                                height={300}
                                                                style={{ borderRadius: '10px' }}
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                    <Box sx={{ mt: 2 }}>
                                                        <AnimateButton>
                                                            <Skeleton
                                                                variant="rectangular"
                                                                xs={12}
                                                                sm={12}
                                                                height={34}
                                                                style={{ marginBottom: '5px', borderRadius: '10px' }}
                                                            />
                                                        </AnimateButton>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </ListItem>
                                    </List>
                                </Demo>
                            </Grid>
                        </Grid>
                    ) : (
                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item xs={12} md={11} style={{ margin: 'auto' }}>
                                <Demo>
                                    <List dense={dense}>
                                        <ListItem>
                                            <Grid container alignItems="center" justifyContent="space-between">
                                                <Grid item xs={12} sm={5} style={{ margin: 'auto' }}>
                                                    <Grid container alignItems="center" justifyContent="space-between">
                                                        <Grid item xs={12} sm={12} alignItems="center" justifyContent="center">
                                                            <Div
                                                                style={{
                                                                    align: 'center',
                                                                    display: 'flex',
                                                                    justifyContent: 'center',
                                                                    textTransform: 'none'
                                                                }}
                                                            >
                                                                {`
                                                                Hello Francis, welcome to the test platform, pls read through for tips for a successful
                                                                test:
                                                                `}
                                                            </Div>
                                                            <List
                                                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                                                component="nav"
                                                                aria-labelledby="nested-list-subheader"
                                                            >
                                                                <ListItemButton onClick={handleClick1}>
                                                                    <ListItemIcon>
                                                                        <AccessTimeIcon />
                                                                    </ListItemIcon>
                                                                    <ListItemText primary="Timing" />
                                                                    {open1 ? <ExpandLess /> : <ExpandMore />}
                                                                </ListItemButton>
                                                                <Collapse in={open1} timeout="auto" unmountOnExit>
                                                                    <List component="div" disablePadding>
                                                                        <Div style={{ fontSize: '11px', letterSpacing: '1px' }}>
                                                                            {`
                                                                            Strict timing is maintained, you will be given 1 minute per question
                                                                            in which you are expected to have picked the right answer to the 
                                                                            question. If the time elapses, the checked answer will be recorded and
                                                                            scored acordingly. Always attempt to leave an answer before time elapses
                                                                            `}
                                                                        </Div>
                                                                    </List>
                                                                </Collapse>
                                                            </List>
                                                            <List
                                                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                                                component="nav"
                                                                aria-labelledby="nested-list-subheader"
                                                            >
                                                                <ListItemButton onClick={handleClick2}>
                                                                    <ListItemIcon>
                                                                        <MenuBookIcon />
                                                                    </ListItemIcon>
                                                                    <ListItemText primary="Areas" />
                                                                    {open2 ? <ExpandLess /> : <ExpandMore />}
                                                                </ListItemButton>
                                                                <Collapse in={open2} timeout="auto" unmountOnExit>
                                                                    <List component="div" disablePadding>
                                                                        <Div style={{ fontSize: '11px', letterSpacing: '1px' }}>
                                                                            {`
                                                                            You are expected to pick areas of the course to test on. If you 
                                                                            want to take on the full course randomly sandwiched, select all
                                                                            areas and proceed.
                                                                            `}
                                                                        </Div>
                                                                    </List>
                                                                </Collapse>
                                                            </List>
                                                            <List
                                                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                                                component="nav"
                                                                aria-labelledby="nested-list-subheader"
                                                            >
                                                                <ListItemButton onClick={handleClick3}>
                                                                    <ListItemIcon>
                                                                        <RecommendIcon />
                                                                    </ListItemIcon>
                                                                    <ListItemText primary="At the end of the test" />
                                                                    {open3 ? <ExpandLess /> : <ExpandMore />}
                                                                </ListItemButton>
                                                                <Collapse in={open3} timeout="auto" unmountOnExit>
                                                                    <List component="div" disablePadding>
                                                                        <Div style={{ fontSize: '11px', letterSpacing: '1px' }}>
                                                                            {`
                                                                            Bravo, once youve completed the test or your time has elapsed, you will
                                                                            be shown the end test interface. There you will see your score, current
                                                                            daily rank and current monthly rank. There will be a button to review 
                                                                            answers, by clicking the button you may view all the test answers showing
                                                                            your choice, the correct answer, the wrong answer and possible explanations 
                                                                            to the current answers.
                                                                            `}
                                                                        </Div>
                                                                    </List>
                                                                </Collapse>
                                                            </List>
                                                        </Grid>
                                                    </Grid>
                                                    <Box sx={{ mt: 2 }}>
                                                        <AnimateButton>
                                                            <Button
                                                                onClick={handleClickOpenDialog}
                                                                disableElevation
                                                                /* disabled={isSubmitting} */
                                                                fullWidth
                                                                size="large"
                                                                type="submit"
                                                                variant="contained"
                                                                color="secondary"
                                                            >
                                                                Start now
                                                            </Button>
                                                            <Dialog
                                                                fullWidth
                                                                disableEscapeKeyDown
                                                                open={openDialog}
                                                                onClose={handleCloseDialog}
                                                            >
                                                                {isLoading2 ? (
                                                                    <DialogContent>
                                                                        <Grid container justifyContent={'center'}>
                                                                            <Grid item margin={'auto'}>
                                                                                <CircularProgress color="success" />
                                                                            </Grid>
                                                                        </Grid>
                                                                    </DialogContent>
                                                                ) : (
                                                                    <>
                                                                        <DialogTitle style={{ alignContent: 'right' }}>
                                                                            you will have
                                                                            <span style={{ color: 'green', fontWeight: 'bolder' }}>
                                                                                {'1 minute '}
                                                                            </span>
                                                                            to finish
                                                                            <span style={{ color: 'purple', fontWeight: 'bolder' }}>
                                                                                {' per question'}
                                                                            </span>
                                                                            .Goodluck
                                                                        </DialogTitle>
                                                                        <DialogContent>
                                                                            <Grid container>
                                                                                <Grid item xs={12} sm={5} margin={'auto'}>
                                                                                    <p style={{ marginBottom: '1px' }}>select AOC</p>
                                                                                    <Select
                                                                                        fullWidth
                                                                                        label="select AOC"
                                                                                        margin="normal"
                                                                                        name="fname"
                                                                                        type="text"
                                                                                        placeholder="select"
                                                                                        defaultValue={0}
                                                                                        sx={{ ...theme.typography.customInput }}
                                                                                    >
                                                                                        <MenuItem value={0}>
                                                                                            <div style={{ color: 'grey' }}>All Areas</div>
                                                                                        </MenuItem>
                                                                                        <MenuItem value={10}>
                                                                                            General and Autonomic
                                                                                        </MenuItem>
                                                                                        <MenuItem value={20}>CNS Pharmacology</MenuItem>
                                                                                    </Select>
                                                                                </Grid>
                                                                                <Grid item xs={12} sm={6}>
                                                                                    <p style={{ marginBottom: '1px' }}>
                                                                                        {'select Number of questions'}
                                                                                    </p>
                                                                                    <Select
                                                                                        fullWidth
                                                                                        label="select AOC"
                                                                                        margin="normal"
                                                                                        name="fname"
                                                                                        type="text"
                                                                                        placeholder="select"
                                                                                        defaultValue={0}
                                                                                        sx={{ ...theme.typography.customInput }}
                                                                                    >
                                                                                        <MenuItem value={0}>
                                                                                            <div style={{ color: 'grey' }}>15</div>
                                                                                        </MenuItem>
                                                                                        <MenuItem value={10}>30</MenuItem>
                                                                                        <MenuItem value={20}>45</MenuItem>
                                                                                    </Select>
                                                                                </Grid>
                                                                            </Grid>
                                                                        </DialogContent>
                                                                        <DialogActions>
                                                                            <Button onClick={handleCloseDialog}>Cancel</Button>
                                                                            <Button
                                                                                onClick={() => {
                                                                                    setLoading2(true);
                                                                                    setTimeout(() => {
                                                                                        setStep(1);
                                                                                    }, 6000);
                                                                                }}
                                                                            >
                                                                                Begin Test
                                                                            </Button>
                                                                        </DialogActions>
                                                                    </>
                                                                )}
                                                            </Dialog>
                                                        </AnimateButton>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </ListItem>
                                    </List>
                                </Demo>
                            </Grid>
                        </Grid>
                    )}
                </>
            )}
        </>
    );
};
export default Test;
