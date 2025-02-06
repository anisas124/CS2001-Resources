import { useRef } from "react"
import axios from "axios"
export default function labelText(){
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const repPassword = useRef();
    const buyer = useRef();
    const seller = useRef();
    const tos = useRef();


    const validateForm = ()  => {
    let formValid = false;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   
    if ((name.current.validity.valueMissing) || 
           (email.current.validity.valueMissing)  ||
           (password.current.validity.valueMissing) ||
           (repPassword.current.validity.valueMissing)){
            alert("Please fill in all text fields.");
    } else if (email.current.validity.typeMismatch){
        alert("Invalid e-mail address. Please enter your e-mail again.");
    } else if (password.current.validity.tooShort){
        alert("Password is too short. Please select another password");
    } else if(password.current.value !== repPassword.current.value) {
        alert("Passwords do not match. Please retry");
    } else if(!buyer.current.checked && !seller.current.checked){
        alert("Please check at least one checkbox to be a seller or a buyer.")
    } else if (tos.current.validity.valueMissing){ 
        alert("Please agree to the Terms and Conditions, and Privacy Policy.")
    }else {
        formValid = true;
    }
    return formValid;
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
         // When a form submission event is triggered, the default behavior is to reload the page event.preventDefault()
        //  stops this from happening so you can handle the form submission with JavaScript
           
    if (validateForm()) {
        try {
            const response = await axios.post('http://localhost:8080/user',{
                name: name.current.value,
                email: email.current.value,
                password: password.current.value,
                buyer: buyer.current.checked,
                seller: seller.current.checked
            } );
            console.log(response)
            if (response.status == 201) {
                alert("Registered Successfully")
            }

            name.current.value = "";
            email.current.value = "";
            password.current.value = "";
            repPassword.current.value = "";
            buyer.current.checked = false;
            seller.current.checked = false;
            tos.current.checked = false;
        }
        catch(error){
            console.log(error);
        }
    }
       
    }
    return (
     
        <form class="center" noValidate>
                    <label className="labelText" for="name">Name:</label>
                    <input type="text" className="inputText" ref = {name} name="name" required maxlength="50"/>

                    <br></br>

                    <label className="labelText" for="email">Email:</label>
                    <input type="email" className="inputText" ref = {email} name="email" required/>

                    <br></br>

                    <label className="labelText" for="password">Password:</label>
                    <input type="password" className="inputText" ref ={password} name="password" required minlength="8"/>

                    <br></br>

                    <label className="labelText" for="repPassword">Re-type password:</label>
                    <input type="password" className="inputText" ref = {repPassword} name="repPassword" required minlength="8"/>

                    <br></br>

                   
                    <input type="checkbox" ref={buyer}  name="buyer" value="buyer"/>
                    <label for="buyer">I want to buy produce directly from allotment owners.</label>
                    <br></br>

                    <input type="checkbox" ref={seller} name="seller" value="seller"/>
                    <label for="seller">I want to sell produce from my allotment.</label>
                    <br></br>

                    <input type="checkbox" ref={tos}  name="tos" value="tos" required/>
                    <label for="tos">I agree to the <a href="">Terms of Use</a> and <a href="">Privacy Policy</a>.</label> <br></br>
                    <button onClick={handleSubmit}>Submit</button>
                    
                    <a href="">Learn more</a>
                </form> 
   
      
      






    )
}