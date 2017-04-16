import {LOGIN_USER_ERROR, LOGIN_USER_PENDING, LOGIN_USER_SUCCESS} from "./constants";

const initialState = {
    token: null,
    user: {},
    hasError: false,
    submitting: false
};

export default (state = initialState, action) => {
    switch(action.type){
        case LOGIN_USER_PENDING:
            return {
                ...state,
                token: null,
                user:{},
                hasError: false,
                submitting: true
            };
        case LOGIN_USER_ERROR:
            return {
                ...state,
                token: null,
                user:{},
                hasError: true,
                submitting: false
            };
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                token: action.data.meta,
                user:{},
                hasError: true,
                submitting: false
            };
        default:
            return state
    }
}