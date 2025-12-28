import { useState, useEffect, useContext, createContext, } from "react";
import getProduct from '../services/api'
import { getProductCard } from '../services/api';


const productsContext = createContext(null)

export function ProductsProvider({children}){

      const [products_2, setProducts_2] = useState([])
      const [products_1, setProducts_1] = useState([])
      const [products_All, setProducts_All] = useState([])
      const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const data_1 = await getProduct()
            const data_2 = await getProductCard()
            setProducts_1(data_1)
            setProducts_2(data_2)
            setProducts_All([...data_1,...data_2])
            setLoading(false)
        }
        fetchData()

    }, [])
// console.log(products_All);



    return(
        <productsContext.Provider value={{products_All, products_1, products_2,loading}}>
            {children}
        </productsContext.Provider>
    )

}


export default function useProducts (){
  return useContext(productsContext)}