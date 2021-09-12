import { FETCH_ALL, CREATE, UPDATE, DELETE  } from '../constants/actionTypes';

export default (tasks = [], action) => {
    switch (action.type) {
        case DELETE:
            return tasks.filter((task) => task._id !== action.payload);
        case UPDATE:
            return tasks.map((task) => task._id === action.payload._id ? action.payload : task);
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...tasks, action.payload];
        default:
            return tasks;
    }
}