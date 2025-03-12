import React from 'react'

const Greeting = () => {

  const name = "yuki"
  const date = new Date()

  return (
    <div>
    <h1>Hello, {name}</h1>
    <p>{date.toString()}</p>
    </div>
  )
}

export default Greeting
