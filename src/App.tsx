import { useAppDispatch, useAppSelector } from './store/hooks'
import './App.css'
import { decrement, increment, incrementByValue } from './store/slices/counter/counterSlice';

function App() {

  const count = useAppSelector((state) => state.counter.value);

  const dispatch = useAppDispatch();

  const value: number = 5;

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          +
        </button>
        <button onClick={() => dispatch(decrement())}>
          -
        </button>
        <button onClick={() => dispatch(incrementByValue(value))}>
          + {value}
        </button>
        <p>{count}</p>
      </div>

    </>
  )
}

export default App
