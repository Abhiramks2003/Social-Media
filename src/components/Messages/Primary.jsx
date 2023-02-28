import React from 'react'
import "./Message.css"
const Primary = () => {
    const a = [];
    for (let i = 1; i <= 15; i++) {
        a.push(i);
    }
    return (
        <div className="primary-msg">
            {a.map((arr, index) => <div className="d-flex m-3">
                <i className='msg-icon-bg'>
                    <img className='msg-primary-pic' src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png" alt="" />
                </i>
                <div className='msg-user' type="button" data-bs-toggle="modal" data-bs-target={`#exampleModal-${index}`}>
                    <p className='msg-user-name'>Irfan Rasheed KC</p>
                    <p className='msg-user-status'>Active {arr}m ago</p>
                </div>
            </div>
            )}

            {a.map((arr, index) => <div className="modal fade" id={`exampleModal-${index}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {arr}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default Primary