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
import { UIButton } from '../components'
import { isValidEmail,isValidPassword } from '../utilies/Validations' 
function Register({navigation},props){
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
        <ImageBackground style={{ flex: 100, backgroundColor: "#6699FF" }}>
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
                            color: 'white'
                        }}
                    >Already Have an Account ?</Text>
                    <Image
                       
                        style={{
                            flex: 50,
                            marginLeft: 20,
                            marginTop: 30,
                            marginRight: 10,
                            height: 190,
                            width: 190
                        }}
                        source={require('../asset/Login.png')} />
                </View>
            </View>
            <View style={{
                flex: 50,
                backgroundColor:'white',
                margin: 10,
                borderRadius:20
                

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
                        Retype Password :
                    </Text>
                    <TextInput
                        onChangeText={(text) => {
                            seteroroPassword(isValidPassword(text) == true ? '' : 'Password not >=3 character')
                            setpassword(text)
                        }}
                        secureTextEntry={true}
                        placeholder='enter your password'
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
                {KeyboardIshow == false && <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                

            }}>
                <TouchableOpacity
                    disabled={isValidEmailandPassword()==false}
                    onPress={() => {
                        navigation.navigate('Login')
                    }}
                    style={{
                        marginTop:20,
                        
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
                       Register
                    </Text>
                </TouchableOpacity>
              
            </View>}
            </View>
            
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
export default Register