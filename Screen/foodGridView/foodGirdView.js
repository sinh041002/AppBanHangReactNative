import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    TextInput,
    KeyboardAvoidingView,
    Keyboard,
    ScrollView
} from 'react-native'
import FoodTtem from '../foodlist/FoodTtem'
import React, { useEffect, useState } from 'react'

const foodGirdView = () => {
    const [food, setFood] = useState([
        {
            name: 'ca loc xao thit bo.ca loc xao thit bo ',
            status: 'Opening soon',
            price: 123.56,
            website: 'abc.com',
            socialNetwork:
            {
                facebook: 'https://www.facebook.com/',
                instagram: 'https://www.instagram.com/',
                twitter: 'https://twitter.com/?lang=vi'

            }
            ,
            url: 'https://i-vnexpress.vnecdn.net/2020/01/22/image002-3489-1579657463.jpg',

        },
        {
            name: 'ca loc xao ',
            status: 'Opening',
            price: 12333.56,
            website: 'abcd.com',
            socialNetwork:
            {
                facebook: 'https://www.facebook.com/',

            }
            ,
            url: 'https://cdn.tgdd.vn/Files/2020/12/11/1313026/cach-lam-thit-bo-xao-nam-kim-cham-ngon-mieng-hap-dan-khong-bi-dai-202012111427345000.jpg'
        },
        {
            name: ' xao thit bo ',
            status: 'Opening',
            price: 12311.56,
            website: 'abc21.com',
            socialNetwork:
            {
                facebook: 'https://www.facebook.com/',
                instagram: 'https://www.instagram.com/',
            }
            ,
            url: 'https://toinayangi.vn/wp-content/uploads/2014/11/thit-bo-xao-can-toi-tay-2.jpg'

        },
        {
            name: 'ca loc xao thit bo ',
            status: 'Closing',
            price: 1236.56,
            website: 'abc41233.com',
            socialNetwork:
            {

                instagram: 'https://www.instagram.com/',
                twitter: 'https://twitter.com/?lang=vi'
            }
            ,
            url: 'https://monngonchuabenh.com/wp-content/uploads/2016/05/thit-bo-xao-ngong-cai.png'

        },
        {
            name: ' xao thit bo voi ca ',
            status: 'Closing',
            price: 1236.56,
            website: 'abc41233.com',
            socialNetwork:
            {

                instagram: 'https://www.instagram.com/',
                twitter: 'https://twitter.com/?lang=vi'
            }
            ,
            url: 'https://monngonchuabenh.com/wp-content/uploads/2016/05/thit-bo-xao-ngong-cai.png'

        },

        {
            name: 'ca loc xao thit  ',
            status: 'Closing',
            price: 1236.56,
            website: 'abc41233.com',
            socialNetwork:
            {

                instagram: 'https://www.instagram.com/',
                twitter: 'https://twitter.com/?lang=vi'
            }
            ,
            url: 'https://monngonchuabenh.com/wp-content/uploads/2016/05/thit-bo-xao-ngong-cai.png'

        },
        {
            name: 'ca loc xao thit bo.ca loc xao thit bo ',
            status: 'Opening soon',
            price: 123.56,
            website: 'abc.com',
            socialNetwork:
            {
                facebook: 'https://www.facebook.com/',
                instagram: 'https://www.instagram.com/',
                twitter: 'https://twitter.com/?lang=vi'

            }
            ,
            url: 'https://i-vnexpress.vnecdn.net/2020/01/22/image002-3489-1579657463.jpg',

        },
        {
            name: 'ca loc xao ',
            status: 'Opening',
            price: 12333.56,
            website: 'abcd.com',
            socialNetwork:
            {
                facebook: 'https://www.facebook.com/',

            }
            ,
            url: 'https://cdn.tgdd.vn/Files/2020/12/11/1313026/cach-lam-thit-bo-xao-nam-kim-cham-ngon-mieng-hap-dan-khong-bi-dai-202012111427345000.jpg'
        },
        {
            name: ' xao thit bo ',
            status: 'Opening',
            price: 12311.56,
            website: 'abc21.com',
            socialNetwork:
            {
                facebook: 'https://www.facebook.com/',
                instagram: 'https://www.instagram.com/',
            }
            ,
            url: 'https://toinayangi.vn/wp-content/uploads/2014/11/thit-bo-xao-can-toi-tay-2.jpg'

        },
        {
            name: 'ca loc xao thit bo ',
            status: 'Closing',
            price: 1236.56,
            website: 'abc41233.com',
            socialNetwork:
            {

                instagram: 'https://www.instagram.com/',
                twitter: 'https://twitter.com/?lang=vi'
            }
            ,
            url: 'https://monngonchuabenh.com/wp-content/uploads/2016/05/thit-bo-xao-ngong-cai.png'

        },
        {
            name: ' xao thit bo voi ca ',
            status: 'Closing',
            price: 1236.56,
            website: 'abc41233.com',
            socialNetwork:
            {

                instagram: 'https://www.instagram.com/',
                twitter: 'https://twitter.com/?lang=vi'
            }
            ,
            url: 'https://monngonchuabenh.com/wp-content/uploads/2016/05/thit-bo-xao-ngong-cai.png'

        },

        {
            name: 'ca loc xao thit  ',
            status: 'Closing',
            price: 1236.56,
            website: 'abc41233.com',
            socialNetwork:
            {

                instagram: 'https://www.instagram.com/',
                twitter: 'https://twitter.com/?lang=vi'
            }
            ,
            url: 'https://monngonchuabenh.com/wp-content/uploads/2016/05/thit-bo-xao-ngong-cai.png'

        },

    ])
    function getColorFromStatus(status) {
        if (status == 'Opening')
            return "#33FF00"
        else
            if (status == 'Closing')
                return "#FF0000"
            else
                return "#FFCC33"
    }
    return (
        <View style={{ flex: 1,}}>
            <FlatList
                data={food}
                numColumns={2}
                renderItem={({ item,index }) => {
                    let { name, price, socialNetwork, status, url, website } = item
                    return <View style={{
                        width:'50%',flex:1 ,backgroundColor:'white',
                        borderColor:'Black',
                        paddingHorizontal:'1%',
                        borderRadius:10,
                        margin:2
                    }}>
                        <TouchableOpacity
                            style={{
                                borderRadius: 10,
                                borderColor: 'black',
                                width: '50%',
                                

                            }}
                            onPress={() => {
                                alert(`day la ${name}`)
                            }}>

                            <View>
                                <View
                                    style={{
                                        flexDirection:'row',
                                        height: 150,

                                    }}>
                                    <View>
                                        <Image
                                            style={{
                                                marginTop: 20,
                                                marginLeft: '2%',
                                                width: 50,
                                                height: 50,
                                                borderRadius: 10,

                                            }}
                                            source={{
                                                uri: url
                                            }} />


                                    </View>
                                    <View
                                        style={{
                                           
                                            margin: 5,
                                           

                                        }}
                                    >
                                        <Text
                                            style={{

                                                color: 'black',
                                                fontWeight: 'bold'
                                            }}
                                        >{name}</Text>
                                     <View/>   
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
                                                    color: getColorFromStatus(item.status),
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
                                                    marginTop:3,
                                                    fontSize:10,
                                                    color: 'black',
                                                    fontWeight: 'bold'
                                                }}
                                            >{website}</Text>
                                        </View>
                                        <View
                                            style={{
                                                flexDirection: 'row',


                                            }}>

                                            {socialNetwork.facebook != undefined &&
                                                <Image source={require('../../asset/facebook.png')}
                                                    style={{
                                                        marginRight: 5,
                                                        width: 20,
                                                        height: 20
                                                    }}
                                                />}
                                            {socialNetwork.twitter != undefined &&
                                                <Image source={require('../../asset/twitter.png')}
                                                    style={{
                                                        marginRight: 5,
                                                        width: 20,
                                                        height: 20
                                                    }}
                                                />}
                                            {socialNetwork.instagram != undefined &&
                                                <Image source={require('../../asset/instagram.png')}
                                                    style={{
                                                        width: 20,
                                                        height: 20
                                                    }}
                                                />}

                                        </View>
                                    </View>
                                </View>
                            </View>



                        </TouchableOpacity>
                    </View>
                }}
            >

            </FlatList>


        </View>
    )
}

export default foodGirdView
    // <FoodTtem food={item} key={item.name} onPress={()=>{
    //     alert('ha')
    // }}></FoodTtem>