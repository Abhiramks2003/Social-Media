import React, { useContext } from 'react'
import "./Message.css"
import DemoContext from '../../contexts/Democontext';
const Primary = () => {
    const a = [];
    for (let i = 1; i <= 15; i++) {
        a.push(i);
    }

    const context = useContext(DemoContext);
    const { darkMode } = context;
    return (
        <div className="primary-msg">
            {a.map((arr, index) => <>
                <div className="d-flex m-3">
                    <i className='msg-icon-bg'>
                        <img className='msg-primary-pic' src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png" alt="" />
                    </i>
                    <div className='msg-user' type="button" data-bs-toggle="modal" data-bs-target={`#primaryModal-${index}`}>
                        <p className='msg-user-name' style={{ color: darkMode ? 'white' : 'black' }}>Irfan Rasheed KC</p>
                        <p className='msg-user-status'>Active {arr}m ago</p>
                    </div>
                </div>


                <div className="modal fade" id={`primaryModal-${index}`} tabIndex="-1" aria-labelledby="primaryModalLabel" aria-hidden="true">
                    <div className="modal-dialog  modal-xl">
                        <div className={`modal-content ${darkMode ? "bg-dark text-white" : "bg-light"}`}>
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="primaryModalLabel">Messages</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="modal-body">
                                {arr}
                            </div>

                            <div className="modal-footer">

                            </div>
                        </div>
                    </div>
                </div>


            </>
            )}


        </div>
    )
}

export default Primary