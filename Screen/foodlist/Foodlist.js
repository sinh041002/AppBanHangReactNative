
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
import FoodTtem from './FoodTtem'
import React, { useEffect, useState } from 'react'
import foodView from './foodView'
const Foodlist = ({ navigation }) => {
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


    ])
    const [textSearchFood, setTextSearchFood] = useState('')
    function filtersFood(food) {

        return food.filter(eachfood => eachfood.name.toLocaleLowerCase()
            .includes(textSearchFood.toLocaleLowerCase()))

    }
    const [categories, setCategories] = useState([
        {
            name: 'BBQ',
            url: 'https://cdn.tgdd.vn/2021/03/CookProduct/Bbq-la-gi-nguon-goc-va-cac-cach-tu-lam-bbq-tai-nha-vo-cung-don-gian-0-1200x676.jpg'
        },
        {
            name: 'coffee',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG'
        },
        {
            name: 'Breakfast',
            url: 'https://www.seriouseats.com/thmb/AVdCUACjl50RScwPNVRjVq-Nb4M=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__07__20170728-sunny-side-up-eggs-vicky-wasik-d07c5480d72e49cc85689c1d6d88495e.jpg'
        },
        {
            name: 'BBQ1',
            url: 'https://cdn.tgdd.vn/2021/03/CookProduct/Bbq-la-gi-nguon-goc-va-cac-cach-tu-lam-bbq-tai-nha-vo-cung-don-gian-0-1200x676.jpg'
        },
        {
            name: 'coffee1',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG'
        },
        {
            name: 'Breakfast1',
            url: 'https://www.seriouseats.com/thmb/AVdCUACjl50RScwPNVRjVq-Nb4M=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__07__20170728-sunny-side-up-eggs-vicky-wasik-d07c5480d72e49cc85689c1d6d88495e.jpg'
        },
        {
            name: 'BBQ2',
            url: 'https://cdn.tgdd.vn/2021/03/CookProduct/Bbq-la-gi-nguon-goc-va-cac-cach-tu-lam-bbq-tai-nha-vo-cung-don-gian-0-1200x676.jpg'
        },
        {
            name: 'coffee2',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG'
        },
        {
            name: 'Breakfast2',
            url: 'https://www.seriouseats.com/thmb/AVdCUACjl50RScwPNVRjVq-Nb4M=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__07__20170728-sunny-side-up-eggs-vicky-wasik-d07c5480d72e49cc85689c1d6d88495e.jpg'
        }
    ])
    return (


        <View style={{ flex: 1, }}>
            <View style={{
                height: 50,
                backgroundColor: 'white',
                paddingTop: 5,
                flexDirection: 'row'
            }}>
                <Image source={require('../../asset/search.png')}
                    style={{
                        position: 'absolute',
                        top: 14,
                        left: 12,
                        width: 20,
                        height: 20,
                    }}
                ></Image>
                <TextInput
                    onChangeText={(text) => {
                        setTextSearchFood(text)
                    }}
                    style={{
                        height: 40,
                        backgroundColor: "#666666",
                        marginHorizontal: 8,
                        flex: 1,
                        borderRadius: 6,
                        opacity: 0.7,
                        paddingStart: 30

                    }}>
                </TextInput>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Settings')
                }}>
                    <Image source={require('../../asset/list.png')}
                        style={{
                            marginRight: 5,
                            width: 35,
                            height: 35,

                        }}
                    />
                </TouchableOpacity>
            </View>


            <View style={{
                height: 60,backgroundColor:'white'
            }}>

               
                <View style={{ height: 50, flexDirection: 'row' }}>
                    <TouchableOpacity>
                    <Image style={{
                        height: 40,
                        width: 40,
                        margin: 5
                    }}
                        source={require('../../asset/left.png')}
                    />
                    </TouchableOpacity>
                    <View style={{flex:1}}></View>
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate('foodView')
                    }}>
                        
                    <Image style={{
                        height: 40,
                        width: 40,
                        marginTop: 5,
                        marginRight:10
                    }}
                        source={require('../../asset/shopping-cart.png')}
                    />
                    </TouchableOpacity>
                </View>

                <View style={{ height: 1, backgroundColor: 'black' }} />
            </View>

            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {filtersFood(food).length > 0 ? <ScrollView>
                    {filtersFood(food).map(eachfood => <FoodTtem food={eachfood} key={eachfood.name}
                        onPress={() => {
                            navigation.navigate('foodView')
                        }}
                    ></FoodTtem>)}
                </ScrollView> : <View>
                    <Text style={{
                        fontSize: 40,
                        color: 'black',
                        marginTop: 50,
                        alignSelf: 'center',

                    }}>Not food</Text>
                </View>}
            </View>
            <View style={{
                backgroundColor: 'blue',
                height: 50,
                flexDirection: 'row',
            }}>
                <TouchableOpacity style={{
                    paddingRight: 10,
                    justifyContent: 'center'
                }}>
                    <Image
                        source={require('../../asset/user.png')}

                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: 10,
                            marginStart: 20,
                            alignSelf: 'center'
                        }} />
                </TouchableOpacity>
                <View style={{ flex: 1 }} />
                <TouchableOpacity style={{
                    paddingRight: 10,
                    justifyContent: 'center'
                }}>
                    <Image
                        source={require('../../asset/shopping-cart.png')}

                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: 10,
                            marginRight: 20,
                            alignSelf: 'center'
                        }} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Foodlist
{/* <FlatList
                    horizontal
                    data={categories}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => {

                        return <TouchableOpacity
                            onPress={() => {
                                alert(`ban da chon : ${item.name}`)
                            }}

                            style={{}}>

                            <Image
                                source={{
                                    uri: item.url
                                }}

                                style={{
                                    height: 60,
                                    width: 60,
                                    borderRadius: 10,
                                    margin: 5
                                }} />

                            <Text
                                style={{ color: 'black', alignSelf: 'center' }}>{item.name}
                            </Text>
                        </TouchableOpacity>
                    }}
                    style={{ flex: 1, backgroundColor: 'white' }}>

                </FlatList> */}