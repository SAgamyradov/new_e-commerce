import { useState } from "react"

const useToggle = () => {
    const [open, setOpen] = useState()
    const toggle = () => {
        setOpen(!open)
    }
    return {
        open,
        toggle,

    };
}
export default useToggle
