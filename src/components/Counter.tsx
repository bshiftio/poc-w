import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../framework/presentation/store/hooks";
import { GetCounterEvent } from "../framework/presentation/viewmodel/events/GetCounterEvent";
import { Button } from "@/components/ui/button";
import {
  decrement,
  increment,
} from "../framework/presentation/viewmodel/slices/CounterSlice";
import { useToast } from "@/hooks/use-toast";

const Counter = () => {
  const dispatch = useAppDispatch();
  const { counter, status } = useAppSelector((state) => state.CounterSlice);
  const { toast } = useToast();

  useEffect(() => {
    dispatch(GetCounterEvent().getCounterEvent());
  }, [dispatch]);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    if (counter.value <= 0) {
      toast({
        variant: "destructive",
        title: "Action not allowed",
        description: "Counter value cannot go below 0.",
      });
      return;
    }
    dispatch(decrement());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {status === "loading" ? "Loading..." : counter.value}
      </h2>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button
          variant={"outline"}
          className="w-full sm:w-auto"
          onClick={() => handleIncrement()}
        >
          Increment
        </Button>

        <Button
          variant={"secondary"}
          className="w-full sm:w-auto"
          onClick={() => handleDecrement()}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Counter;
