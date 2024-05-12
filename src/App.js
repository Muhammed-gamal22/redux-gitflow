import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "./store/counterSlice";
function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div className="App">
      <div className="counter">
        <button onClick={() => dispatch(counterActions.decrement())}>-</button>
        <span>{counter}</span>
        <button onClick={() => dispatch(counterActions.increment())}>+</button>
      </div>
    </div>
  );
}

export default App;
