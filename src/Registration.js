//import React , {useState }from "react";
import { useForm } from "react-hook-form";
//import axios from "axios";

import './Registration.css';

import axios from 'axios';
import React, { useState,useEffect } from "react";
//import './Register.css';
import { useNavigate } from "react-router-dom";

function Register(){

  const navigate=useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");

    const errors = {
      pass: "invalid password",
      noerr: ""
    };

  const data={
    "username":username,
    "password":password
  };


  const Validate = (values) => {
    const error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      error.username = "Username is invalid!";
    
    }
    if (!email) {
      error.email = "Email is required!";
    } else if (!regex.test(email)) {
      error.email = "Email is invalid!";
    }
    if (!values.password) {
      error.password = "Password is required";
    } else if (values.password.length < 6) {
      error.password = "Password must be more than 6 characters";
    } else if (values.password.length > 10) {
      error.password = "Password cannot exceed more than 10 characters";
    }
    return error;
  };

  const onInputChangeUsername = event => {
    setUserName(event.target.value)
}

const onInputChangePassword = event => {
    setPassword(event.target.value)
}
const onInputChangeEmail= event => {
  setEmail(event.target.value)
}

const onChangePassword = event => {
  let value=event.target.value;
  if(value!=password){
     setErrorMessages({ name: "pass", message: errors.pass });
  }
  else{
    setErrorMessages({name: "noerr",message: errors.noerr})
  }
}
  const insertAction= async(e)=>{   
    e.preventDefault();
    if(!data.username || !data.password || !email||data.password.length < 4 || data.password.length > 10 ){ 
    setFormErrors(Validate(data));}
   else{
   await axios.post('http://localhost:8080/api/auth/signup',data).then(
    (response) => { 
        console.log(response);
        if (response.status==200) {
          setIsSubmitted(true);
            alert("Registration successful"); 
        }
    }, (error) => {
      alert("Operation failed");
    }
);
   }
    
     };

     const renderErrorMessage = (name) =>
    name!=password && (
      <div className="error">{errorMessages.message}</div>
    ) ;

     const renderForm = (<div class="register-wrapper">
     <form action="" class="form">
       <h2>Register</h2>
       <div class="input-group">
        <input type="text" name="username" id="username" value={username} onChange={e => onInputChangeUsername(e)} required />
         <label for="username">User Name</label>
       </div>
       <p className='error'>{formErrors.username}</p>
          
         
       <div class="input-group">
        <input type="text" name="email" id="email" onChange={e => onInputChangeEmail(e)} required />
         <label for="email">Email </label>
       </div>
       <p className='error'>{formErrors.email}</p>

       <div class="input-group">
         <input
           type="password"
           name="password"
           id="password" 
           value={password} onChange={e => onInputChangePassword(e)}
           required
         />
         <label for="password">Password</label>
       </div>
       <p className='error'>{formErrors.password}</p>
       <div class="input-group">
         <input
           type="password"
           name="Confirmpassword"
           id="Confirmpassword"
           onChange={e => onChangePassword(e)}
           required
         />
         <label for="loginPassword">Confirm Password</label>
       </div>
       {renderErrorMessage("Confirmpassword")}


       <input type="submit" value="Register" class="submit-btn" onClick={(e)=>insertAction(e)}  />
     </form>
   </div>);

    return(
      <div>
     
      {isSubmitted ? navigate("/login") : renderForm}
   
      </div>
    
    );
}
    
export default Register;
