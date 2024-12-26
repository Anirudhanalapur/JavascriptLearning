import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { RootState } from './state/store';
import { increment } from './state/counter/counter.slice';


function App() {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (

    
    <>
      <h2>
        {counter}
      </h2>
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>
    </>
  )
}

export default App;
