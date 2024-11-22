import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

// export app hooks
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

// export selectors
export const selectCount = (state: RootState) => state.counter;
