import Counter from "@/business/domain/Counter";
import { createSlice } from "@reduxjs/toolkit";
import { GetCounterEvent } from "../events/GetCounterEvent";
import { IncrementEvent } from "../events/IncrementEvent";
import { DecrementEvent } from "../events/DecrementEvent";

export interface CounterState {
  counter: Counter;
  status: string;
}

const initialState: CounterState = {
  counter: { value: 0 },
  status: "idle",
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: IncrementEvent().increment,
    decrement: DecrementEvent().decrement,
  },
  extraReducers: (builder) => {
    builder.addCase(
      GetCounterEvent().getCounterEvent.pending,
      GetCounterEvent().handlePending
    );
    builder.addCase(
      GetCounterEvent().getCounterEvent.fulfilled,
      GetCounterEvent().handleFulfilled
    );
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
