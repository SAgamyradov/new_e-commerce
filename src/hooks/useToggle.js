import { useState } from "react"

const useToggle = (status = true) => {
    const[open, setOpen] = useState(status)
    const[dark, setDark]= useState()
    const toggle = () => {
        setOpen(!open)
    };
    const darkMode = () => {
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
