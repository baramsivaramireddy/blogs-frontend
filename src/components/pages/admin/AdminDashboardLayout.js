"use client"
import Link from "next/link"
import { useRef, useState } from "react"
const AdminDashboardLayout = ({ children }) => {


    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
    const subMenuRef = useRef(null)

    const submenuHandler = () => {

        setIsSubmenuOpen((prev) => !prev)
       
        subMenuRef.current.classList.toggle('w-full')
    }
    return (<>
        <div className="md:flex h-full">

            <div className="md:w-56 overflow-y-auto    " >

                <button className="border-2 m-1 py-1 px-2 p-1 md:hidden" onClick={submenuHandler}>

                    {isSubmenuOpen ? <span> &#x274C;</span> : <span>&#x2630;</span>}
                </button>
              
                <SubMenuNavBar isSubmenuOpen={isSubmenuOpen} submenuHandler={submenuHandler} subMenuRef={subMenuRef} />
            </div>
            <div className="flex-1 bg-gray-100 h-full">
                {children}
            </div>
        </div>

    </>)
}

const NavItems = [
    {
        title: 'Blogs',
        link: 'dashboard/blog'
    },
]

const SubMenuNavBar = ({ subMenuRef }) => {

    return (
        <>
            <div ref={subMenuRef} className={` absolute bg-white z-10  md:static w-0 md:w-full overflow-hidden h-full   transition-all duration-1000	    `}>
            <div className="hidden md:block  text-2xl mt-5  ">  Menu  </div>
                <div className="flex   flex-col justify-center gap-5   p-5 items-center md:justify-normal md:items-center list-none h-full">
                    {NavItems.map((item, index) => (

                        <NavItem key={index} {...item} />
                    ))}
                </div>

            </div>

        </>
    )
}

const NavItem = ({ title, link }) => {

    return (<>
        <li className="our-nav-link "><Link href={`${link}`}>{title}</Link> </li>
    </>)
}
export default AdminDashboardLayout