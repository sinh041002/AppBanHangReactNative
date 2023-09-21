import { View, Text } from 'react-native'
import React from 'react'

const UIHeader = (props) => {
    const {title} = props
  return (
    
    <View style={{
        borderRadius:10,
        height:60,
        backgroundColor:'red'}}>
            <Text 
            style={{
                fontSize:30,
                color:'black',
                alignSelf:'center',
                marginTop:7

            }}
            >{title}</Text>
      </View>
  )
}

export default UIHeader