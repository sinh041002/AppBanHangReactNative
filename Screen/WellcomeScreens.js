import { View, Text } from 'react-native'
import React from 'react'
import { sum2Number,substract2Number } from '../utilies/Calculation';
const WellcomeScreens = (props) => {
    let{x,y}=props;
    const{person}=props
    const{name,age,email}=person
    const{products}=props
    
  return (
    <View>
        <Text>name ={name},age={age},email={email}</Text>
      
      {products.map(eachProducts=>
        <Text>{eachProducts.productName},{eachProducts.year}</Text>
        )}
      <Text>x+y = {sum2Number(x,y)}</Text>
    </View>
  )
}

export default WellcomeScreens