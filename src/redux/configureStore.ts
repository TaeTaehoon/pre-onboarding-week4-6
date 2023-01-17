import { combineReducers, configureStore } from "@reduxjs/toolkit/";
import logger from "redux-logger";

import mainSlice from "./slices/mainSlice";

const rootReducer = combineReducers({
  mainSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;
export default store;
