import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from "../../screens/LoginScreen/LoginScreen.tsx";
import RegisterScreen from "../../screens/RegisterScreen/RegisterScreen.tsx";
import HomeScreen from "../../screens/HomeScreen/HomeScreen.tsx";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
