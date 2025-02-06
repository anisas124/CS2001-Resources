import { Link, Outlet } from "react-router-dom";
import RegistrationControlled from "./RegistrationControlled";
import SideBar from "./sidebar";
import Menu from "./Menu";

export default function Layout(){
    return(
    <>

    <header></header>
    <Menu></Menu>
     
    
      <div className="container">
      <SideBar></SideBar>
      <main className="maincontent">
      <Outlet></Outlet>
      </main>
      </div>
      

    </>
    )
}
