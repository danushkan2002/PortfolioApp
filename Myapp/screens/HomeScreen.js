import { View, Text } from 'react-native'
import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { listProductDetails } from '../actions/ProductActions'

const HomeScreen = () => {
    const productDetails = useSelector(state => state.productDetails)
    const { product , loading, error,} = productDetails

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(listProductDetails())
      
    }, [dispatch]);
  return (
    <View>
      <Text>
      {
        error ?
        <Text>{error}</Text> :
        loading ?
        <Text>Loading</Text> :
        <Text>{product.city}</Text> 
      }
      </Text>
    </View>
  )
}

export default HomeScreen