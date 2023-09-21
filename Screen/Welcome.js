import { View, Text, Image, ImageBackground, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { UIButton } from '../components'
const Welcome = ({navigation}) => {
  const [accoutTypes, setAccoutType] = useState([
    {
      name: 'Dang Nhap',
      isSelected: false
    }, {
      name: 'dang ki',
      isSelected: false
    },
    {
      name: 'quen mat khau',
      isSelected: false
    }
  ])


  return (
    <View style={
      {
        flex: 100,
        backgroundColor: 'white'
      }
    }>
      <ImageBackground
        source={require('../asset/nen.png')}
        resizeMode='cover'
        style={{
          flex: 100

        }}
      >
        <View
          style={
            {
              flex: 3,

              height: 50,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',

            }
          }
        >
          <Image
            style={
              {
                marginLeft: 5,
                marginRight: 5,
                width: 30,
                height: 30,
              }
            }
            source={require('../asset/flames.png')}
          />
          <Text style={
            {
              color: 'black'
            }
          }>WEBNDS.com</Text>
          <View style={{ flex: 1 }} />
          <Image
            style={{
              marginRight: 10,
              height: 20,
              width: 30,
              tintColor: 'white'
            }}
            source={require('../asset/ask.png')}
          />
        </View>
        <View
          style={{

            flex: 15,
            justifyContent: 'center',
            alignItems: "center"

          }}>
          <Text style={{
            color: 'black', marginBottom: 5,
            fontSize: 14
          }}>
            Welcome to</Text>
          <Text style={{
            color: 'black', marginBottom: 5,
            fontSize: 16, fontWeight: 'bold'
          }}>
            WEBNDS.COM</Text>
          <Text style={{
            color: 'black', marginBottom: 5,
            fontSize: 16
          }}
          >Please select your accout type</Text>


        </View>
        <View
          style={{

            flex: 20,
            padding: 10
          }}>
          {accoutTypes.map(accoutType => <UIButton onPress={() => {
            let newAccoutTypes = accoutTypes.map(eachAccoutType => {
              return {
                ...eachAccoutType,
                isSelected: eachAccoutType.name == accoutType.name
              }
            })
            setAccoutType(newAccoutTypes);
          }}
            title={accoutType.name}
            isSelected={accoutType.isSelected}></UIButton>)}




        </View>
        <View
          style={{
            padding: 10,
            flex: 10,
          }}

        >
          <UIButton
            style={{

            }}
            title='Next' onPress={()=>{
              navigation.navigate('Login')
            }}></UIButton>
          <Text
            style={{
              color: 'White',
              alignSelf: 'center',
              fontSize: 16
            }}
          > Want to regster new Account?</Text>
          <TouchableOpacity
          onPress={()=>{
            alert('helo')
          }}
            style={{
              padding:10
            }}
          >
            <Text
              style={{
                color: 'red',
                alignSelf: 'center',
                textDecorationLine: 'underline',
                fontSize: 16
              }}
            > Regster</Text>
          </TouchableOpacity>
        </View>
        <View />

      </ImageBackground>
    </View>
  )
}

export default Welcome