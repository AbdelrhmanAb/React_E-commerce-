
import { useContext, createContext, useState } from "react";
import ToastText from "../componant/Toast";


const ToastContext = createContext(null)

const useToast = () => {
    return useContext(ToastContext)
}

export default useToast


export const ToastProvider = ({ children }) => {
    const [open, setOpen] = useState(false)
    const [massege, setMassege] = useState("")

    const ShowToast = ({ massege }) => {
        setOpen(true)
        setMassege(massege)
    }
    const CloseToast = () => {
        setOpen(false)
    }

    return (
        <ToastContext.Provider value={{ ShowToast, CloseToast, open, massege }}>
            {children}
            <ToastText massege={massege} />
        </ToastContext.Provider>
    )
}