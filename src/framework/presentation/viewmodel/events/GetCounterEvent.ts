import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { CounterState } from "../slices/CounterSlice";
import di from "@/di";
import Counter from "@/business/domain/Counter";

export const GetCounterEvent = () => {
  const getCounterEvent = createAsyncThunk("counter/getCounter", async () => {
    const counter = await di.GetCounterUseCase.getCounter();
    return counter;
  });

  const handlePending = (state: CounterState) => {
    state.status = "loading";
  };

  const handleFulfilled = (
    state: CounterState,
    action: PayloadAction<Counter>
  ) => {
    state.status = "idle";
    state.counter = action.payload;
  };

  return {
    getCounterEvent,
    handlePending,
    handleFulfilled,
  };
};
