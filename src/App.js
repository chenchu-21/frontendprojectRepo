import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Login from './login';
import Registration from './Registration';
import {BrowserRouter, Route} from "react-router-dom"; 
import {Routes} from "react-router-dom";
import Productpg from "./Productpg";
import {CartProvider} from "react-use-cart";
import Contactus  from "./Contactus";
import Blog from "./Blog";
import Main from "./Main";



function App() {

  return (
    <>
       <CartProvider>
    
    <Routes>
         
    
     <Route path = "/Blog" element={<Blog/>}/>
     <Route path = "/Productpg" element={<Productpg/>}/>
    <Route  path="/" element={<Home/>}/>
    <Route path="/Registration" element={<Registration />} />
    <Route path="/login" element = {<Login/>}/>
    <Route path="/logout" element = {<logout/>}/>
    <Route path="/Contactus" element = {<Contactus/>}/>
    <Route path="/Main" element = {<Main/>}/>
</Routes>
</CartProvider>
  
  </>
   
  );
}

export default App;
