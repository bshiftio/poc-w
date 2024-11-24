import { PayloadAction } from "@reduxjs/toolkit";
import { CounterState } from "../slices/CounterSlice";
import Counter from "@/business/domain/Counter";
import di from "@/di";

export const IncrementEvent = () => {
  const increment = (state: CounterState) => {
    di.IncrementUseCase.increment(state.counter);
  };

  return {
    increment,
  };
};
