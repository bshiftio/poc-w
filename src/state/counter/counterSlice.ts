import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
  status: string;
}

const initialState: CounterState = {
  value: 0,
  status: "idle",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      incrementAsync.fulfilled,
      (state, action: PayloadAction<number>) => {
        state.status = "idle";
        state.value += action.payload;
      }
    );
  },
});

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
