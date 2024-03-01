// store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./src/slices/userSlice.ts";
import mediaReducer from "./src/components/Watchlist/mediaSlice.ts";

const store = configureStore({
  reducer: {
    user: userReducer,
    media: mediaReducer,
  },
});

export default store;
