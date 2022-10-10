import { switchClasses } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import {useHistory} from  'react-router-dom'
import Cart from './components/Cart';

function ProductDetail()

{
  const history = useHistory();

  const[loading,setLoading]= useState(true);
  const[product,setproduct]= useState([]);
  const[quantity,setLquantity]= useState(1);

  useEffect(() =>{
}, [props.match.params.category,props.match.params.product,History])

const handleDecrement = () => {
    if(quantity >1){
        setquantity(prevCount => prevcount -1);
    }
}

const handleincrement = () => {
    if(quantity <10){
        setquantity(prevCount => prevcount +1);
    }
}

const submitAddtocart = (e) => {
    e.preventDefault();

    const data ={
        product_id:product.id,
        product_qty: quantity,
    }
}

axios.post(/api/add-to-Cart,data).then(res=>{

    if(res.data.status===201){
        switchClasses("success",res.data.message,'success');
    }
    else if (res.data.status===409)
    {
        switchClasses("success",res.data.message,'warning');

    }else if (res.data.status===401)
    {
        switchClasses("success",res.data.message,'error');
    }
});

if (loading)
 {
     
 }

}