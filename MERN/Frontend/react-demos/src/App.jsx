import Cards from "./components/Cards"
import Footer from "./components/Footer"
import Greeting from "./components/Greeting"
import GreetingNew from "./components/GreetingNew"
import Header from "./components/Header"
import IconComponent from "./components/IconComponent"
import JSXRules from "./components/JSXRules"
import Main from "./components/Main"
import Password from "./components/Password"
import Person from "./components/Person"
import Product from "./components/Product"
import ProductInfo from "./components/ProductInfo"
import ProductList from "./components/ProductList"
import ProfileCard from "./components/ProfileCard"
import StyledCard from "./components/StyledCard"
import TrialButton from "./components/TrialButton"
import TrialCopy from "./components/TrialCopy"
import User from "./components/User"
import UserList from "./components/UserList"
import UserStatus from "./components/UserStatus"
import Weather from "./components/Weather"
import WelcomeMessage from "./components/WelcomeMessage"
import { GrArchlinux } from "react-icons/gr";
import { useState } from "react"
import Component1 from "./components/Component1"
import Component2 from "./components/Component2"
import ExampleOne from "./components/ExampleOne"
import ExampleTwo from "./components/ExampleTwo"
import ExampleThree from "./components/ExampleThree"
import Counter from "./components/Counter"
import TodoList from "./components/TodoList"
import Profile from "./components/Profile"
import ShoppingList from "./components/ShoppingList"

const App = () => {

  //useState return a initial value and a function to change that value
  //the function helps to rerender the changed data, without that we cannot directly render the chnaged value easily 
  const [count, setCount] = useState(100)
  const increment = () => setCount(count+1)
  const decrement = () => setCount(count-1)

  const [friends, setFriends] = useState(['Alex', 'John'])
  const addOneFriend = () => setFriends([...friends, 'Yuki'])
  const removeFriend = () => setFriends(friends.filter(f => f !== 'John'))
  const updateFriend = () => setFriends(friends.map(f => f === 'Alex' ? 'Alex Smith' : f))

  const [movie, setMovie] = useState({
    title: 'Equalizer 3',
    ratings: 7,
  })
  const handleClick = () => {
    setMovie({...movie, ratings: 5})
  }

  const [newCount, newSetCount] = useState(0)

  const myName = "yuki"
  const multiply = (a, b) => a*b
  const example_class = "ex_class"
  const numbers = [1,2,3,4,5]

  return (
    <div>

    <h1>{count}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>

    <section>
    {friends.map((friend, index) => (
        <li key={index}>{friend}</li>
      ))}
    </section>
    <button onClick={addOneFriend}>Add New Friend</button>
    <button onClick={removeFriend}>Remove Friend</button>
    <button onClick={updateFriend}>Update Friend</button>

    <section>
      <h1>{movie.title}</h1>
      <p>{movie.ratings}</p>
      <button onClick={handleClick}>Change Rating</button>
    </section>

    <section>
      <Component1 newCount={newCount} onClickHandler={() => newSetCount(newCount+1)} />
      <Component2 newCount={newCount} onClickHandler={() => newSetCount(newCount+1)} />
    </section>

    <section>
      <ExampleOne />
      <ExampleTwo />
      <ExampleThree />
    </section>

    <section>
    <Counter />
    <TodoList />
    <Profile />
    <ShoppingList />
    </section>

    <GrArchlinux />

    <Header />
    <Main />
    <Footer />
    <WelcomeMessage />
    <JSXRules />
    <Greeting />
    <ProductInfo />
    <UserList />
    <ProductList />
    {/*props are used to pass data from parent to child*/}
    <User name="yuki"/>
    <Person name="yuki" age={99}/>
    <Product name="phone" price="$23.99"/>

    <Cards>
      <h1>Accessed through Children</h1>
    </Cards>

    <Password isValid={true}/>
    <Weather temperature={15}/>
    <UserStatus isAdmin={false} loggedIn={false}/>
    <GreetingNew timeOfDay="morning"/>

    <p>{myName}</p>
    <p>Fruits : {["apple", "banana", "tea", "jackfruit"]}</p>
    <p>2*2 = {multiply(2,2)}</p>
    <p className={example_class}>This has a embedded js class</p>

    <div>
    { numbers.map( (number, index) => (
      <ul key = {index}>
        <li>{number}</li>
      </ul>
    )) }
    </div>

    <StyledCard />
    <ProfileCard />
    <IconComponent />

    <TrialButton />
    <TrialCopy />

    </div>
  )
}

export default App
