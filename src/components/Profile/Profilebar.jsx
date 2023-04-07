import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoSettingsSharp } from 'react-icons/io5';
import { FiUserPlus } from 'react-icons/fi';
import DemoContext from '../../contexts/Democontext';
const Profilebar = () => {
    const userId = localStorage.getItem('userId');
    const context = useContext(DemoContext);
    const { darkMode } = context;
    return (
        <>
            <nav className={`navbar navbar-expand-lg border-bottom border-secondary ${darkMode?"navbar-dark":""}`} style={{ backgroundColor: darkMode ? 'black' : '#F8F9FA' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><h3>{userId}</h3></Link>
                    <div className='profile-bar-icons'>
                        <button className='profile-btns btn'>Edit Profile</button>
                        <button className='profile-btns btn'>Share Profile</button>
                        <i className='bar-icon'><FiUserPlus className='bar-func' /> </i>
                        <i className='bar-icon'><IoSettingsSharp className='bar-func' /> </i>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Profilebar