import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from "@/state/counter/counterSlice";
import { selectCount, useAppDispatch, useAppSelector } from "@/state/store";
import { Button } from "./ui/button";

const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {count.status === "loading" ? "Loading..." : count.value}
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
          variant={"default"}
          className="w-full sm:w-auto"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by amount
        </Button>
        <Button
          variant={"ghost"}
          className="w-full sm:w-auto"
          onClick={() => dispatch(incrementAsync(10))}
        >
          Increment async
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
