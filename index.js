


import { AppRegistry } from 'react-native'
import React from 'react'
import { name as appName } from './app.json'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
// import Welcome from './Screen/Welcome'
// import Login from './Screen/Login'
// import Register from './Screen/Register'
// import Foodlist from './Screen/foodlist/Foodlist'
import {
        Welcome,
        Login,
        Register,
        Foodlist,
        foodGirdView,
        Settings,
        foodView
} from './Screen'
const Stack = createNativeStackNavigator();




AppRegistry.registerComponent(appName, () => () => {
        return (
                <NavigationContainer>
                         <Drawer.Navigator>
                                 <Drawer.Screen name="foodView" component={foodView} />
                        <Drawer.Screen name="Foodlist" component={Foodlist} />
                        </Drawer.Navigator>
                        
                        
                        {/* {
                         <Stack.Navigator screenOptions={{headerShown:false}}>
                                <Stack.Screen name="foodView" component={foodView} />
                                <Stack.Screen name="Foodlist" component={Foodlist} />
                                <Stack.Screen name="welcome" component={Welcome} />
                                <Stack.Screen name="Login" component={Login} />
                                <Stack.Screen name="Register" component={Register} />
                               
                                <Stack.Screen name="Settings" component={Settings} />
                        </Stack.Navigator>
                        } */}
                </NavigationContainer>

        )
}
)








