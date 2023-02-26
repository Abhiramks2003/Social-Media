import React from 'react'
import { Link } from 'react-router-dom'
import { IoSettingsSharp } from 'react-icons/io5';
import { FiUserPlus } from 'react-icons/fi';
const Profilebar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/profile"><h3>a_b_r_m_03</h3></Link>
                    <div className='profile-bar-icons'>
                        <button className='profile-btns'>Edit Profile</button>
                        <button className='profile-btns'>Share Profile</button>
                        <i><FiUserPlus /> </i>
                        <i><IoSettingsSharp /> </i>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Profilebar