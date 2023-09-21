import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    TextInput,
    KeyboardAvoidingView,
    Keyboard
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { UIButton } from '../../components'
import { isValidEmail, isValidPassword } from '../../utilies/Validations'
function getColorFromStatus(status) {
    if (status == 'Opening')
        return "#33FF00"
    else
        if (status == 'Closing')
            return "#FF0000"
        else
            return "#FFCC33"
}

const FoodTtem = (props) => {
    let { name, price, socialNetwork, status, url, website } = props.food
const onPress=props.onPress
    return (
        <TouchableOpacity
            onPress={onPress}>

            <View>
                <View
                    style={{
                        flexDirection: 'row',
                        height: 150,

                    }}>
                    <View>
                    <Image
                        style={{
                            marginTop: 20,
                            marginStart: 10,
                            width: 100,
                            height: 100,
                            borderRadius: 10,

                        }}
                        source={{
                            uri: url
                        }}/>

                    
                    </View>
                    <View
                        style={{
                            margin: 20,
                            flex: 1,

                        }}
                    >
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold'
                            }}
                        >{name}</Text>
                        <View style={{ height: 1, backgroundColor: 'black' }}></View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text
                                style={{
                                    color: 'black',
                                    fontWeight: 'bold'
                                }}
                            >Status: </Text>
                            <Text
                                style={{
                                    color: getColorFromStatus(status),
                                    fontWeight: 'bold'
                                }}
                            >{status}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text
                                style={{
                                    color: 'black',
                                    fontWeight: 'bold'
                                }}
                            >Price : </Text>
                            <Text
                                style={{
                                    color: "black",
                                    fontWeight: 'bold'
                                }}
                            >{price}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text
                                style={{
                                    color: 'black',
                                    fontWeight: 'bold'
                                }}
                            >Website : </Text>
                            <Text
                                style={{
                                    color: 'black',
                                    fontWeight: 'bold'
                                }}
                            >{website}</Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',


                            }}>

                            {socialNetwork.facebook != undefined && <Image source={require('../../asset/facebook.png')}
                                style={{
                                    marginRight: 5,
                                    width: 20,
                                    height: 20
                                }}
                            ></Image>}
                            {socialNetwork.twitter != undefined && <Image source={require('../../asset/twitter.png')}
                                style={{
                                    marginRight: 5,
                                    width: 20,
                                    height: 20
                                }}
                            ></Image>}
                            {socialNetwork.instagram != undefined && <Image source={require('../../asset/instagram.png')}
                                style={{
                                    width: 20,
                                    height: 20
                                }}
                            ></Image>}

                        </View>
                    </View>
                </View>
            </View>

            <Text>Foodlist</Text>

        </TouchableOpacity>

    )
}

export default FoodTtem