import Icon from 'react-native-vector-icons/FontAwesome'
import {  Text,TouchableOpacity } from 'react-native'
import React from 'react'


function UIButton(props) {


    return <TouchableOpacity
        onPress={props.onPress}
        style={{
            borderColor: 'white',
            borderWidth: 1,
            height: 60,
            borderRadius: 5,
            marginBottom: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: props.isSelected == true ? 'white':null
        }}>
        {props.isSelected==true && <Icon

            name={"check-circle"}
            style={{
                color: 'black',
                position: 'absolute',
                left: 10,
                top: 20
            }}
        />}
        <Text style={{
            color: 'black',

        }}>{props.title}</Text>
    </TouchableOpacity >

}
export default UIButton