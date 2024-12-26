import { useCallback, useState } from 'react';
import './App.css';

function App() {
  const [debouncedValue, setDebouncedValue] = useState('');
  const [throttledValue, setThrottledValue] = useState('');

  function debounceHandler(fn: any, delay: number) {
    let timer: any;
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }

  function throttleHandler(fn: any, delay: number) {
    let timer: any;
    return (...args: any) => {
      if (!timer) {
        fn(...args);
        timer = setTimeout(() => {
          timer = null;
        }, delay);
      }
    };
  }

  // The direct handler will pass the latest input value for throttling
  const handleDebounce = (e: any) => {
    const value = e.target.value;
    setDebouncedValue(value);
  };

  const handleThrottle = (e: any) => {
    const value = e.target.value;
    setThrottledValue(value); // This will now be invoked in the throttleHandler with the correct value
  };

  const debounceChange =useCallback(debounceHandler(handleDebounce, 500), []);
  const throttleChange =useCallback(throttleHandler(handleThrottle, 500), []);


  return (
    <>
      <input placeholder="Debounced Input" onChange={debounceChange} />
      <input placeholder="Throttled Input" onChange={throttleChange} />
      <div>debouncedValue: {debouncedValue}</div>
      <div>throttledValue: {throttledValue}</div>
    </>
  );
}

export default App;
