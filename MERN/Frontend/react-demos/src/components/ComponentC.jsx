import { Data, Data1 } from '../App'
import { useContext } from 'react'
import React from 'react'

const ComponentC = () => {

  const userName = useContext(Data)
  const Age = useContext(Data1)


  return (
   <h1>My Name is {userName} and my age is {Age}</h1> 
  )
}

export default ComponentC
