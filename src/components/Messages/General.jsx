import React, { useContext } from 'react'
import DemoContext from '../../contexts/Democontext';
const General = () => {
    const a = [];
    for (let i = 0; i < 100; i++) {
        a.push(i);
    }

    const context = useContext(DemoContext);
    const { darkMode } = context;
    return (
        <>
            <div className="primary-msg">
                {a.map(() => <div className="d-flex m-3">
                    <i className='msg-icon-bg'>
                        <img className='msg-primary-pic' src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png" alt="" />
                    </i>
                    <div className='mx-0'>
                        <p className='msg-user-name' style={{ color: darkMode ? 'white' : 'black' }}>CET Trivandrum</p>
                        <p className='msg-user-status'>Active now</p>
                    </div>
                </div>)}
            </div>
        </>
    )
}

export default General