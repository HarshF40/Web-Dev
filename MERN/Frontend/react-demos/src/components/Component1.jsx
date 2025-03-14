import React from 'react'

const Component1 = ({newCount, onClickHandler}) => {

  const handleClick = () => onClickHandler()

  return (
    <div>
      <p>{newCount}</p>
    <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default Component1
