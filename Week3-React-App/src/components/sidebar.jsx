import Weather from "./Weather";

export default function SideBar (){


    return(
   
     <aside>
         <input type="text"   className="search"
            id="search" name="search" placeholder="Search"></input>  
           <Weather></Weather>
     </aside>
   
    )
}

