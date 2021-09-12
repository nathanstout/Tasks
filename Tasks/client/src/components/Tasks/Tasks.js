import React from 'react';
import { List, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Task from './Task/Task';
import useStyles from './styles'; 

const Tasks = ({ setCurrentId }) => {
    const tasks = useSelector((state) => state.tasks);
    const classes = useStyles();

    return (
        !tasks.length ? <CircularProgress /> : (
            <List className={classes.container} container alignItems="stretch" spacing={3}> 
                {tasks.map((task) => (
                    <List key={task._id} item xs={12} sm={6}>
                        <Task task={task} setCurrentId={setCurrentId}/>
                    </List>
                ))}
            </List>
        )
    );
}

export default Tasks;