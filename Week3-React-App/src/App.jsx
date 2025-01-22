

import "./App.css"
import Registration from "./components/Registration"
import RegistrationControlled from "./components/RegistrationControlled"
import SideBar from "./components/sidebar"

function App() {

// above we have a count which is the current state , 
//setCount needs to be the function that allows for the current state to be updated
  return (
    <>

    <header> </header>
      <div className="container">
      <SideBar></SideBar>
      <main className="maincontent">
      <RegistrationControlled></RegistrationControlled>
      </main>
      </div>
      

    </>
  )
}

export default App
