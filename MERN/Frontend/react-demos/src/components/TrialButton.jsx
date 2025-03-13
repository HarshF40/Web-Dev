import React from 'react'

const TrialButton = () => {
  const handleClick = () => console.log(Math.round(Math.random() * 10))
  return (
    <button onClick={handleClick}>Click</button>
  )
}

export default TrialButton
