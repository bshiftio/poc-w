import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { decrement, increment } from "../viewmodel/slices/CounterSlice";
import { Button } from "./ui/button";
import { GetCounterEvent } from "../viewmodel/events/GetCounterEvent";

const Counter = () => {
  const dispatch = useAppDispatch();
  const { counter, status } = useAppSelector((state) => state.CounterSlice);

  useEffect(() => {
    dispatch(GetCounterEvent().getCounterEvent());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {status === "loading" ? "Loading..." : counter.value}
      </h2>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button
          variant={"outline"}
          className="w-full sm:w-auto"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>

        <Button
          variant={"secondary"}
          className="w-full sm:w-auto"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Counter;
