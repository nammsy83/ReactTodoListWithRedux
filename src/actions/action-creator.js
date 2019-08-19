import TODO_ACTION_TYPES from './action.types';

let todoId = 2;

export const addTodo = text => ({
    type: TODO_ACTION_TYPES.ADD_TODO,
    id: todoId++,
    text
})

export const toggleTodo = (id) => ({
    type: TODO_ACTION_TYPES.TOGGLE_TODO,
    id
})

export const deleteTodo = (id) => ({
    type: TODO_ACTION_TYPES.DELETE_TODO,
    id
})


export const setVisibilityFilter = filter => ({
    type: TODO_ACTION_TYPES.SET_VISIBILITY_FILTER,
    filter
})