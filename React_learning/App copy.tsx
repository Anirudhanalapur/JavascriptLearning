import { useEffect, useState } from 'react'
import './App.css'


//  red light -10sec
//  yellow lighht - 5sec
//  Green lighht - 15sec
type color = 'red' | 'yellow' | 'green';

function App() {

  const [currentActiveSignal, setCurrentActiveSignal] = useState<color>('red');

  const singleObject: { [key in 'red' | 'yellow' | 'green']: { duration: number; next: 'red' | 'yellow' | 'green' } } = {
    red: {
      duration: 10,
      next: 'yellow'
    },
    yellow: {
      duration: 2,
      next: 'green'
    },
    green: {
      duration: 15,
      next: 'red'
    }
  }
  function handleChangeSingle(color: color) {
    setCurrentActiveSignal(color)
  }

  useEffect(() => {
   const tiner = setTimeout(() => {
      setCurrentActiveSignal(singleObject[currentActiveSignal].next)
    }, singleObject[currentActiveSignal].duration * 1000 )

    return () => {
      console.log('this is clearning')
      clearTimeout(tiner);
    }
  }, [currentActiveSignal])
  return (
    <div className='signal-main'>
      <div className='buttons'>
        <button onClick={() => handleChangeSingle('red')}>red</button>
        <button onClick={() => handleChangeSingle('yellow')}>yellow</button>
        <button onClick={() => handleChangeSingle('green')}>green</button>
      </div>

      <p className={`signal red isActive-${currentActiveSignal === 'red'}`}></p>
      <p className={`signal yellow isActive-${currentActiveSignal === 'yellow'}`}></p>
      <p className={`signal green isActive-${currentActiveSignal === 'green'}`}></p>
    </div>
  )
}

export default App
