import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/LoginScreen/LoginScreen.tsx";
import RegisterScreen from "../../screens/RegisterScreen/RegisterScreen.tsx";
import HomeScreen from "../../screens/HomeScreen/HomeScreen.tsx";
import SearchPage from "../../screens/SearchScreen/SearchPage.tsx";
import DetailsPage from "../../screens/SearchScreen/DetailsPage.tsx";
import { View } from "react-native";
import TabNavigator from "./TabNavigator.tsx";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen
        name="TabNavigator"
        options={{
          title: "TabNavigator",
        }}
        component={TabNavigator}
      />
      <Stack.Screen
        name="Login"
        options={{
          title: "Connexion",
        }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="Register"
        options={{
          title: "Inscription",
        }}
        component={RegisterScreen}
      />
      <Stack.Screen
        name="Home"
        options={{
          title: "Accueil",
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="Search"
        options={{
          title: "Recherche",
        }}
        component={SearchPage}
      />
      <Stack.Screen
        name="DetailsPage"
        options={{
          title: "Détails",
        }}
        component={DetailsPage}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
