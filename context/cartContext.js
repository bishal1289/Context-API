import { createContext ,useState,useContext} from "react";

const cartContext = createContext(null);

export function useCart(){
    const cart = useContext(cartContext);
    return cart
}

export function CartProvider(props){
    const [item,setItem] = useState([]);
    return (<cartContext.Provider value={{item,setItem}}>{props.children}</cartContext.Provider>)
    
}
