import {
        USER_LOGIN_REQUEST,
        USER_LOGIN_SUCCESS,
        USER_LOGIN_FAIL,
        USER_LOGOUT,

        GET_USER_REQUEST,
        GET_USER_SUCCESS,
        GET_USER_FAIL,
        GET_USER_RESET,

} from '../constants/userConstant'

export const userLoginReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_LOGIN_REQUEST:
            return {loading: true}

        case USER_LOGIN_SUCCESS:
            return {loading: false, userInfo: action.payload}

        case USER_LOGIN_FAIL:
            return {loading: false, error: action.payload}

        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}

export const userProfileReducer = (state = {}, action) => {
    switch(action.type) {
        case GET_USER_REQUEST:
            return {userLoading: true}

        case GET_USER_SUCCESS:
            return {userLoading: false, user: action.payload}

        case GET_USER_FAIL:
            return {userLoading: false, userError: action.payload}

        case GET_USER_RESET:
            return {}

        default:
            return state
    }
}
