import { combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {configureStore}  from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userProfileReducer, userLoginReducer, userRegisterReducer } from './reducers/userReducer'
import { allMessagesReducer, messageCreateReducer, messageDeleteReducer, monthMessagesReducer, todayMessagesReducer, yesterdayMessagesReducer } from './reducers/inboxReducer'


const reducer = combineReducers({
    userLogin : userLoginReducer,
    userProfile : userProfileReducer,
    userRegisterReducer: userRegisterReducer,

    todayMessagesReducer : todayMessagesReducer,
    yesterdayMessagesReducer : yesterdayMessagesReducer,
    monthMessagesReducer : monthMessagesReducer,
    allMessagesReducer : allMessagesReducer,
    messageCreateReducer: messageCreateReducer,
    messageDeleteReducer: messageDeleteReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const inisialState = {
    userLogin : {userInfo : userInfoFromStorage}
}

const middlware = [thunk]

const store = configureStore({reducer}, inisialState, 
    composeWithDevTools(applyMiddleware(...middlware)))

export default store