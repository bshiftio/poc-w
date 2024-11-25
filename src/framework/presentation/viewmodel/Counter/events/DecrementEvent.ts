import { PayloadAction } from "@reduxjs/toolkit";
import { CounterState } from "../slice/CounterSlice";
import Counter from "@/business/domain/Counter";
import di from "@/di";

export const DecrementEvent = () => {
  const decrement = (state: CounterState) => {
    di.DecrementUseCase.decrement(state.counter);
  };

  return {
    decrement,
  };
};
