import { Data, Data1 } from '../App'
import React from 'react'

const ComponentC = () => {
  return (
    <Data.Consumer>
    {
      (name) => {
        return (
          <Data1.Consumer>
          {(age) => <h1>{age}{name}</h1>}
          </Data1.Consumer>
        )
      }
    } 
    </Data.Consumer>
  )
}

export default ComponentC
