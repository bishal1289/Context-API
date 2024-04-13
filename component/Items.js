import React,{useContext} from "react";
import {useCart} from "../context/cartContext";


export  function Items(props){
    const cart = useCart();
    console.log("cc",cart);

    return (
        <div>
            <h3>Name : {props.name}</h3>
            <p>Price : {props.Price}</p>
            <button onClick={()=>cart.setItem([...cart.item,{name:props.name,price:props.Price}])}>Add To Cart</button>
        </div>
    )
}
