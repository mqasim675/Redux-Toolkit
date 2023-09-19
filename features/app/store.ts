import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./../counter/counter-slice";
import { apiSlice } from "@/features/counter/dog/dog-api-slice";
import { type } from "os";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
