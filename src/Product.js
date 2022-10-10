import React, { useState, useEffect } from "react";

import { Outlet, Link, useNavigate } from "react-router-dom";

import axios from "axios";
import Base from "./Base";

const Product = () => {

{
   const [product, setProduct] = useState([]);

  const [error, setError] = useState(null);



  useEffect(() => {

    fetch("http://localhost:8080/api/auth/product_details")

      .then(res => res.json())

      .then(

        (result) => {

          console.log('called get items')

          console.log(result)

          setProduct(result);

        },

        (error) => {

          setError(error);

        }

      )

  }, )

  return (
      <Base>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    <div className="Product">
    
      <h1 className="ProductHeading">Product Page</h1>

      <div className="ProductPageContainer">

        {/* <div className="filterContainer">

          <button>Filter</button>

        </div> */}

        <div className="productList">

          {product &&

            product.map((product) => {

              return (

                <div key={product.id} className="productCard">

                  <img

                    src={product.image}

                    className="productImage"

                    width={150} height={150}  />

                     

                  <div>

                    {product.product_name} - Rs. {product.price}/-  

                  </div>
                              
         

                  <Link to="/cart" product={product} ><button>Add to cart</button></Link>
                
                </div>
           
               

              );

            })}

        </div>

      </div>
      
    </div>
   
    </Base>

  );

}

};

export default Product;