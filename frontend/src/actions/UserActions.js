import axios from "axios";

import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,

    USER_PROFILE_REQUEST,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_FAIL,
    USER_PROFILE_RESET,
} from '../constants/UserConstants'

export const login = (username, password) => async (dispatch) => {
    try {
        dispatch({
            type : USER_LOGIN_REQUEST
        })

        const config = {
            headers : {
                'Content-type' : 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/accounts/login/',
            { "username": username, "password": password },
            config
        )

        dispatch({
            type :USER_LOGIN_SUCCESS,
            payload:data,
            
        })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch(error) {
        dispatch({
            type :  USER_LOGIN_FAIL,
            payload : error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}


export const getProfile = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_PROFILE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(
            `/api/accounts/profile/`,
            config
        )

        dispatch({
            type: USER_PROFILE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USER_PROFILE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
