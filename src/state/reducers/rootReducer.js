import { combineReducers } from 'redux';
import todo from './todoReducer/todoReducer';

export default combineReducers({
    todo: todo
});