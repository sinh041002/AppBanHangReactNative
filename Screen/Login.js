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
import {Welcome,
    
    Register,  
    Foodlist,
    foodGirdView,
    Settings
    } from '../Screen'

import { isValidEmail,isValidPassword } from '../utilies/Validations' 
const Login = ({navigation}) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [errorEmail, seteroroEmail] = useState('')
    const [errorPassword, seteroroPassword] = useState('')
    const isValidEmailandPassword=()=>password.length>=0&&email.length>=0
                                        &&isValidEmail(email)==true &&isValidPassword(password)==true

    const [KeyboardIshow, setKeyboardIshow] = useState(false)
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardIshow(true)
        })
        Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardIshow(false)
        })
    }
    )


    return (
        <KeyboardAvoidingView
            style={{
                flex: 100,
            }}
        >
            <ImageBackground style={{ flex: 100, backgroundColor: 'white' }}>
                <View style={{
                    flex: 28,

                }}>
                    <View
                        style={{
                            padding: 10,
                            flexDirection: 'row'
                        }}>
                        <Text
                            style={{
                                justifyContent: 'center',
                                alignSelf: 'center',
                                flex: 50,
                                fontSize: 23,
                                color: 'black'
                            }}
                        >Already Have an Account ?</Text>
                        <Image
                            style={{
                                flex: 50,
                                marginLeft: 20,
                                marginTop: 30,
                                marginRight: 10,
                                height: 200,
                                width: 200
                            }}
                            source={require('../asset/Login.png')} />
                    </View>
                </View>
                <View style={{
                    flex: 22,

                }}>
                    <View
                        style={{
                            padding: 10
                        }}
                    >

                        <Text
                            style={{
                                fontSize:17,
                                color: 'red'
                            }}>
                            Email :
                        </Text>
                        <TextInput
                            onChangeText={(text) => {
                                seteroroEmail(isValidEmail(text) == true ? '' : 'Email not in correct format')
                                setemail(text)
                            }}
                            placeholderTextColor={'black'}
                            placeholder='sinhlata@gmail.com'
                            style={{

                                color: 'black'
                            }}>

                        </TextInput>
                        <View style={{ height: 1, backgroundColor: 'black', width: '100%' }}></View>
                        <Text
                        style={{
                            color:'red',
                            fontSize:10
                        }}
                        >{errorEmail}</Text>
                    </View>
                    <View
                        style={{
                            padding: 10
                        }}
                    >

                        <Text
                            style={{
                                fontSize:17,
                                color: 'red'
                            }}>
                            Password :
                        </Text>
                        <TextInput
                            onChangeText={(text) => {
                                seteroroPassword(isValidPassword(text) == true ? '' : 'Password not >=3 character')
                                setpassword(text)
                            }}
                            secureTextEntry={true}
                            placeholder='Enter your password'
                            placeholderTextColor={'black'}
                            style={{
                                color: 'black',

                            }}>

                        </TextInput>
                        
                        <View style={{ height: 1, backgroundColor: 'black', width: '100%' }}></View>
                        <Text
                        style={{
                            color:'red',
                            fontSize:10
                        }}
                        >{errorPassword}</Text>
                    </View>
                </View>
                {KeyboardIshow == false && <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 18,

                }}>
                    <TouchableOpacity
                        disabled={isValidEmailandPassword()==false}
                        onPress={() => {
                            navigation.navigate('Foodlist')
                        }}
                        style={{
                            height: 50,
                            backgroundColor:isValidEmailandPassword()==true?'red':"rgba(0,0,0,0.6)",
                            borderColor: 'black',
                            width: 200,
                            borderRadius: 99999999,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Text
                            style={{
                                color: 'white'
                            }}
                        >
                            Login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                           navigation.navigate('Register')
                            
                        }}
                        style={{
                            padding: 10
                        }}
                    >
                        <Text
                            style={{
                                color: 'red',
                                alignSelf: 'center',

                                fontSize: 16
                            }}
                        > New user ? Register now</Text>
                    </TouchableOpacity>
                </View>}
                {KeyboardIshow == false &&<View style={{
                    flex: 20,

                }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            height: 30,
                            alignItems: 'center',
                            paddingLeft: 20,
                            paddingRight: 20
                        }}
                    >

                        <View style={{ height: 1, backgroundColor: 'black', flex: 1 }}></View>
                        <Text style={{
                            color: 'black',
                            fontSize: 14,
                            alignSelf: 'center',
                            marginLeft: 20,
                            marginRight: 20
                        }} >Use other method</Text>
                        <View style={{ height: 1, backgroundColor: 'black', flex: 1 }}></View>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',

                            justifyContent: 'center'
                        }}>

                        <Image source={require('../asset/facebook.png')}
                            style={{
                                marginRight: 10,
                                width: 50,
                                height: 50
                            }}
                        ></Image>
                        <Image source={require('../asset/google.png')}
                            style={{
                                width: 50,
                                height: 50
                            }}
                        ></Image>

                    </View>
                </View>}
            </ImageBackground>



        </KeyboardAvoidingView>


    )
}

export default Login