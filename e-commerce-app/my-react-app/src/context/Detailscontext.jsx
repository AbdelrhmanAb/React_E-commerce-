import { useContext, createContext , useState } from "react";



const DetailsContext = createContext(null)


const useProductDetails  = ()=>{
    return useContext(DetailsContext)
}

export default useProductDetails


export const ProDetailsProvider = ({children})=>{
const [proId, setProId] = useState(0)



    return(
        <>
        <DetailsContext.Provider value={{proId,setProId}}>
            {children}
        </DetailsContext.Provider>
        </>
    )

}

