import React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from "moment";
import useStyles from './styles'; 
import { useDispatch } from 'react-redux';

import { deleteTask } from '../../../actions/tasks';

const Task = ({ task, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
            <div className={classes.overlay2}>
                <Button style={{color: 'black'}} size="small" onClick={() => setCurrentId(task._id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>{task.title}</Typography>
                <Typography className={classes.title} variant="body2">{moment(task.createdTime).fromNow()}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(deleteTask(task._id))}>
                    <CheckIcon fontSize="small"/>
                    Complete
                </Button>
            </CardActions>

        </Card>
    );
}

export default Task;