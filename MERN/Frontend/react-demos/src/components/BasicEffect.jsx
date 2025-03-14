import { useEffect } from "react"

const BasicEffect = () => {

  useEffect(() => {
    console.log("Basic Effect")
  })

  return (
    <div>BasicEffect</div>
  )
}

export default BasicEffect
