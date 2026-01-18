import { useContext, createContext, useReducer, useEffect } from "react";

import { getProductCard } from "../services/api";
import ReducerCard from "../Reducer/CardReducer";


const ReducerContext = createContext(getProductCard)
const useCardProducts = () => {
    return useContext(ReducerContext)
}


export default useCardProducts

export function ReducerProvider({ children }) {


 const getInitialCart = () => {
  try {
    const storedCart = localStorage.getItem("cart");

    if (!storedCart || storedCart === "undefined") {
      return [];
    }

    return JSON.parse(storedCart);
  } catch (error) {
    console.error("Invalid cart data in localStorage", error);
    return [];
  }
};



    const [cardList, dispatch] = useReducer(ReducerCard, [],getInitialCart)


     useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cardList));
  }, [cardList]);


    return (
        <ReducerContext.Provider value={{ cardList, dispatch }}>
            {children}
        </ReducerContext.Provider>
    )

}