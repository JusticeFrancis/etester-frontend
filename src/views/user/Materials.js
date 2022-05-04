import {
    Avatar,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    MenuItem,
    Select,
    Typography
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import React from 'react';
import { IconHome, IconHome2, IconCrown, IconMedal } from '@tabler/icons';
import { useTheme } from '@mui/styles';
import { useEffect, useState, useRef } from 'react';
import Skeleton from '@mui/material/Skeleton';
//play,audio,document icon
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import ArticleIcon from '@mui/icons-material/Article';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ReviewsIcon from '@mui/icons-material/Reviews';
import CircularProgress from '@mui/material/CircularProgress';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player/lazy';

const muiTheme = createMuiTheme({});

const videoStyle = makeStyles({
    playerWrapper: {
        width: '100%',
        position: 'relative'
    }
});

const materialStyle = makeStyles((theme) => {
    return {
        root: {
            [theme.breakpoints.down('sm')]: {
                width: '100%'
            }
        },
        loopIcon: {
            color: '#3f51b5',
            '&.selected': {
                color: '#0921a9'
            },
            '&:hover': {
                color: '#7986cb'
            },
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            }
        },
        playIcon: {
            color: '#5e35b1',
            '&:hover': {
                color: '#5e35f1'
            }
        },
        replayIcon: {
            color: '#5e35b1'
        },
        pauseIcon: {
            color: '#0099ff'
        },
        volumeIcon: {
            color: '#5e35b1',
            '&:hover': {
                color: '#5e35f1'
            }
        },
        volumeSlider: {
            color: '#5e35b1'
        },
        progressTime: {
            color: 'rgba(0, 0, 0, 0.54)'
        },
        mainSlider: {
            color: '#3f51b5',
            '& .MuiSlider-rail': {
                color: '#7986cb'
            },
            '& .MuiSlider-track': {
                color: '#3f51b5'
            },
            '& .MuiSlider-thumb': {
                color: '#303f9f'
            }
        }
    };
});

const Materials = () => {
    const [isLoading, setLoading] = useState(true);
    /* useEffect(() => {
        setLoading(true);
    }, []); */
    setTimeout(() => {
        setLoading(false);
    }, 1000);
    function generate(element) {
        return [0, 1, 2].map((value) =>
            React.cloneElement(element, {
                key: value
            })
        );
    }
    const Demo = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.background.paper
    }));
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    const theme = useTheme();

    const [openDialog, setOpenDialog] = useState(false);
    const handleClickOpenDialog = () => {
        setMaterialComponentLoading(true);
        setOpenDialog(true);
        setTimeout(() => {
            setMaterialComponentLoading(false);
        }, 1000);
    };
    const handleCloseDialog = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpenDialog(false);
        }
    };
    const [materialComponentLoading, setMaterialComponentLoading] = useState(false);
    const [materialType, setMaterialType] = useState('');
    const classes = videoStyle();
    const [playing, setPlaying] = useState(false);
    return (
        <>
            {isLoading ? (
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item xs={12} md={11} style={{ margin: 'auto' }}>
                        <Demo>
                            <List dense={dense}>
                                <ListItem>
                                    <Grid container alignItems="center" justifyContent="space-between">
                                        <Grid item xs={6} sm={3}>
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
                                                    <Skeleton variant="rectangular" width={80} height={34} />
                                                </MenuItem>
                                            </Select>
                                        </Grid>
                                        <Grid item xs={5} sm={3}>
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
                                                    <Skeleton variant="rectangular" width={80} height={34} />
                                                </MenuItem>
                                            </Select>
                                        </Grid>
                                        <Grid item xs={8} sm={3}>
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
                                                    <Skeleton variant="rectangular" width={80} height={34} />
                                                </MenuItem>
                                            </Select>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Divider />
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <ListItem
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="delete">
                                            <Skeleton variant="rectangular" width={80} height={20} />
                                            &nbsp;
                                            <Skeleton variant="rectangular" width={80} height={20} />
                                        </IconButton>
                                    }
                                >
                                    <Skeleton variant="rectangular" width={40} height={34} style={{ borderRadius: '30px' }} /> &nbsp;
                                    <Skeleton variant="rectangular" width={200} height={34} />
                                </ListItem>
                                <ListItem
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="delete">
                                            <Skeleton variant="rectangular" width={80} height={20} />
                                            &nbsp;
                                            <Skeleton variant="rectangular" width={80} height={20} />
                                        </IconButton>
                                    }
                                >
                                    <Skeleton variant="rectangular" width={40} height={34} style={{ borderRadius: '30px' }} /> &nbsp;
                                    <Skeleton variant="rectangular" width={200} height={34} />
                                </ListItem>
                                <ListItem
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="delete">
                                            <Skeleton variant="rectangular" width={80} height={20} />
                                            &nbsp;
                                            <Skeleton variant="rectangular" width={80} height={20} />
                                        </IconButton>
                                    }
                                >
                                    <Skeleton variant="rectangular" width={40} height={34} style={{ borderRadius: '30px' }} /> &nbsp;
                                    <Skeleton variant="rectangular" width={200} height={34} />
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
                                        <Grid item xs={6} sm={3}>
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
                                                    <div style={{ color: 'grey' }}>Select course</div>
                                                </MenuItem>
                                                <MenuItem value={10}>Pharmacology</MenuItem>
                                            </Select>
                                        </Grid>
                                        <Grid item xs={5} sm={3}>
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
                                                    <div style={{ color: 'grey' }}>Course category</div>
                                                </MenuItem>
                                                <MenuItem value={10}>All</MenuItem>
                                                <MenuItem value={10}>General and autonomic</MenuItem>
                                                <MenuItem value={10}>CNS pharmacology</MenuItem>
                                            </Select>
                                        </Grid>
                                        <Grid item xs={8} sm={3}>
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
                                                    <div style={{ color: 'grey' }}>Material type</div>
                                                </MenuItem>
                                                <MenuItem value={10}>All</MenuItem>
                                                <MenuItem value={10}>Video</MenuItem>
                                                <MenuItem value={10}>Audio</MenuItem>
                                                <MenuItem value={10}>Document</MenuItem>
                                                <MenuItem value={10}>Link</MenuItem>
                                            </Select>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <ListItemButton>
                                    <span style={{ fontSize: '11px' }}>
                                        showing results for all materials in cns pharmacology in "pharmacology"
                                    </span>
                                </ListItemButton>
                                <ListItemButton
                                    onClick={() => {
                                        handleClickOpenDialog();
                                        setMaterialType('video');
                                    }}
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <PlayCircleFilledWhiteIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <>
                                                <div>Understanding the principles behind pharmacological concepts</div>
                                                <IconButton style={{ float: 'right', fontSize: '15px', marginLeft: '0px' }}>
                                                    &nbsp; 48 views
                                                </IconButton>
                                                <IconButton style={{ float: 'right', fontSize: '15px', marginLeft: '0px' }}>
                                                    5 mins listen
                                                </IconButton>
                                            </>
                                        }
                                        secondary={
                                            <>
                                                <IconButton
                                                    style={{
                                                        fontSize: '12px',
                                                        border: '1px solid #5e35b1',
                                                        backgroundColor: '#5e35b1',
                                                        padding: '4px',
                                                        color: 'white',
                                                        borderRadius: '20px',
                                                        margin: '3px'
                                                    }}
                                                >
                                                    undestandable
                                                </IconButton>
                                                <IconButton
                                                    edge="end"
                                                    aria-label="delete"
                                                    style={{
                                                        fontSize: '12px',
                                                        border: '1px solid #b39f51',
                                                        backgroundColor: '#b39f51',
                                                        padding: '4px',
                                                        color: 'white',
                                                        borderRadius: '20px',
                                                        margin: '3px'
                                                    }}
                                                >
                                                    sponsored
                                                </IconButton>
                                            </>
                                        }
                                    />
                                </ListItemButton>
                                <ListItemButton
                                    onClick={() => {
                                        handleClickOpenDialog();
                                        setMaterialType('audio');
                                    }}
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <VolumeUpIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <>
                                                <div>Preparing for your part two MBBS pharmacology examples</div>
                                                <IconButton style={{ float: 'right', fontSize: '15px', marginLeft: '0px' }}>
                                                    &nbsp; 48 views
                                                </IconButton>
                                                <IconButton style={{ float: 'right', fontSize: '15px', marginLeft: '0px' }}>
                                                    5 mins listen
                                                </IconButton>
                                            </>
                                        }
                                        secondary={
                                            <>
                                                <IconButton
                                                    style={{
                                                        fontSize: '12px',
                                                        border: '1px solid #5e35b1',
                                                        backgroundColor: '#5e35b1',
                                                        padding: '4px',
                                                        color: 'white',
                                                        borderRadius: '20px',
                                                        margin: '3px'
                                                    }}
                                                >
                                                    undestandable
                                                </IconButton>
                                            </>
                                        }
                                    />
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <ArticleIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <>
                                                <div>Classification of CNS drugs</div>
                                                <IconButton style={{ float: 'right', fontSize: '15px', marginLeft: '0px' }}>
                                                    &nbsp; 48 views
                                                </IconButton>
                                                <IconButton style={{ float: 'right', fontSize: '15px', marginLeft: '0px' }}>
                                                    5 mins listen
                                                </IconButton>
                                            </>
                                        }
                                        secondary={
                                            <>
                                                <IconButton
                                                    style={{
                                                        fontSize: '12px',
                                                        border: '1px solid #5e35b1',
                                                        backgroundColor: '#5e35b1',
                                                        padding: '4px',
                                                        color: 'white',
                                                        borderRadius: '20px',
                                                        margin: '3px'
                                                    }}
                                                >
                                                    undestandable
                                                </IconButton>
                                                <IconButton
                                                    edge="end"
                                                    aria-label="delete"
                                                    style={{
                                                        fontSize: '12px',
                                                        border: '1px solid #b39f51',
                                                        backgroundColor: '#b39f51',
                                                        padding: '4px',
                                                        color: 'white',
                                                        borderRadius: '20px',
                                                        margin: '3px'
                                                    }}
                                                >
                                                    sponsored
                                                </IconButton>
                                            </>
                                        }
                                    />
                                </ListItemButton>
                            </List>
                            {/* dialog to view material on the site */}
                            <Dialog fullWidth disableEscapeKeyDown open={openDialog} onClose={handleCloseDialog}>
                                {materialComponentLoading ? (
                                    <>
                                        <DialogTitle style={{ alignContent: 'right' }}>loading material component to screen...</DialogTitle>
                                        <DialogContent>
                                            <Grid container>
                                                <Grid container justifyContent={'center'}>
                                                    <Grid item margin={'auto'}>
                                                        <CircularProgress color="success" />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </DialogContent>
                                    </>
                                ) : (
                                    <>
                                        <DialogTitle style={{ alignContent: 'right' }}>Material name by material author</DialogTitle>
                                        <DialogContent>
                                            {materialType === 'audio' ? (
                                                <Grid container>
                                                    <Grid container justifyContent={'center'}>
                                                        <Grid item style={{ marginBottom: '50px', marginTop: '50px' }}>
                                                            <ThemeProvider theme={muiTheme}>
                                                                <AudioPlayer
                                                                    useStyles={materialStyle}
                                                                    width={'500px'}
                                                                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                                                                />
                                                            </ThemeProvider>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            ) : null}
                                            {materialType === 'video' ? (
                                                <div className={classes.playerWrapper}>
                                                    <ReactPlayer
                                                        id={'123'}
                                                        width={'100%'}
                                                        height="100%"
                                                        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                                                        muted={true}
                                                        playing={false}
                                                        controls={true}
                                                        config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                                                    />
                                                </div>
                                            ) : null}
                                        </DialogContent>
                                    </>
                                )}

                                <DialogActions>
                                    <Button onClick={handleCloseDialog}>Cancel</Button>
                                </DialogActions>
                            </Dialog>
                        </Demo>
                    </Grid>
                </Grid>
            )}
        </>
    );
};
export default Materials;
