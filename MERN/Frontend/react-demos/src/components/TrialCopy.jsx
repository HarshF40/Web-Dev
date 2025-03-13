import React from 'react'

const TrialCopy = () => {

  const copyHandler = () => console.log("Stop Stealing")

  return (
    <p onCopy={copyHandler}>
At pellentesque pharetra ridiculus dictum suspendisse a, ultricies tristique dapibus. Posuere eu montes ac fermentum praesent urna, donec et metus.
    </p>
  )
}

export default TrialCopy
