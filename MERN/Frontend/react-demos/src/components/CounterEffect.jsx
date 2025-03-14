import React, { useEffect, useState } from 'react'

const CounterEffect = () => {

  const [counter, setCounter] = useState(0)
  useEffect(() => {
    document.title = `value ${counter}`
  })

  return (
    <div>
    <h2>Counter {counter}</h2>
    <button onClick={() => setCounter(counter+1)}>Click Me</button>
    </div>
  )
}

export default CounterEffect
