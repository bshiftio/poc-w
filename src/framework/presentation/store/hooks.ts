import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

// export app hooks
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
