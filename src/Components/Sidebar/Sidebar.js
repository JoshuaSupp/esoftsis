import React from 'react'
import {
    FaTh,
    FaBars,
    FaUser,
    FaRegistered,
    FaTable,
    FaTablet,
    
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
    const menuItem = [
        {
            path:'/Dashboard',
            name: "Dashboard",
            icon: <FaTh/>
        },
        {
          path:'/Admin',
          name: "Admin",
          icon: <FaUser/>
      },
      {
        path:'/KXRegistry',
        name: "KX Registry",
        icon: <FaRegistered/>
    },
    {
      path:'/ANRegistry',
      name: "AN Registry",
      icon: <FaRegistered/>
  },

  {
    path:'/PDRegistry',
    name: "PD Registry",
    icon: <FaRegistered/>
},
    ]
        
    
  return (

    <div className='container'>
            <div className='sidebar'>
              <div className='topsection'>
                <h1 className='logo'>Logo</h1>
                <div className='bars'>
                    <FaBars/>
                </div>
              </div>
              {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className='link' activeclassName='active'>
                        <div className='icon'>{item.icon}</div>
                        <div className='link_text'>{item.name}</div>
                    </NavLink>
                ))
              }
            </div> 
            <main>{children}</main>
    </div>
  )
}

export default Sidebar