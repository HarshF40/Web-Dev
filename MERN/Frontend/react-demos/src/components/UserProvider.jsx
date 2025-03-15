import { createContext, useState } from "react"

//creating a context to share the data
const UserContext = createContext()

//taking children as a prop because to give them access to the data
const UserProvider = ({children}) => {
  const [user, setUser] = useState({name: "John Doe"})
  const updateUser = (newName) => {setUser({name: newName})}

  return (
  <UserContext.Provider value={{ user, updateUser }}>
    {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
