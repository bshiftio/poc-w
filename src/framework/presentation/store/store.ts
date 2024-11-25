import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import CounterSlice from "../viewmodel/Counter/slice/CounterSlice";

export const store = configureStore({
  reducer: { CounterSlice },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
