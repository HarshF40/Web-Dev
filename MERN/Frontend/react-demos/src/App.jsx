import Cards from "./components/Cards"
import Footer from "./components/Footer"
import Greeting from "./components/Greeting"
import GreetingNew from "./components/GreetingNew"
import Header from "./components/Header"
import JSXRules from "./components/JSXRules"
import Main from "./components/Main"
import Password from "./components/Password"
import Person from "./components/Person"
import Product from "./components/Product"
import ProductInfo from "./components/ProductInfo"
import ProductList from "./components/ProductList"
import User from "./components/User"
import UserList from "./components/UserList"
import UserStatus from "./components/UserStatus"
import Weather from "./components/Weather"
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
    </div>
  )
}

export default App
