import TODO_ACTION_TYPES from '../actions/action.types';

const visibilityFilter = (state = TODO_ACTION_TYPES.SHOW_ALL, action) => {
    switch (action.type) {
        case TODO_ACTION_TYPES.SET_VISIBILITY_FILTER:
            return action.filter;

        default: return state
    }
}

export default visibilityFilter;