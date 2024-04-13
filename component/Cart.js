import React ,{useContext} from "react";
import {useCart} from "../context/cartContext";

export  function Cart(){
    const cart = useCart();
    // console.log("ele",cart.item[0].name)
    const total = cart.item.reduce((a,b)=> a+ b.price,0);
    return (
        <div>
            <h1>Cart</h1>
            {
               cart && cart.item.map((ele)=>(
                <li>{ele.name} ${ele.price}</li>
               ))
            }
            <h3>Total : ${total}</h3>
        </div>
    )
}
