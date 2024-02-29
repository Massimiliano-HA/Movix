import React from "react";
import RegisterScreen from "./src/screens/RegisterScreen/RegisterScreen.tsx";
import { Provider } from "react-redux";

import { store } from "./src/redux/store.ts";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/components/navigators/StackNavigator.tsx";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
