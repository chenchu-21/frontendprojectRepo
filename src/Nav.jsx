import React from 'react';
import './App.css';
import logo1 from './logo1.jpg';
import backgroundimage from './backgroundimage.jpg';
import {Link} from 'react-router-dom';
import Blog from './Blog';
import {NavLink as ReactLink, useNavigate} from "react-router-dom";
  
function Nav() {

    const navigate=useNavigate();

    const user= JSON.parse(localStorage.getItem('user-info'))
    
    console.warn(user)
  
  
    function logout()
  
  {
  
    localStorage.clear();
  
    navigate('/')
    alert("logout Successful");
  }


    return (
        <div style={{backgroundColor:'white',height:'0px'}}>
            
            <nav class="navbar background" style={{backgroundColor:'white'}}>
                <ul class="nav-list">
                 
                        
                  
                    <div style={{float:'right',flexdirection:'row-reverse',marginLeft:'50%'}}>
                    <a href="#Home">Home</a>  
                    &nbsp; &nbsp;&nbsp;
                    <a href='#Blog'  onClick={Blog}><Link to = "/Blog">Blog</Link></a>
                    &nbsp; &nbsp;&nbsp;
                    <a href="#Logout" onClick={logout}><Link to ="/Logout">Logout</Link></a> 
                    &nbsp; &nbsp; &nbsp;
   
                    {/* <a href="#Login"><Link to ="/Login">Login</Link></a> */}
                    &nbsp; &nbsp; &nbsp;
                    {/* <a href="#Registeration"><Link to ="/Registration">Registration</Link></a>  */}
                    &nbsp; &nbsp; &nbsp;
                
   
                  </div>

                </ul>
            </nav> 
             
             <body class="bg">

             {/* <div style={{

backgroundImage:'url("https://imgv3.fotor.com/images/videoImage/Fotor-GoArt-ai-art-generator-banner.png")',width:1277,height:605



}}></div> */}
                {/* <img src={backgroundimage} width="100%" height="100%">



                </img> */}
             </body>
           
  
           
            {/* <footer className="footer">
                <p className="text-footer">
                    Terms Of Use | Privacy
                </p>
            </footer> */}
        </div>
    )
}
  
export default Nav;