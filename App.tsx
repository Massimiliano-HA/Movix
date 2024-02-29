import React from "react";
import RegisterScreen from "./src/screens/RegisterScreen/RegisterScreen.tsx";
import { Provider } from "react-redux";
import { store } from "./src/redux/store.ts";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/components/navigators/StackNavigator.tsx";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from "./src/components/navigators/TabNavigator.tsx";
import SearchPage from './src/screens/SearchScreen/SearchPage.tsx';
import DetailsPage from './src/screens/SearchScreen/DetailsPage.tsx';


const Stack = createNativeStackNavigator();



const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SearchPage">
        <Stack.Screen name="SearchPage" component={SearchPage} />
        <Stack.Screen name="DetailsPage" component={DetailsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
