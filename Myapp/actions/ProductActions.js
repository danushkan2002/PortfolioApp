import {PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,} from '../constants/ProductConstant'
    
import axios from 'axios'

    export const listProductDetails = () => async (dispatch) => {
        try {
            dispatch({ type: PRODUCT_DETAILS_REQUEST })
    
            const { data } = await axios.get(`https://mocki.io/v1/b5114eb6-c51f-4698-a24e-2d2176f7281b`)
    
            dispatch({
                type: PRODUCT_DETAILS_SUCCESS,
                payload: data
            })
    
        } catch (error) {
            dispatch({
                type: PRODUCT_DETAILS_FAIL,
                payload: error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
            })
        }
    }
    