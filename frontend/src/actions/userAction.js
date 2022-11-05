import axios from "axios";
import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,

    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAIL,
    GET_USER_RESET
} from '../constants/userConstant'

export const login = (email, password) => async(dispatch) => {
    try {
        dispatch({
            type : USER_LOGIN_REQUEST
        })

        const config = {
            headers : {
                'Content-type':'application/json',
            }
        }

        const {data} = await axios.post(
            '/api/auth/login/',
            {'email': email, 'password' : password},
            config
        )
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch(error) {
        dispatch({
            type : USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getProfileDetails = () => async(dispatch, getState) => {
    try {
        dispatch({
            type:GET_USER_REQUEST
        })

        const {
            userLogin : {userInfo},
        } = getState()
        
        const config = {
            headers : {
                'Content-type':'application/json',
                Authorization : `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get(
            `/api/auth/profile/`,
            config
        )

        dispatch({
            type : GET_USER_SUCCESS,
            payload : data
        })

    } catch(error) {
        dispatch({
            type : GET_USER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}



export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
    dispatch({ type: GET_USER_RESET })
}