import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store.ts";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/components/navigators/StackNavigator.tsx";
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();



const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator></AppNavigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
