import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { redirect, useNavigate } from "react-router-dom";
import axios from 'axios';
import './login.css';
import Home from "./Home";

function Login(){
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");

  const navigate=useNavigate();

 const loginData = {
        "username": username,
        "password": password
    }
  const errors = {
    pass: "invalid username/password"
  };

  const userLogin = (e) => {
    e.preventDefault();
    authenticateUser(loginData)
}



function redirectforgotPassword()
 {

navigate('/ContactUs')
}






const authenticateUser = (data) => {
    console.log(data);
    axios.post("http://localhost:8080/api/auth/signin", data).then(
        (response) => {
            
            console.log(response);
            if (response.status==200) {
                console.log("navigating");
                navigate('/Main')
                setIsSubmitted(true);
                alert('Login successfull');
                
            }
        }, (error) => {
          setErrorMessages({ name: "pass", message: errors.pass });
        }
    );
}

const onInputChangeUsername = event => {
    setUserName(event.target.value)
}

const onInputChangePassword = event => {
    setPassword(event.target.value)
}


  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


    
          
  const renderForm = (
    
    <div className="login-wrapper">
      <form class="form" >
      <h2>Login</h2>
        <div className="input-group">

          <input class = "input-background" type="text" name="uname" value={username} onChange={e => onInputChangeUsername(e)} required />
          <label for="loginUser">User Name</label>
          {renderErrorMessage("uname")}
        </div>
        <div className="input-group">
          <input type="password" name="pass" value={password} onChange={e => onInputChangePassword(e)} required />
          <label for="loginPassword">Password</label>
          {renderErrorMessage("pass")}
        </div>
          <input type="submit" class="submit-btn" value="Login" onClick={e => userLogin(e)} />
          <br></br>
          <input type="submit" class="submit-btn" value="Forgot Password?" onClick={redirectforgotPassword} />
      </form>
    </div>

  );

   
  
    return(
         
        <div>
        {isSubmitted ? navigate("/") : renderForm}
        </div>
        
    );
    
}

export default Login;