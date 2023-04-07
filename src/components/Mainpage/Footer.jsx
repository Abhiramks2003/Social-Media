import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"
import { MdHomeFilled, MdTravelExplore } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";
import { RiNotificationFill } from "react-icons/ri";
import DemoContext from '../../contexts/Democontext'
const Footer = () => {
    const context = useContext(DemoContext);
    const { darkMode } = context;
    return (
        <>
            <footer className='footer-main d-flex justify-content-around border-top border-1 border-secondary align-items-center' style={{ backgroundColor: darkMode ? 'black' : '#F8F9FA' }}>
                <i className='footer-icon'>
                    <Link to="/" style={{ color: darkMode ? "white" : "black" }}>
                        <MdHomeFilled className='home-icon' />
                    </Link>
                </i>
                <i className='footer-icon'>
                    <Link to="/messages" style={{ color: darkMode ? "white" : "black" }}>
                        <BiMessageSquareDetail className='home-icon' />
                    </Link>
                </i>
                <i className='footer-icon'>
                    <Link to="/activity" style={{ color: darkMode ? "white" : "black" }}>
                        <RiNotificationFill className='home-icon' />
                    </Link>
                </i>
                <i className='footer-icon'>
                    <Link to="/explore" style={{ color: darkMode ? "white" : "black" }}>
                        <MdTravelExplore className='home-icon' />
                    </Link>
                </i>
            </footer>
        </>
    )
}

export default Footer