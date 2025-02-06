

import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registration from "./components/Registration"
import RegistrationControlled from "./components/RegistrationControlled"
import SideBar from "./components/sidebar"
import Layout from "./components/Layout"
import Login from "./components/Login"
import Help from "./components/Help"
import Home from "./components/Home";



function App() {

// above we have a count which is the current state , 
//setCount needs to be the function that allows for the current state to be updated
  return (
  <BrowserRouter>
  <Routes>
    <Route element = {<Layout/>}>
    <Route index element = {<Home/>}></Route>
    <Route path={'login'} element = {<Login/>}></Route>
    <Route path={'register'} element = {<Registration/>}></Route>
    <Route path={'help'} element = {<Help/>}></Route>
    </Route>
  </Routes>
  </BrowserRouter>
  )
}

export default App
