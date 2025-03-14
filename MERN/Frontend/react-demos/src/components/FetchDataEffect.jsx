import { useEffect, useState } from 'react'

const FetchDataEffect = () => {

  const [data, setData] = useState([])
  useEffect(() => {
      async function getData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        const _data = await response.json()
        if(_data && _data.length) setData(_data)
    }
    getData()
  }, [])

  return (
    <div>
    <h2>Hwllo</h2>
    <ul>
      {data.map((d, index) => (
        <li key={index}>{d.title}</li>
      ))}
    </ul>
    </div>
  )
}

export default FetchDataEffect
