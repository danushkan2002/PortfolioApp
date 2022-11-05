import { combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {configureStore}  from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userProfileReducer, userLoginReducer } from './reducers/userReducer'
import { allMessagesReducer, messageCreateReducer, monthMessagesReducer, todayMessagesReducer, yesterdayMessagesReducer } from './reducers/inboxReducer'


const reducer = combineReducers({
    userLogin : userLoginReducer,
    userProfile : userProfileReducer,
    
    todayMessagesReducer : todayMessagesReducer,
    yesterdayMessagesReducer : yesterdayMessagesReducer,
    monthMessagesReducer : monthMessagesReducer,
    allMessagesReducer : allMessagesReducer,
    messageCreateReducer: messageCreateReducer,
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