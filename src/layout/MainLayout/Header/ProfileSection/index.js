import { useState, useRef, useEffect } from 'react';
import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FilledInput from '@mui/material/FilledInput';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    ClickAwayListener,
    Collapse,
    Dialog,
    DialogActions,
    DialogContent,
    Divider,
    Grid,
    InputAdornment,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    OutlinedInput,
    Paper,
    Popper,
    Stack,
    Switch,
    TextField,
    Typography
} from '@mui/material';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';
import Zoom from '@mui/material/Zoom';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Transitions from 'ui-component/extended/Transitions';
import UpgradePlanCard from './UpgradePlanCard';
import User1 from 'assets/images/users/user-round.svg';

// assets
import { IconLogout, IconSearch, IconSettings, IconUser } from '@tabler/icons';

// ==============================|| PROFILE MENU ||============================== //

const ProfileSection = () => {
    const theme = useTheme();
    const customization = useSelector((state) => state.customization);
    const navigate = useNavigate();

    const [sdm, setSdm] = useState(true);
    const [value, setValue] = useState('');
    const [notification, setNotification] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [open, setOpen] = useState(false);
    const [ranking, setRanking] = useState(true);
    /**
     * anchorRef is used on different componets and specifying one type leads to other components throwing an error
     * */
    const anchorRef = useRef(null);
    const handleLogout = async () => {
        console.log('Logout');
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const handleListItemClick = (event, index, route = '') => {
        setSelectedIndex(index);
        handleClose(event);

        if (route && route !== '') {
            navigate(route);
        }
    };
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);
    const [open1, setOpen1] = useState(false);

    const handleClick = () => {
        setOpen1(!open1);
    };
    const [isLoading2, setLoading2] = useState(false);
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
            <Chip
                sx={{
                    height: '48px',
                    alignItems: 'center',
                    borderRadius: '27px',
                    transition: 'all .2s ease-in-out',
                    borderColor: theme.palette.primary.light,
                    backgroundColor: theme.palette.primary.light,
                    '&[aria-controls="menu-list-grow"], &:hover': {
                        borderColor: theme.palette.primary.main,
                        background: `${theme.palette.primary.main}!important`,
                        color: theme.palette.primary.light,
                        '& svg': {
                            stroke: theme.palette.primary.light
                        }
                    },
                    '& .MuiChip-label': {
                        lineHeight: 0
                    }
                }}
                icon={
                    <Avatar
                        src={User1}
                        sx={{
                            ...theme.typography.mediumAvatar,
                            margin: '8px 0 8px 8px !important',
                            cursor: 'pointer'
                        }}
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        color="inherit"
                    />
                }
                label={<IconSettings stroke={1.5} size="1.5rem" color={theme.palette.primary.main} />}
                variant="outlined"
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                color="primary"
            />
            <Popper
                placement="bottom-end"
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                popperOptions={{
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, 14]
                            }
                        }
                    ]
                }}
            >
                {({ TransitionProps }) => (
                    <Transitions in={open} {...TransitionProps}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]}>
                                    <Box sx={{ p: 2 }}>
                                        <Stack>
                                            <Stack direction="row" spacing={0.5} alignItems="center">
                                                <Typography variant="h4">Good Day,</Typography>
                                                <Typography component="span" variant="h4" sx={{ fontWeight: 400 }}>
                                                    JusticeFx
                                                </Typography>
                                                <Button
                                                    disabled
                                                    variant="contained"
                                                    style={{
                                                        float: 'right',
                                                        backgroundColor: '#ffff',
                                                        color: 'white'
                                                    }}
                                                    color="warning"
                                                    sx={{ boxShadow: 'none' }}
                                                ></Button>
                                                <Button
                                                    disabled
                                                    variant="raised"
                                                    color="warning"
                                                    style={{
                                                        float: 'right',
                                                        backgroundColor: '#ffe57f',
                                                        color: 'black',
                                                        fontFamily: 'Roboto',
                                                        fontWeight: 'bolder'
                                                    }}
                                                    sx={{ mr: 0 }}
                                                >
                                                    20 <AcUnitIcon style={{ fontSize: '17px', marginLeft: '2px' }} />
                                                </Button>
                                            </Stack>
                                            <Typography variant="subtitle2">cjfrancisf@gmail.com</Typography>
                                            {sdm ? (
                                                <Typography variant="subtitle2" color={'#5e35b1'}>
                                                    #210pts #1-daily #2-monthly
                                                </Typography>
                                            ) : (
                                                <Typography variant="subtitle2" color={'#5e35b1'}>
                                                    allow rankings and scores below
                                                </Typography>
                                            )}
                                        </Stack>
                                        <OutlinedInput
                                            sx={{ width: '100%', pr: 1, pl: 2, my: 2 }}
                                            id="input-search-profile"
                                            value={value}
                                            onChange={(e) => setValue(e.target.value)}
                                            placeholder="Search profile options"
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <IconSearch stroke={1.5} size="1rem" color={theme.palette.grey[500]} />
                                                </InputAdornment>
                                            }
                                            aria-describedby="search-helper-text"
                                            inputProps={{
                                                'aria-label': 'weight'
                                            }}
                                        />
                                        <Divider />
                                    </Box>
                                    <PerfectScrollbar style={{ height: '100%', maxHeight: 'calc(100vh - 250px)', overflowX: 'hidden' }}>
                                        <Box sx={{ p: 2 }}>
                                            <UpgradePlanCard isLoading2={isLoading2} theme={theme} />
                                            <Divider />
                                            <Card
                                                sx={{
                                                    bgcolor: theme.palette.primary.light,
                                                    my: 2
                                                }}
                                            >
                                                <CardContent>
                                                    <Grid container spacing={3} direction="column">
                                                        <Grid item>
                                                            <Grid item container alignItems="center" justifyContent="space-between">
                                                                <Grid item>
                                                                    <Typography variant="subtitle1">See Ranking and Points</Typography>
                                                                </Grid>
                                                                <Grid item>
                                                                    <Switch
                                                                        color="primary"
                                                                        checked={sdm}
                                                                        onChange={(e) => setSdm(e.target.checked)}
                                                                        name="sdm"
                                                                        size="small"
                                                                    />
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item>
                                                            <Grid item container alignItems="center" justifyContent="space-between">
                                                                <Grid item>
                                                                    <Typography variant="subtitle1">Allow Notifications</Typography>
                                                                </Grid>
                                                                <Grid item>
                                                                    <Switch
                                                                        checked={notification}
                                                                        onChange={(e) => setNotification(e.target.checked)}
                                                                        name="sdm"
                                                                        size="small"
                                                                    />
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </CardContent>
                                            </Card>
                                            <Divider />
                                            <List
                                                component="nav"
                                                sx={{
                                                    width: '100%',
                                                    maxWidth: 350,
                                                    minWidth: 300,
                                                    backgroundColor: theme.palette.background.paper,
                                                    borderRadius: '10px',
                                                    [theme.breakpoints.down('md')]: {
                                                        minWidth: '100%'
                                                    },
                                                    '& .MuiListItemButton-root': {
                                                        mt: 0.5
                                                    }
                                                }}
                                            >
                                                <List>
                                                    <ListItemButton onClick={handleClick} style={{ borderRadius: '10px' }}>
                                                        <ListItemIcon>
                                                            <IconUser stroke={1.5} size="1.3rem" />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={
                                                                <Grid container spacing={1} justifyContent="space-between">
                                                                    <Grid item>
                                                                        <Typography variant="body2">Social Profile</Typography>
                                                                    </Grid>
                                                                    <Grid item>
                                                                        <Chip
                                                                            label="03"
                                                                            size="small"
                                                                            sx={{
                                                                                bgcolor: theme.palette.warning.dark,
                                                                                color: theme.palette.background.default
                                                                            }}
                                                                        />
                                                                    </Grid>
                                                                </Grid>
                                                            }
                                                        />
                                                        {open1 ? <ExpandLess /> : <ExpandMore />}
                                                    </ListItemButton>
                                                    <Collapse in={open1} timeout="auto" unmountOnExit>
                                                        <List component="div" disablePadding>
                                                            <ListItemButton
                                                                onClick={() => {
                                                                    handleClickOpenDialog();
                                                                }}
                                                                sx={{ pl: 4 }}
                                                                style={{ borderRadius: '5px' }}
                                                            >
                                                                <ListItemIcon>
                                                                    <FacebookIcon />
                                                                </ListItemIcon>
                                                                <ListItemText
                                                                    primary={
                                                                        <span>
                                                                            <span>facebook</span>
                                                                            <CheckCircleIcon style={{ float: 'right', color: 'green' }} />
                                                                        </span>
                                                                    }
                                                                />
                                                            </ListItemButton>
                                                            <ListItemButton sx={{ pl: 4 }} style={{ borderRadius: '5px' }}>
                                                                <ListItemIcon>
                                                                    <InstagramIcon />
                                                                </ListItemIcon>
                                                                <ListItemText
                                                                    primary={
                                                                        <span>
                                                                            <span>instagram</span>
                                                                            <CheckCircleIcon style={{ float: 'right', color: 'green' }} />
                                                                        </span>
                                                                    }
                                                                />
                                                            </ListItemButton>
                                                            <ListItemButton sx={{ pl: 4 }} style={{ borderRadius: '5px' }}>
                                                                <ListItemIcon>
                                                                    <WhatsAppIcon />
                                                                </ListItemIcon>
                                                                <ListItemText
                                                                    primary={
                                                                        <span>
                                                                            <span>Whatsapp</span>
                                                                            <CheckCircleIcon style={{ float: 'right', color: 'green' }} />
                                                                        </span>
                                                                    }
                                                                />
                                                            </ListItemButton>
                                                        </List>
                                                    </Collapse>
                                                </List>
                                                <ListItemButton
                                                    sx={{ borderRadius: `${customization.borderRadius}px` }}
                                                    selected={selectedIndex === 4}
                                                    onClick={handleLogout}
                                                >
                                                    <ListItemIcon>
                                                        <IconLogout stroke={1.5} size="1.3rem" />
                                                    </ListItemIcon>
                                                    <ListItemText primary={<Typography variant="body2">Logout</Typography>} />
                                                </ListItemButton>
                                                <Dialog
                                                    sm={12}
                                                    disableEscapeKeyDown
                                                    open={openDialog}
                                                    onClose={handleCloseDialog}
                                                    transition={{
                                                        ease: 'linear',
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        delay: 100,
                                                        yoyo: 10
                                                    }}
                                                >
                                                    <DialogContent style={{ overflow: 'hidden' }}>
                                                        <Grid>
                                                            <Grid item xs={12} sm={12}>
                                                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }} marginBottom={'4px'}>
                                                                    <FacebookIcon sx={{ color: '#4267B2', mr: 1, my: 0.5 }} />
                                                                    <TextField
                                                                        id="input-with-sx"
                                                                        label="facebook profile"
                                                                        variant="standard"
                                                                    />
                                                                </Box>
                                                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }} marginBottom={'20px'}>
                                                                    <InstagramIcon sx={{ color: '#fb3958', mr: 1, my: 0.5 }} />
                                                                    <TextField
                                                                        id="input-with-sx"
                                                                        label="Instagram profile"
                                                                        variant="standard"
                                                                    />
                                                                </Box>
                                                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }} marginBottom={'4px'}>
                                                                    <WhatsAppIcon sx={{ color: '#075e54', mr: 1, my: 0.5 }} />
                                                                    <TextField
                                                                        id="input-with-sx"
                                                                        label="Whatsapp number"
                                                                        variant="standard"
                                                                        type="number"
                                                                        InputProps={{
                                                                            startAdornment: (
                                                                                <InputAdornment position="start">+234</InputAdornment>
                                                                            )
                                                                        }}
                                                                    />
                                                                </Box>
                                                            </Grid>
                                                        </Grid>
                                                    </DialogContent>
                                                    <DialogActions>
                                                        <Button
                                                            onClick={() => {
                                                                handleCloseDialog();
                                                            }}
                                                        >
                                                            OK
                                                        </Button>
                                                    </DialogActions>
                                                </Dialog>
                                            </List>
                                        </Box>
                                    </PerfectScrollbar>
                                </MainCard>
                            </ClickAwayListener>
                        </Paper>
                    </Transitions>
                )}
            </Popper>
        </>
    );
};

export default ProfileSection;
