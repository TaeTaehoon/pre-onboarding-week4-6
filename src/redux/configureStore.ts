import { configureStore } from "@reduxjs/toolkit/";
import logger from "redux-logger";

import mainSlice from "./slices/mainSlice";

const store = configureStore({
  reducer: {
    mainSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;

export default store;
