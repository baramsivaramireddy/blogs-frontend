import { useEffect, useRef, useState } from "react"

import { createPortal } from "react-dom"
import { createContext, useContext } from "react"

const dropDownContext = createContext(null)
export default function Dropdown({ children }) {
    const [showDropDown, setShowDropDown] = useState(false)
    const DropdownButtonRef = useRef(null)
    const DropdownRef = useRef(null)
    const [currentLabel, setcurrentLabel] = useState('normal')
    const HandleClick = () => {
        setShowDropDown((prev) => !prev)
    }
    useEffect(() => {
        const { left, bottom } = DropdownButtonRef.current.getBoundingClientRect()


        if (showDropDown) {
            DropdownRef.current.style.top = `${bottom}px`

            //    NEED TO UNDERSTAND THESE WHY fixed in tailwindcss is not applying it here.
            DropdownRef.current.style.position = "fixed"
            DropdownRef.current.style.left = `${left}px`
        }
    }, [DropdownButtonRef, showDropDown])
    const closeDropDown = () => {
        setShowDropDown(false)
    }
    return (<>
        <dropDownContext.Provider value={{ closeDropDown: closeDropDown }}>
            <button ref={DropdownButtonRef} onClick={HandleClick} className="border-2 p-2 flex  flex-row-reverse gap-2 justify-center items-center   rounded-md ">
                <div className="">  {currentLabel}</div>
                <div className=""> &#8595;</div>
            </button>
            {showDropDown && createPortal(<DropDownItems DropdownRef={DropdownRef}  > {children}</DropDownItems>, document.body)}
        </dropDownContext.Provider>
    </>)

}

const DropDownItems = ({ DropdownRef, children }) => {

    return (<div ref={DropdownRef} className="bg-white flex flex-col gap-4 border-2  rounded   py-1">
        {children}
    </div>)
}

const DropDownItem = ({ onClick, children }) => {
    const { closeDropDown } = useContext(dropDownContext)
    return (<button onClick={() => {
        closeDropDown()
        onClick()
    }} className="p-1 border-2 bg-gray-100  m-2 border-black">
        {children}
    </button>)
}

export {
    DropDownItem
}