import { useState } from "react"

const useToggle = (status = true) => {
    const[open, setOpen] = useState(status)
    const toggle = () => {
        setOpen(!open)
    };
    return{
        open,
        toggle
    };
}
export default useToggle
