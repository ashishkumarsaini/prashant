import * as actionTypes from '../../actions/actionTypes/todoActionTypes/todoActionTypes';

const todoReducer = (state = [], action) => {
    switch (action.type) {

        case actionTypes.CREATE_NEW_TODO:
            console.log(action)
            return [
                ...state,
                Object.assign({}, action.todo)
            ];
        case actionTypes.REMOVE_TODO:
            return state.filter((data, i) => i !== action.id);
        default:
            return state;
    }
};

export default todoReducer;