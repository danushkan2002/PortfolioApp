import { USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,

    USER_PROFILE_REQUEST,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_FAIL,
    USER_PROFILE_RESET,

} from '../constants/UserConstants'


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
    switch (action.type) {
        case USER_PROFILE_REQUEST:
            return { ...state, loading: true }

        case USER_PROFILE_SUCCESS:
            return { loading: false, user: action.payload }

        case USER_PROFILE_FAIL:
            return { loading: false, error: action.payload }

        case USER_PROFILE_RESET:
            return {  }

        default:
            return state
    }
}