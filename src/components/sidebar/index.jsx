import React, {useState} from 'react'
import "./sidebar.css"
import {Link} from "react-router-dom"
import {NavLink} from "react-router-dom"
import {BsPersonBadge} from "react-icons/bs"
import {AiOutlineTool} from "react-icons/ai"
import {BiMessageRoundedDots, BiRefresh} from "react-icons/bi"
import {FaRegBuilding, FaBars} from "react-icons/fa"
import {FiLogOut} from "react-icons/fi"

export default function Sidebar({children}) {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<BsPersonBadge />
        },
        {
            path:"/tools",
            name:"Tools",
            icon:<AiOutlineTool />
        },
        {
            path:"/notification",
            name:"Notification",
            icon:<BiMessageRoundedDots />
        },
        {
            path:"/reset",
            name:"Reset",
            icon:<BiRefresh />
        },
        {
            path:"/about",
            name:"Profile",
            icon:<FaRegBuilding />
        },
        {
            path:"/",
            name:"Logout",
            icon:<FiLogOut />
        },
    ]

  return (
    <div className="container-flex">
        <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
            <div className="top_section">
                <h1 style={{display: isOpen ? "block" : "none"}} className="logo">
                    <Link to="/" className="Logo">Sky Core</Link>
                </h1>
                <div style={{marginLeft: isOpen ? "50px" : "0"}}  className="bars">
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link"
                    activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>
            {children}
        </main>
    </div>
  )
}
