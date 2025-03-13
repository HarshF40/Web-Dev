import React from 'react'

const GreetingNew = ({timeOfDay}) => {
  return timeOfDay == "morning" ? <h1>Good Morining</h1> : <h1>Good Afternoon</h1>
}

export default GreetingNew
