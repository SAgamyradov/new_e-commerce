import { useState } from "react"

const useToggle = () => {
    const[open, setOpen] = useState()
    const toggle = () => {
        setOpen(!open)
    };
    const[dark, setDark]=useState()
    const darkMode = () =>{
    setDark(!dark)
   }
    
    return{
        open,
        toggle,
        dark,
        darkMode
       
    };
}
export default useToggle
