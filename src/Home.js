import React from 'react';
import './App.css';
import logo1 from './logo1.jpg';
import backgroundimage from './backgroundimage.jpg';
import {Link} from 'react-router-dom';



function Home() {

    return (
        <div style={{backgroundColor:'	#4c3c3c',height:'50px'}}>
            
            <nav class="navbar background" style={{backgroundColor: '	#4c3c3c'}}>
                <ul class="nav-list">
                    <div class="logo1">
                    <img src={logo1}  width="50%"/>
                       </div>
                    <div style ={{float:'right', flexdirection:'row-reverse',marginLeft:'50%',color:'black'}}>
                    <a href="#Home">Home</a>
                    &nbsp; 
                    <a href="#Blog"><Link to ="/Blog">Blog</Link></a>
                    &nbsp; 
                    <a href="#Login"><Link to ="/Login">Login</Link></a>
                    
                    <a href="#Registeration"><Link to ="/Registration">Registration</Link></a> 
                    <a href="#Contactus"><Link to ="/Contactus">Contactus</Link></a> 
              
                    &nbsp; &nbsp; &nbsp;
                    
                  </div>

                </ul>
            </nav> 
             
             <body class="bg">

             <div style={{

backgroundImage:'url("https://imgv3.fotor.com/images/videoImage/Fotor-GoArt-ai-art-generator-banner.png")',width:1277,height:605



}}></div>
                {/* <img src={backgroundimage} width="100%" height="100%">



                </img> */}
             </body>
           
  
           
            <footer className="footer">
                <p className="text-footer">
                    Terms Of Use | Privacy
                </p>
            </footer>
        </div>
    )
}
  
export default Home