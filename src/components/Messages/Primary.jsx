import React from 'react'
import "./Message.css"
const Primary = () => {
    const a = [];
    for (let i = 1; i <= 15; i++) {
        a.push(i);
    }
    return (
        <>
            <div className="primary-msg">
                {a.map((arr) => <div className="d-flex m-3">
                    <i className='msg-icon-bg'>
                        <img className='msg-primary-pic' src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png" alt="" />
                    </i>
                    <div className='msg-user'>
                        <p className='msg-user-name'>Irfan Rasheed KC</p>
                        <p className='msg-user-status'>Active {arr}m ago</p>
                    </div>
                </div>)}

            </div>
        </>
    )
}

export default Primary