import {
  View,
  Text,
  Image,

  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Switch
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { UIHeader } from '../components'

const Settings = ({navigation}) => {
    const[isEnabledLockApp,setIsEnabledLockApp]=useState(true)
    const[isEnabledChangePassword,setIsEnabledChangePassword]=useState(true)
    const[isEnabledFingerprint,setIsEnabledFingerprint]=useState(true)
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView>
      <UIHeader title={"Setting"} />
      <View style={{ height: 50, backgroundColor: "#666666", flexDirection: 'row' }}>
        <Text style={{
          fontSize: 16,
          alignSelf: 'center',
          margin: 5,
          color: 'red'
        }} >Common</Text>
      </View>
      <View style={{ height: 50, flexDirection: 'row' }}>
        <Image style={{
          height: 40,
          width: 40,
          margin: 5
        }}
          source={require('../asset/world.png')}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            alignSelf: 'center'
          }}>Language</Text>
        <View style={{ flex: 1 }}></View>
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            alignSelf: 'center'
          }}>English</Text>
        <Image style={{
          height: 40,
          width: 40,
          marginTop: 5,
          marginLeft: 3
        }}
          source={require('../asset/next.png')}
        />
      </View>
      <View style={{ height: 50, flexDirection: 'row' }}>
        <Image style={{
          height: 40,
          width: 40,
          margin: 5
        }}
          source={require('../asset/no.png')}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            alignSelf: 'center'
          }}>Environment</Text>
        <View style={{ flex: 1 }}></View>
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            alignSelf: 'center'
          }}>Production</Text>
        <Image style={{
          height: 40,
          width: 40,
          marginTop: 5,
          marginLeft: 3
        }}
          source={require('../asset/next.png')}
        />
      </View>
      <View style={{ height: 50, backgroundColor: "#666666", flexDirection: 'row' }}>
        <Text style={{
          fontSize: 16,
          alignSelf: 'center',
          margin: 5,
          color: 'red'
        }} >Account</Text>
      </View>
      <View style={{ height: 50, flexDirection: 'row' }}>
        <Image style={{
          height: 40,
          width: 40,
          margin: 5
        }}
          source={require('../asset/phone-call.png')}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            alignSelf: 'center'
          }}>Phone Number</Text>
        <View style={{ flex: 1 }}></View>
       
        <Image style={{
          height: 40,
          width: 40,
          marginTop: 5,
          marginLeft: 3
        }}
          source={require('../asset/next.png')}
        />
      </View>
      <View style={{ height: 50, flexDirection: 'row' }}>
        <Image style={{
          height: 40,
          width: 40,
          margin: 5
        }}
          source={require('../asset/email.png')}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            alignSelf: 'center'
          }}>Email</Text>
        <View style={{ flex: 1 }}></View>
        
        <Image style={{
          height: 40,
          width: 40,
          marginTop: 5,
          marginLeft: 3
        }}
          source={require('../asset/next.png')}
        />
      </View>
      <TouchableOpacity 
      onPress={()=>{
        navigation.navigate('Foodlist')
      }}
      style={{height: 50}}>
      <View style={{  flexDirection: 'row' }}>
        <Image style={{
          height: 40,
          width: 40,
          margin: 5
        }}
          source={require('../asset/logout.png')}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            alignSelf: 'center'
          }}>Sign out</Text>
        <View style={{ flex: 1 }}></View>
        
        <Image style={{
          height: 40,
          width: 40,
          marginTop: 5,
          marginLeft: 3
        }}
          source={require('../asset/next.png')}
        />
      </View>
      </TouchableOpacity>
      <View style={{ height: 50, backgroundColor: "#666666", flexDirection: 'row' }}>
        <Text style={{
          fontSize: 16,
          alignSelf: 'center',
          margin: 5,
          color: 'red'
        }} >Security</Text>
      </View>
      <View style={{ height: 50, flexDirection: 'row' }}>
        <Image style={{
          height: 40,
          width: 40,
          margin: 5
        }}
          source={require('../asset/lock.png')}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            alignSelf: 'center'
          }}>Lock app in background</Text>
        <View style={{ flex: 1 }}></View>
        <Switch
        trackColor={{ false: "#767577", true: 'red' }}
        thumbColor={isEnabledLockApp ? "red" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={()=>{
          setIsEnabledLockApp(!isEnabledLockApp)
        }}
        value={isEnabledLockApp}
      />
      </View>
      <View style={{ height: 50, flexDirection: 'row' }}>
        <Image style={{
          height: 40,
          width: 40,
          margin: 5
        }}
          source={require('../asset/fingerprint-scan.png')}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            alignSelf: 'center'
          }}>Use fingerprint</Text>
        <View style={{ flex: 1 }}></View>
        <Switch
        trackColor={{ false: "#767577", true: 'red' }}
        thumbColor={isEnabledFingerprint ? "red" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={()=>{
          setIsEnabledFingerprint(!isEnabledFingerprint)
        }}
        value={isEnabledFingerprint}
      />
      </View>
      <View style={{ height: 50, flexDirection: 'row' }}>
        <Image style={{
          height: 40,
          width: 40,
          margin: 5
        }}
          source={require('../asset/lock.png')}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            alignSelf: 'center'
          }}>Change Password</Text>
        <View style={{ flex: 1 }}></View>
        <Switch
        trackColor={{ false: "#767577", true: 'red' }}
        thumbColor={isEnabledChangePassword ? "red" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={()=>{
          setIsEnabledChangePassword(!isEnabledChangePassword)
        }}
        value={isEnabledChangePassword}
      />
      </View>
      </ScrollView>
    </View>
  )
}

export default Settings