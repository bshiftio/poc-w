import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from "@/state/counter/counterSlice";
import { selectCount, useAppDispatch, useAppSelector } from "@/state/store";

import { Button } from "@telegram-apps/telegram-ui";

const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);

  return (
    <div>
      <h2>{count.status == "loading" ? "Loading..." : count.value}</h2>
      <div>
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button onClick={() => dispatch(incrementByAmount(5))}>
          Increment by amount
        </Button>
        <Button onClick={() => dispatch(incrementAsync(10))}>
          Increment async
        </Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      </div>
    </div>
  );
};

export default Counter;
