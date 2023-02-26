import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"
import { MdHomeFilled, MdTravelExplore } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";
import { RiNotificationFill } from "react-icons/ri";
const Footer = () => {
    return (
        <>
            <footer className='footer-main d-flex justify-content-around bg-light'>
                <i className='footer-icon'>
                    <Link to="/" style={{ color: "black" }}>
                        <MdHomeFilled className='home-icon' />
                    </Link>
                </i>
                <i className='footer-icon'>
                    <Link to="/messages" style={{ color: "black" }}>
                        <BiMessageSquareDetail className='home-icon' />
                    </Link>
                </i>
                <i className='footer-icon'>
                    <Link to="/activity" style={{ color: "black" }}>
                        <RiNotificationFill className='home-icon' />
                    </Link>
                </i>
                <i className='footer-icon'>
                    <Link to="/explore" style={{ color: "black" }}>
                        <MdTravelExplore className='home-icon' />
                    </Link>
                </i>
            </footer>
        </>
    )
}

export default Footer