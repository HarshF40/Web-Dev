import React, { useState } from 'react'

const ExampleOne = () => {

  //this callback fucntion will only run, when our component first renders
  const [count, setCount] = useState(() => {
    const initialCount = 10
    return initialCount
  })

  const increment = () => setCount(count + 1)

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default ExampleOne
