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

export const todayMessagesReducer = (state = { todayMessages:[] }, action) => {
    switch(action.type) {
        case  TODAY_MESSAGES_REQUEST:
            return {...state, todayMessagesLoading: true}

        case  TODAY_MESSAGES_SUCCESS:
            return {todayMessagesLoading: false, todayMessages: action.payload}

        case  TODAY_MESSAGES_FAIL:
            return {todayMessagesLoading: false, todayMessagesError: action.payload}

        case  TODAY_MESSAGES_RESET:
            return { todayMessages:[] }
    
        default:
            return state
    }
}

export const yesterdayMessagesReducer = (state = {yesterdayMessages:[] }, action) => {
    switch(action.type) {
        case  YESTERDAY_MESSAGES_REQUEST:
            return {...state, yesterdayMessagesLoading: true}

        case  YESTERDAY_MESSAGES_SUCCESS:
            return {yesterdayMessagesLoading: false, yesterdayMessages: action.payload}

        case  YESTERDAY_MESSAGES_FAIL:
            return {yesterdayMessagesLoading: false, yesterdayMessagesError: action.payload}

        case  YESTERDAY_MESSAGES_RESET:
            return {yesterdayMessages:[]}
    
        default:
            return state
    }
}

export const monthMessagesReducer = (state = { monthMessages:[] }, action) => {
    switch(action.type) {
        case  MONTH_MESSAGES_REQUEST:
            return {...state, monthMessagesLoading: true}

        case  MONTH_MESSAGES_SUCCESS:
            return {monthMessagesLoading: false, monthMessages: action.payload}

        case  MONTH_MESSAGES_FAIL:
            return {monthMessagesLoading: false, monthMessagesError: action.payload}

        case  MONTH_MESSAGES_RESET:
            return { monthMessages:[] }
    
        default:
            return state
    }
}

export const allMessagesReducer = (state = { allMessages:[]}, action) => {
    switch(action.type) {
        case  ALL_MESSAGES_REQUEST:
            return {...state, allMessagesLoading: true}

        case  ALL_MESSAGES_SUCCESS:
            return {allMessagesLoading: false, allMessages: action.payload}

        case  ALL_MESSAGES_FAIL:
            return {allMessagesLoading: false, allMessagesError: action.payload}

        case  ALL_MESSAGES_RESET:
            return {allMessages:[]}
    
        default:
            return state
    }
}

export const messageCreateReducer = (state = {}, action) => {
    switch(action.type) {
        case POST_MESSAGE_REQUEST:
            return {messageLoading: true, messageSuccess:false}

        case POST_MESSAGE_SUCCESS:
            return {messageLoading: false, message: action.payload, messageSuccess:true}

        case POST_MESSAGE_FAIL:
            return {messageLoading: false, messageError: action.payload, messageSuccess:false}

        case POST_MESSAGE_RESET:
            return {}
    
            
        default:
            return state
    }
}

export const messageDeleteReducer = (state = {}, action) => {
    switch(action.type) {
        case DELETE_MESSAGE_REQUEST:
            return {messageDeleteLoading: true}

        case DELETE_MESSAGE_SUCCESS:
            return {messageDeleteLoading: false, messageDelete: action.payload}

        case DELETE_MESSAGE_FAIL:
            return {messageDeleteLoading: false, messageDeleteError: action.payload}

        default:
            return state
    }
}
