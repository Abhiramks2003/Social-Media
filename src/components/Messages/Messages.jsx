import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiMessageSquareAdd, BiSearchAlt } from 'react-icons/bi';
import { AiOutlineControl } from 'react-icons/ai'
import "./Message.css"
import Primary from './Primary';
import General from './General';
import Requests from './Requests';
import Footer from '../Mainpage/Footer';
const Messages = () => {
    const [msg, setMsg] = useState({ primary: true, general: false, request: false,clr1:"black",clr2:"#818589",clr3:"#818589"});
    let element;
    if (msg.primary) {
        element = <Primary />;
    }
    else if (msg.general && !msg.primary) {
        element = <General />;
    }
    else if (msg.request) {
        element = <Requests />
    }
    return (
        <>
            <div className='bg-light msg-div'>
                <div className="d-flex justify-content-between mx-3 py-3">
                    <h6>Messages</h6>
                    <Link to="/" style={{ color: "#818589", textDecoration: "none", fontWeight: "500" }}><BiMessageSquareAdd /></Link>
                </div>

                <div>
                    <form className='d-flex msg-form' role="search">
                        <i style={{ backgroundColor: "#E8E8E8", marginLeft: "15px", border: "none", borderRadius: "20px 0px 0px 20px" }}><BiSearchAlt className='search-icon' /></i>
                        <input className="msg-search-bar" type="search" placeholder="Search" aria-label="Search" />
                        <i style={{ backgroundColor: "#E8E8E8", border: "none", borderRadius: "0px 20px 20px 0px" }}><AiOutlineControl className='search-icon mx-2' /></i>
                    </form>
                </div>

                <div className="msg-tab my-3 border-bottom">
                    <ul>
                        <li style={{color:msg.clr1}} onClick={() => {
                            setMsg({ primary: true, general: false, request: false,clr1:"black",clr2:"#818589",clr3:"#818589"});
                        
                        }}>Primary</li>
                        <li style={{color:msg.clr2}} onClick={() => {
                            setMsg({ primary: false, general: true, request: false,clr1:"#818589",clr2:"black",clr3:"#818589"});
                        }}>General</li>
                        <li style={{color:msg.clr3}} onClick={() => {
                            setMsg({ primary: false, general: false, request: true,clr1:"#818589",clr2:"#818589",clr3:"black" });
                        }}>Requests(2)</li>
                    </ul>
                </div>
                <div className="primary-msg">
                        {element}
                </div>
            </div>
            <div className='ft'>
            <Footer/>
            </div>
        </>
    )
}

export default Messages