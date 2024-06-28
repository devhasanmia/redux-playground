import {
  decrement,
  incrementByValue,
  incrrement,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

export default function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <button
        onClick={() => dispatch(incrrement())}
        className="px-3 py-2 rounded-md bg-green-500 text-xl align-center text-white"
      >
        Increment
      </button>
      <h1 className="text-3xl mx-10">{count}</h1>
      <button
        onClick={() => dispatch(decrement())}
        className="px-3 py-2 rounded-md bg-red-500 text-xl align-center text-white"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(incrementByValue(20))}
        className="px-3 py-2 rounded-md bg-red-500 text-xl align-center text-white"
      >
        IncrementByValue
      </button>
    </div>
  );
}
