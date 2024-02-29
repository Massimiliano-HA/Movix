import React from "react";
import RegisterScreen from "./src/screens/RegisterScreen/RegisterScreen.tsx";
import { Provider } from "react-redux";

import { store } from "./src/redux/store.ts";

const App = () => {
  return (
    <Provider store={store}>
      <RegisterScreen />
    </Provider>
  );
};

export default App;
