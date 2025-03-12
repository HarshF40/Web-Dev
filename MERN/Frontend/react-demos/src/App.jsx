import Footer from "./components/Footer"
import Greeting from "./components/Greeting"
import Header from "./components/Header"
import JSXRules from "./components/JSXRules"
import Main from "./components/Main"
import ProductInfo from "./components/ProductInfo"
import ProductList from "./components/ProductList"
import User from "./components/User"
import UserList from "./components/UserList"
import WelcomeMessage from "./components/WelcomeMessage"

const App = () => {

  const myName = "yuki"
  const multiply = (a, b) => a*b
  const example_class = "ex_class"
  const numbers = [1,2,3,4,5]

  return (
    <div>

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

    </div>
  )
}

export default App
