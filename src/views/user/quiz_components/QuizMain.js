import React from 'react';
import PropTypes from 'prop-types';
import LiveHelp from '@mui/icons-material/LiveHelp';
import { makeStyles, withStyles } from '@mui/styles';
import { Button, Radio, Paper, Typography, Grid, ListItemButton, ListItemText, ListItem, List, FormControlLabel } from '@mui/material';
import { Box } from '@mui/system';
import AnimateButton from 'ui-component/extended/AnimateButton';
import Countdown, { zeroPad } from 'react-countdown';
const styles = (theme) => ({
    button: {
        pointerEvents: 'none',
        boxShadow: 'none'
    },
    questionMeta: {
        marginLeft: 10,
        display: 'inline'
    },
    footer: {
        marginTop: '40px'
    }
});

const renderer = ({ hours, minutes, seconds, start }) => (
    <span>
        {zeroPad(minutes)}:{zeroPad(seconds)}
    </span>
);

class PaperSheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            quiz: props.quiz,
            selectedValue: '',
            revealed: false,
            step: 0
        };
        if (this.state.step === 0) {
            var x = 0;
            var i = setInterval(() => {
                this.moveNext();
                if (++x === 3) {
                    window.clearInterval(i);
                    this.setState({ step: 1 });
                }
            }, 5000);
        } else {
            null;
        }
    }

    handleChange = (event) => {
        this.setState({ selectedValue: event.target.value });
    };

    moveNext = async () => {
        this.clearBacks();
        this.setState({ selectedValue: 0 });
        this.setState({ current: this.state.current + 1 });
    };
    movePrevious = () => {
        this.clearBacks();
        this.setState({ current: this.state.current - 1 });
    };
    clearBacks = () => {
        var question = this.state.quiz[this.state.current];
        for (var i = 0; i < question.options.length; i++) {
            this.refs[i.toString()].style.background = '';
        }
    };

    revealCorrect = () => {
        //clear backgrounds
        var question = this.state.quiz[this.state.current];
        var answer = question.answer;
        this.clearBacks();
        if (this.state.selectedValue === answer) {
            this.refs[answer].style.background = 'lightgreen';
        } else {
            this.refs[answer].style.background = 'lightgreen';
            this.refs[this.state.selectedValue].style.background = 'lightcoral';
        }
        this.setState({ revealed: true });
    };
    render() {
        var question = this.state.quiz[this.state.current];
        var curQuestion = this.state.current + 1;
        var size = /* this.state.quiz.length */ 15;
        var moveRight = this.state.current + 1 < this.state.quiz.length;
        var moveLeft = this.state.current == 0;

        return (
            <div item xs={12} md={11} style={{ margin: 'auto' }}>
                {this.state.step === 1 ? (
                    <Paper className={this.props.classes.root} elevation={4} sx={{ p: 4 }}>
                        <Typography component="p">
                            <Button
                                variant="fab"
                                style={{ color: '#5e35b1', fontFamily: 'Helvetica', fontWeight: 'bolder' }}
                                aria-label="add"
                                className={this.props.classes.button}
                            >
                                {'Pharmacology Test result . . .'}
                            </Button>
                            <span
                                className={this.props.classes.questionMeta}
                                style={{ fontSize: '12px', fontWeight: 'bolder', fontFamily: 'Helvetica' }}
                            >
                                {'For 30mins'}
                            </span>
                        </Typography>
                        <hr style={{ marginBottom: '20px' }} />
                        <div style={{ marginBottom: '3px' }}>
                            <Grid container>
                                <Grid style={{ margin: 'auto' }} sm={6}>
                                    <Typography
                                        variant="headline"
                                        component="h4"
                                        justifyContent={'center'}
                                        style={{
                                            backgroundColor: '#5e35c5',
                                            color: 'white',
                                            marginRight: '9px',
                                            marginLeft: '9px',
                                            borderRadius: '5px',
                                            fontSize: '15px',
                                            fontFamily: 'Helvetica',
                                            fontWeight: 'bolder',
                                            textAlign: 'center',
                                            marginBottom: '2px',
                                            wordSpacing: '1px',
                                            letterSpacing: '1px'
                                        }}
                                        sx={{ p: 4, my: '2px' }}
                                    >
                                        {`Your score : 65/100`}
                                    </Typography>
                                </Grid>
                                <Grid style={{ margin: 'auto', marginTop: '10px', marginBottom: '5px' }} sm={6}>
                                    <Typography
                                        variant="headline"
                                        component="h4"
                                        justifyContent={'center'}
                                        style={{
                                            backgroundColor: '#5e35f1',
                                            color: 'white',
                                            marginRight: '9px',
                                            marginLeft: '9px',
                                            borderRadius: '5px',
                                            fontSize: '15px',
                                            fontFamily: 'Helvetica',
                                            fontWeight: 'bolder',
                                            textAlign: 'center',
                                            wordSpacing: '1px',
                                            letterSpacing: '1px'
                                        }}
                                        sx={{ p: 4 }}
                                    >
                                        {`Points Gained : 0.34`}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid style={{ marginTop: '10px', marginBottom: '5px' }} sm={6}>
                                    <Typography
                                        variant="headline"
                                        component="h4"
                                        justifyContent={'center'}
                                        style={{
                                            backgroundColor: '#5e35a1',
                                            color: 'white',
                                            marginRight: '9px',
                                            marginLeft: '9px',
                                            borderRadius: '5px',
                                            fontSize: '15px',
                                            fontFamily: 'Helvetica',
                                            fontWeight: 'bolder',
                                            textAlign: 'center',
                                            wordSpacing: '1px',
                                            letterSpacing: '1px'
                                        }}
                                        sx={{ p: 4 }}
                                    >
                                        {`Current Daily Standings : 3rd`}
                                    </Typography>
                                </Grid>
                                <Grid style={{ marginTop: '10px', marginBottom: '5px' }} sm={6}>
                                    <Typography
                                        variant="headline"
                                        component="h4"
                                        justifyContent={'center'}
                                        style={{
                                            backgroundColor: '#5e35d1',
                                            color: 'white',
                                            marginRight: '9px',
                                            marginLeft: '9px',
                                            borderRadius: '5px',
                                            fontSize: '15px',
                                            fontFamily: 'Helvetica',
                                            fontWeight: 'bolder',
                                            textAlign: 'center',
                                            wordSpacing: '1px',
                                            letterSpacing: '1px'
                                        }}
                                        sx={{ p: 4 }}
                                    >
                                        {`Current Monthly Standings : 2nd`}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>
                    </Paper>
                ) : (
                    <Paper className={this.props.classes.root} elevation={4}>
                        <Typography component="p">
                            <Button variant="fab" style={{ color: '#5e35b1' }} aria-label="add" className={this.props.classes.button}>
                                <Countdown
                                    id="xyz"
                                    onStart={() => {
                                        console.log('hi');
                                    }}
                                    date={Date.now() + 5000}
                                    renderer={renderer}
                                />
                            </Button>
                            {/* <Button variant="fab" style={{ color: '#5e35b1' }} aria-label="add" className={this.props.classes.button}>
                                <LiveHelp />
                            </Button> */}
                            <span
                                className={this.props.classes.questionMeta}
                                style={{ fontSize: '12px', fontWeight: 'bolder', fontFamily: 'Helvetica' }}
                            >
                                {' '}
                                Pharmacology_question # {curQuestion} / {size}
                            </span>
                        </Typography>
                        <Grid style={{ margin: '5px' }}>
                            <hr style={{ marginBottom: '20px' }} />
                            <Typography
                                variant="headline"
                                component="h4"
                                justifyContent={'center'}
                                style={{
                                    backgroundColor: '#5e35b1',
                                    color: 'white',
                                    marginRight: '9px',
                                    marginLeft: '9px',
                                    borderRadius: '5px',
                                    fontSize: '13px',
                                    fontFamily: 'Helvetica',
                                    textAlign: 'center'
                                }}
                                sx={{ p: 4 }}
                            >
                                {question.question}
                            </Typography>
                            <List>
                                {question.options.map((opt, index) => (
                                    <ListItem disablePadding>
                                        <ListItemButton
                                            component="a"
                                            href="#simple-list"
                                            style={{ paddingTop: '-1px', paddingBottom: '-1px' }}
                                        >
                                            <div key={index} style={{ marginTop: '5px' }} ref={index.toString()}>
                                                <FormControlLabel
                                                    value="female"
                                                    control={
                                                        <Radio
                                                            id={index}
                                                            checked={this.state.selectedValue === index.toString()}
                                                            onChange={this.handleChange}
                                                            value={index.toString()}
                                                            name="radio-button-demo"
                                                            style={{ color: '#5e35b1' }}
                                                            aria-label="A"
                                                        />
                                                    }
                                                    label={<ListItemText primary={opt}></ListItemText>}
                                                />
                                            </div>
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                            <div className={this.props.classes.footer}>
                                <Button
                                    onClick={this.revealCorrect}
                                    variant="raised"
                                    style={{ backgroundColor: '#5e35b1', color: 'white' }}
                                    sx={{ mb: 2 }}
                                >
                                    Submit
                                </Button>
                                {moveRight ? (
                                    <Button
                                        onClick={this.moveNext}
                                        variant="raised"
                                        color="primary"
                                        style={{ float: 'right', backgroundColor: '#5e35b1', color: 'white' }}
                                        sx={{ mb: 2 }}
                                    >
                                        Next
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={this.moveNext}
                                        disabled
                                        variant="raised"
                                        color="primary"
                                        style={{ float: 'right', backgroundColor: '#5e35b1', color: 'white' }}
                                        sx={{ mb: 2 }}
                                    >
                                        Next
                                    </Button>
                                )}
                            </div>
                        </Grid>
                    </Paper>
                )}
            </div>
        );
    }
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
