import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from "./src/components/navigators/StackNavigator.tsx";
import TabNavigator from "./src/components/navigators/TabNavigator.tsx";

const App = () => {
  return (
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
  );
};

export default App;
