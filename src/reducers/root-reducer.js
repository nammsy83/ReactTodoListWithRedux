import { combineReducers } from 'redux';
import todoReducer from './todo-reducer';
import visibilityFilter from './filter-reducer';

export default combineReducers({
    todos: todoReducer,
    visibilityFilter
})