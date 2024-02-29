import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from "./src/components/navigators/StackNavigator.tsx";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from "./src/components/navigators/TabNavigator.tsx";
import SearchPage from './src/screens/SearchScreen/SearchPage.tsx';
import DetailsPage from './src/screens/SearchScreen/DetailsPage.tsx';


const Stack = createNativeStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SearchPage">
      <Stack.Screen name="SearchPage" component={SearchPage} />
      <Stack.Screen name="DetailsPage" component={DetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
