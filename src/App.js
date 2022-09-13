import React, { useState } from 'react';

function App() {
  // const [count, setCount] = useState(4)
  const [count, setCount] = useState(() => {
    console.log('run function')
    return 4
  })

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
    console.log('decrementing')
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default App;
