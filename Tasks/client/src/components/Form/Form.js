import React, {useState, useEffect} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createTask, updateTask } from '../../actions/tasks';

const Form = ({ currentId, setCurrentId }) => {
    const [taskData, setTaskData] = useState({ title: '' });
    const task = useSelector((state) => currentId ? state.tasks.find((t) => t._id === currentId) : null);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        if(task) setTaskData(task);
    }, [task])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updateTask(currentId, taskData));
        } else {
            dispatch(createTask(taskData));
        }

        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setTaskData({ title: '' });
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Edit Task' : 'Create a Task'}</Typography>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={taskData.title} onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}/>
                <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;