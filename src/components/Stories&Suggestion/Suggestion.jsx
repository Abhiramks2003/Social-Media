import React from 'react'
import { Link } from 'react-router-dom';
import "./Suggestion.css"
const Suggestion = () => {
    return (
        <div className='bg-light msg-div'>
            <div className="d-flex justify-content-between mx-3 py-3 border-bottom">
                <h6>Suggested For You</h6>
                <Link to="/" style={{ color: "#818589", textDecoration: "none", fontWeight: "500" }}>See all</Link>
            </div>

            <div className='m-3'>
                <div className="suggestion-list">
                    <div className="d-flex my-3">
                        <i className='activity-icon-bg'>
                            <img className='profile-pic' src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png" alt="" />
                        </i>
                        <div className='mention'>
                            <p style={{ fontWeight: "700", fontSize: "14px", paddingLeft: "10px", height: "8px" }}>abhiram</p>
                            <p style={{ fontWeight: "700", fontSize: "11px", paddingLeft: "10px", color: "#818589", width: "100px", height: "1px" }}>Recently</p>
                        </div>
                        <i className='new-icon'>
                            <img className='profile-pic' src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png" alt="" />
                        </i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Suggestion