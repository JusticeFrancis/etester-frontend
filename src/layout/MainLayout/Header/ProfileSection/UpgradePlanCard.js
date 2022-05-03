// material-ui
import { styled } from '@mui/material/styles';
import {
    Button,
    Card,
    CardContent,
    Chip,
    Collapse,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography
} from '@mui/material';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';
import PaymentInputs from './PaymentInputs';
import { IconUser } from '@tabler/icons';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Slide from '@mui/material/Slide';
import React, { useState } from 'react';
import Zoom from '@mui/material/Zoom';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';

// styles
const CardStyle = styled(Card)(({ theme }) => ({
    background: theme.palette.warning.light,
    marginTop: '16px',
    marginBottom: '16px',
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: '200px',
        height: '200px',
        border: '19px solid ',
        borderColor: theme.palette.warning.main,
        borderRadius: '50%',
        top: '65px',
        right: '-150px'
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: '200px',
        height: '200px',
        border: '3px solid ',
        borderColor: theme.palette.warning.main,
        borderRadius: '50%',
        top: '145px',
        right: '-70px'
    }
}));

let checked = false;
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom in={checked} ref={ref} {...props} style={{ transitionDelay: checked ? '200ms' : '0ms' }} />;
});

let open1 = false;

const handleClick = () => {
    open1 = !open1;
};
// ==============================|| PROFILE MENU - UPGRADE PLAN CARD ||============================== //

const UpgradePlanCard = ({ isLoading2, theme }) => {
    const [defaultPaymentCard, setDefaultPaymentCard] = useState(0);
    const [card1, setCard1] = useState(true);
    const [msg1, setMsg1] = useState(false);
    const [cardShow1, setCardShow1] = useState(true);
    const [card2, setCard2] = useState(true);
    const [openDialog, setOpenDialog] = useState(false);

    const handleClickOpenDialog = () => {
        setOpenDialog(true);
    };
    const handleCloseDialog = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpenDialog(false);
        }
    };
    var pressTimer;

    return (
        <>
            <CardStyle>
                <CardContent>
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <Typography variant="h4">4350 6679 8900 ***</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle2" color="grey.900" sx={{ opacity: 0.6 }}>
                                Francis Francis C.J <br />
                                [cvv ***] [Exp Date **/**]
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Stack direction="row">
                                <AnimateButton>
                                    <Button variant="contained" color="warning" sx={{ boxShadow: 'none' }} onClick={handleClickOpenDialog}>
                                        Add a main card
                                    </Button>
                                </AnimateButton>
                            </Stack>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardStyle>
            <Dialog
                fullWidth
                sm={12}
                disableEscapeKeyDown
                open={openDialog}
                onClose={handleCloseDialog}
                TransitionComponent={Transition}
                transition={{
                    ease: 'linear',
                    duration: 2,
                    repeat: Infinity,
                    delay: 100,
                    yoyo: 10
                }}
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
                        <DialogContent style={{ overflow: 'hidden' }}>
                            <Grid container>
                                <Grid item xs={12} sm={8} margin={'auto'}>
                                    <PaymentInputs />
                                    <Button
                                        variant="raised"
                                        color="primary"
                                        style={{
                                            float: 'left',
                                            marginRight: '5px',
                                            backgroundColor: '#5e35b1',
                                            color: 'white'
                                        }}
                                        sx={{ mb: 2 }}
                                    >
                                        Add
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={8} margin={'auto'}>
                                    <List style={{ margin: 'auto' }}>
                                        {card1 && cardShow1 ? (
                                            <>
                                                <ListItemButton
                                                    id={'a'}
                                                    style={{ borderRadius: '10px', marginTop: '2px' }}
                                                    onClick={() => {
                                                        setDefaultPaymentCard(0);
                                                    }}
                                                    onMouseUp={() => {
                                                        // Clear timeout
                                                        clearTimeout(pressTimer);
                                                        return false;
                                                    }}
                                                    onMouseDown={() => {
                                                        // Set timeout
                                                        pressTimer = window.setTimeout(function () {
                                                            setMsg1(true);
                                                        }, 3000);
                                                        return false;
                                                    }}
                                                    onPointerUp={() => {
                                                        clearTimeout(pressTimer);
                                                        // Clear timeout
                                                        return false;
                                                    }}
                                                    onPointerDown={() => {
                                                        // Set timeout
                                                        pressTimer = window.setTimeout(function () {
                                                            setMsg1(true);
                                                        }, 3000);
                                                        return false;
                                                    }}
                                                >
                                                    <ListItemIcon>
                                                        <CreditCardIcon stroke={1.5} size="1.3rem" />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={
                                                            <Grid container spacing={1} justifyContent="space-between">
                                                                <Grid container>
                                                                    <Typography variant="body2">1234 **** **** 2345</Typography>
                                                                </Grid>
                                                                <Grid container>
                                                                    <Typography variant="body2">*** **/**</Typography>
                                                                </Grid>
                                                                <Grid container>
                                                                    <Chip
                                                                        label="saved"
                                                                        size="small"
                                                                        sx={{
                                                                            bgcolor: theme.palette.primary.dark,
                                                                            color: theme.palette.background.default
                                                                        }}
                                                                    />
                                                                    {defaultPaymentCard === 0 ? (
                                                                        <Chip
                                                                            label="default"
                                                                            size="small"
                                                                            sx={{
                                                                                bgcolor: theme.palette.warning.dark,
                                                                                color: theme.palette.background.default,
                                                                                ml: 1
                                                                            }}
                                                                        />
                                                                    ) : null}
                                                                </Grid>
                                                            </Grid>
                                                        }
                                                    />
                                                </ListItemButton>
                                                {msg1 ? (
                                                    <ListItemText>
                                                        <p style={{ textAlign: 'center' }}>
                                                            Ok to delete ? &nbsp;
                                                            <Button
                                                                onClick={() => {
                                                                    setMsg1(false);
                                                                }}
                                                                style={{ color: 'red', fontWeight: 'bolder' }}
                                                            >
                                                                <CancelIcon />
                                                            </Button>
                                                            <Button
                                                                onClick={() => {
                                                                    setCardShow1(false);
                                                                }}
                                                                style={{ color: 'blue', fontWeight: 'bolder' }}
                                                            >
                                                                <DeleteIcon />
                                                            </Button>
                                                        </p>
                                                    </ListItemText>
                                                ) : null}
                                            </>
                                        ) : null}
                                        {card2 ? (
                                            <ListItemButton
                                                style={{ borderRadius: '10px', marginTop: '2px' }}
                                                onClick={() => {
                                                    setDefaultPaymentCard(1);
                                                }}
                                            >
                                                <ListItemIcon>
                                                    <CreditCardIcon stroke={1.5} size="1.3rem" />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={
                                                        <Grid container spacing={1} justifyContent="space-between">
                                                            <Grid container>
                                                                <Typography variant="body2">1234 **** **** 2345</Typography>
                                                            </Grid>
                                                            <Grid container>
                                                                <Typography variant="body2">*** **/**</Typography>
                                                            </Grid>
                                                            <Grid container>
                                                                <Chip
                                                                    label="saved"
                                                                    size="small"
                                                                    sx={{
                                                                        bgcolor: theme.palette.primary.dark,
                                                                        color: theme.palette.background.default
                                                                    }}
                                                                />
                                                                {defaultPaymentCard === 1 ? (
                                                                    <Chip
                                                                        label="default"
                                                                        size="small"
                                                                        sx={{
                                                                            bgcolor: theme.palette.warning.dark,
                                                                            color: theme.palette.background.default,
                                                                            ml: 1
                                                                        }}
                                                                    />
                                                                ) : null}
                                                            </Grid>
                                                        </Grid>
                                                    }
                                                />
                                            </ListItemButton>
                                        ) : null}
                                    </List>
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button
                                onClick={() => {
                                    checked = true;
                                    handleCloseDialog();
                                }}
                            >
                                OK
                            </Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </>
    );
};

export default UpgradePlanCard;
