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

const foodView = ({navigation},props) => {
    


  return (
    <View style={{flex:1}}>
        
        
       <ScrollView style={{flex :1}}>
       <ImageBackground
        style={{height:400}}
        source={{uri:"https://i-vnexpress.vnecdn.net/2020/01/22/image002-3489-1579657463.jpg"}}
        resizeMode="cover"
        >
           <View style={{
                marginTop:20,
                height: 60
            }}>            
                <View style={{ height: 50, flexDirection: 'row' }}>
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate('Foodlist')
                    }}
                    >
                    <Image style={{
                        height: 40,
                        width: 40,
                        margin: 5
                    }}
                        source={require('../../asset/left.png')}
                    />
                    </TouchableOpacity>    
                </View>
            </View> 
        </ImageBackground>
        
        <View style={{
            flex:20,
        }}>
            <Text style={{color:'black',fontSize:30}}
            >ca loc xao thit bo.ca loc xao thit bo </Text>
            <Text style={{color:'black',fontSize:30}}
            >price : 50.000</Text>
           
        </View>
       </ScrollView>
        <View style={{
            height:70,
         
        }}>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{
                marginLeft:10
            }}>
            <View>
            <Image style={{
                        height: 40,
                        width: 40,
                        margin: 5
                    }}
                        source={require('../../asset/buy-button.png')}
            />
            <Text style={{
                marginLeft:10,
                fontSize:7,
                color:'black'
            }}>mua ngay</Text>
            </View>
                    
            </TouchableOpacity>
            <View style={{flex:1}}/>
            <TouchableOpacity style={{ 
                width:200, 
                marginRight:10,
                backgroundColor:"#FFCC33",
                borderRadius:10}}>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    <Image style={{
                       width:40,
                       height:40,
                        marginRight:10,
                        marginLeft:10
                    }}
                        source={require('../../asset/plus.png')}
                    />
                    <Text style={{
                    fontSize:16,
                    color:'red'
                    }} 
                    >Them vao gio</Text>
                    </View>
                    
            </TouchableOpacity>
            
            </View>
        </View>
    </View>
  )
}

export default foodView