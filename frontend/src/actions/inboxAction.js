import {
    TODAY_MESSAGES_REQUEST,
    TODAY_MESSAGES_SUCCESS,
    TODAY_MESSAGES_FAIL,
    TODAY_MESSAGES_RESET,

    YESTERDAY_MESSAGES_REQUEST,
    YESTERDAY_MESSAGES_SUCCESS,
    YESTERDAY_MESSAGES_FAIL,
    YESTERDAY_MESSAGES_RESET,
    
    MONTH_MESSAGES_REQUEST,
    MONTH_MESSAGES_SUCCESS,
    MONTH_MESSAGES_FAIL,
    MONTH_MESSAGES_RESET,

    ALL_MESSAGES_REQUEST,
    ALL_MESSAGES_SUCCESS,
    ALL_MESSAGES_FAIL,
    ALL_MESSAGES_RESET,

    POST_MESSAGE_REQUEST,
    POST_MESSAGE_SUCCESS,
    POST_MESSAGE_FAIL,
    POST_MESSAGE_RESET,

    DELETE_MESSAGE_REQUEST,
    DELETE_MESSAGE_SUCCESS,
    DELETE_MESSAGE_FAIL,
    DELETE_MESSAGE_RESET,

} from '../constants/inboxConstant'
import axios from 'axios'

export const getTodayMessages = () => async(dispatch, getState) => {
    try {
        dispatch({
            type:TODAY_MESSAGES_REQUEST
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
            `/api/inbox/today/`,
            config
        )

        dispatch({
            type : TODAY_MESSAGES_SUCCESS,
            payload : data
        })

    } catch(error) {
        dispatch({
            type : TODAY_MESSAGES_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const getYesterdayMessages = () => async(dispatch, getState) => {
    try {
        dispatch({
            type:YESTERDAY_MESSAGES_REQUEST
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
            `/api/inbox/yesterday/`,
            config
        )

        dispatch({
            type : YESTERDAY_MESSAGES_SUCCESS,
            payload : data
        })

    } catch(error) {
        dispatch({
            type : YESTERDAY_MESSAGES_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getMonthMessages = () => async(dispatch, getState) => {
    try {
        dispatch({
            type:MONTH_MESSAGES_REQUEST
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
            `/api/inbox/month/`,
            config
        )

        dispatch({
            type : MONTH_MESSAGES_SUCCESS,
            payload : data
        })

    } catch(error) {
        dispatch({
            type : MONTH_MESSAGES_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getAllMessages = () => async(dispatch, getState) => {
    try {
        dispatch({
            type:ALL_MESSAGES_REQUEST
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
            `/api/inbox/`,
            config
        )

        dispatch({
            type : ALL_MESSAGES_SUCCESS,
            payload : data
        })

    } catch(error) {
        dispatch({
            type : ALL_MESSAGES_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const createMessage = (email, message) => async(dispatch) => {
    try{
        dispatch({
            type : POST_MESSAGE_REQUEST
        })

        const config = {
            headers : {
                'Content-type':'application/json',
            }
        }
        const {data} = await axios.post(
            '/api/inbox/create/',
            {'email': email, 'message':message},
            config
        )

        dispatch({
            type : POST_MESSAGE_SUCCESS,
            payload : data
        })

    } catch(error) {
        dispatch({
            type : POST_MESSAGE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const deleteMessage = (id) => async(dispatch, getState) => {
    try{
        dispatch({
            type : POST_MESSAGE_REQUEST
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
        const {data} = await axios.delete(
            `/api/inbox/delete/${id}`,
            config
        )

        dispatch({
            type : POST_MESSAGE_SUCCESS,
            payload : data
        })

    } catch(error) {
        dispatch({
            type : POST_MESSAGE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const messageClear = () => (dispatch) => {
    dispatch({ type: POST_MESSAGE_RESET })
}