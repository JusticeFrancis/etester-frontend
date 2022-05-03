import {
    Avatar,
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
import PersonPinCircleOutlinedIcon from '@mui/icons-material/PersonPinCircleOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
//play,audio,document icon
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import ArticleIcon from '@mui/icons-material/Article';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ReviewsIcon from '@mui/icons-material/Reviews';

const Materials = () => {
    const [isLoading, setLoading] = useState(true);
    /* useEffect(() => {
        setLoading(true);
    }, []); */
    setTimeout(() => {
        setLoading(false);
    }, 5000);
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
                                            <Skeleton variant="rectangular" width={40} height={34} style={{ borderRadius: '30px' }} />
                                            &nbsp;
                                            <Skeleton variant="rectangular" width={40} height={34} />
                                        </IconButton>
                                    }
                                >
                                    <Skeleton variant="rectangular" width={40} height={34} style={{ borderRadius: '30px' }} /> &nbsp;
                                    <Skeleton variant="rectangular" width={40} height={34} />
                                </ListItem>
                                <ListItem
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="delete">
                                            <Skeleton variant="rectangular" width={40} height={34} style={{ borderRadius: '30px' }} />
                                            &nbsp;
                                            <Skeleton variant="rectangular" width={40} height={34} />
                                        </IconButton>
                                    }
                                >
                                    <Skeleton variant="rectangular" width={40} height={34} style={{ borderRadius: '30px' }} /> &nbsp;
                                    <Skeleton variant="rectangular" width={40} height={34} />
                                </ListItem>
                                <ListItem
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="delete">
                                            <Skeleton variant="rectangular" width={40} height={34} style={{ borderRadius: '30px' }} />
                                            &nbsp;
                                            <Skeleton variant="rectangular" width={40} height={34} />
                                        </IconButton>
                                    }
                                >
                                    <Skeleton variant="rectangular" width={40} height={34} style={{ borderRadius: '30px' }} /> &nbsp;
                                    <Skeleton variant="rectangular" width={40} height={34} />
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
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <PlayCircleFilledWhiteIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <div>
                                                <IconButton style={{ float: 'right', fontSize: '15px', marginLeft: '0px' }}>
                                                    &nbsp; 1,100 views
                                                </IconButton>
                                                Understanding drug classification in CNS pharmacology
                                                <IconButton style={{ float: 'right', fontSize: '15px', marginLeft: '0px' }}>
                                                    30 mins watch
                                                </IconButton>
                                            </div>
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
                                                        border: '1px solid #446d91',
                                                        backgroundColor: '#446d91',
                                                        padding: '4px',
                                                        color: 'white',
                                                        borderRadius: '20px',
                                                        margin: '3px'
                                                    }}
                                                >
                                                    top rated
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
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <VolumeUpIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <div>
                                                Preparing for your part two MBBS pharmacology examples
                                                <IconButton style={{ float: 'right', fontSize: '15px', marginLeft: '0px' }}>
                                                    &nbsp; 48 views
                                                </IconButton>
                                                <IconButton style={{ float: 'right', fontSize: '15px', marginLeft: '0px' }}>
                                                    5 mins listen
                                                </IconButton>
                                            </div>
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
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <ArticleIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <div>
                                                All you need to know about opioid receptors
                                                <IconButton style={{ float: 'right', fontSize: '15px', marginLeft: '0px' }}>
                                                    &nbsp; 672 views
                                                </IconButton>
                                                <IconButton style={{ float: 'right', fontSize: '15px', marginLeft: '0px' }}>
                                                    10 mins read
                                                </IconButton>
                                            </div>
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
                            </List>
                        </Demo>
                    </Grid>
                </Grid>
            )}
        </>
    );
};
export default Materials;
