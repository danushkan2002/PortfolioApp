import { legacy_createStore as createStore , combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { userLoginReducer, userProfileReducer } from './reducers/UserReducer'

const reducer = combineReducers({
    userLogin : userLoginReducer,
    userProfile : userProfileReducer,
})

const middleware =[thunk]

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null



const inisialState = {
    userLogin : { userInfo : userInfoFromStorage },
}

const store = createStore(reducer,inisialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store