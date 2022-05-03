import {
    Avatar,
    Divider,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
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

const LadderBoard = () => {
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
                                                    <div style={{ color: 'grey' }}>Pharmacology</div>
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
                                                    <div style={{ color: 'grey' }}>All Shools</div>
                                                </MenuItem>
                                                <MenuItem value={10}>University of portHarcourt</MenuItem>
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
                                                    <div style={{ color: 'grey' }}>Monthly ladder</div>
                                                </MenuItem>
                                                <MenuItem value={10}>Daily Ladder</MenuItem>
                                            </Select>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <ListItem
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="delete">
                                            <IconCrown color="purple" />
                                            49p
                                        </IconButton>
                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <PersonPinCircleOutlinedIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={<div>Justicefx</div>} secondary={secondary ? 'Secondary text' : null} />
                                </ListItem>
                            </List>
                        </Demo>
                    </Grid>
                </Grid>
            )}
        </>
    );
};
export default LadderBoard;
