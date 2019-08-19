import TODO_ACTION_TYPES from '../actions/action.types';

const initialState = [];


const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_ACTION_TYPES.ADD_TODO:
            return [
                ...state, {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case TODO_ACTION_TYPES.TOGGLE_TODO:
            return state.map(todo =>
                (todo.id === action.id) ?
                    { ...todo, completed: !todo.completed } :
                    todo
            )
        case TODO_ACTION_TYPES.DELETE_TODO:
            const numindex = parseInt(action.id)
            return state.filter(todo =>
                todo.id !== numindex
            )
        default:
            return state;
    }
}


export default todoReducer;