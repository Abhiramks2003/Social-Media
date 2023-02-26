import React from 'react'
import "./Message.css"
const Requests = () => {
    return (
        <>
            <div className="primary-msg">
                <div className="d-flex m-3">
                    <i className='msg-icon-bg'>
                        <img className='msg-primary-pic' src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png" alt="" />
                    </i>
                    <div className='mx-0'>
                        <p style={{ fontWeight: "700", fontSize: "14px", paddingLeft: "10px", height: "8px" }}>Jayakanth Arun</p>
                        <p style={{ fontWeight: "600", fontSize: "11px", paddingLeft: "10px", color: "#818589", width: "150px", height: "1px" }}>Requested 30m ago</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Requests