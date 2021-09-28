import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";

export default function () {
  const store = configureStore({
    reducer: reducer,
    middleware: [...getDefaultMiddleware()] // getDefaultMiddleware like Redux thunk.
  });
  return store;
}
