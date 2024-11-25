import { useEffect } from "react";

import { useToast } from "@/hooks/use-toast";
import { biometry } from "@telegram-apps/sdk-react";
import { GetCounterEvent } from "@/framework/presentation/viewmodel/Counter/events/GetCounterEvent";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { decrement, increment } from "../viewmodel/Counter/slice/CounterSlice";
import { Button } from "./ui/button";

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

  const checkFaceId = async () => {
    const { status, token } = await biometry.authenticate({
      reason: "Please!",
    });

    if (status === "authorized") {
      console.log(`Authorized. Token: ${token}`);
    } else {
      console.log("Not authorized");
    }
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

        <Button
          variant={"secondary"}
          className="w-full sm:w-auto"
          onClick={() => checkFaceId()}
        >
          Check Face Id
        </Button>
      </div>
    </div>
  );
};

export default Counter;
