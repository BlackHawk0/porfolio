import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import profile from '../resources/pngfind.com-placeholder-png-6104451.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import '../index.css'

function SideBar() {
    return (
        <div className="bg-gray-900 w-20 h-screen absolute top-0 min-h-fit z-3 ">
            <Link to='/'>
                <img src={profile} alt='daniel' className='block w-6 h-auto my-2.5 mx-auto'/>
            </Link>
            <nav className='block text-center absolute h-56 top-1/2 w-full -mt-32'>
                <NavLink exact="true" className={(navData) => (navData.isActive ? "active" : 'none')} to="/">
                    <FontAwesomeIcon icon={faHome} className="hover:text-yellow-500" />
                </NavLink>
                <NavLink exact="true" className={(navData) => (navData.isActive ? "active" : 'none')} to="/about">
                    <FontAwesomeIcon icon={faUser}  className="hover:text-yellow-500" />
                </NavLink>
                <NavLink exact="true" className={(navData) => (navData.isActive ? "active" : 'none')} to="/contact">
                    <FontAwesomeIcon icon={faEnvelope}  className="hover:text-yellow-500"/>
                </NavLink>
            </nav>
            
        </div>
    )
}

export default SideBar