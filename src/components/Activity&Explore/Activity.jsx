import React from 'react'
import "./Activity.css"
import { Link } from 'react-router-dom'
import Footer from './Footer'
const Activity = () => {
    return (
        <div className='bg-light activity-div'>

            <div className="d-flex justify-content-between mx-3 py-3 border-bottom">
                <h6>Activity</h6>
                <Link to="/" style={{ color: "#818589", textDecoration: "none", fontWeight: "500" }}>See all</Link>
            </div>

            <div className='m-3  border-bottom'>
                <h6>Stories about you</h6>
                <div className="d-flex my-3">
                    <i className='activity-icon-bg'>
                        <img className='profile-pic' src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png" alt="" />
                    </i>
                    <div className='mention'>
                        <p style={{ fontWeight: "700", fontSize: "14px", paddingLeft: "10px", height: "8px" }}>Mentions</p>
                        <p style={{ fontWeight: "700", fontSize: "11px", paddingLeft: "10px", color: "#818589", width: "150px", height: "1px" }}>2 stories mentions you</p>
                    </div>
                </div>
            </div>

            <div className="m-3">
                <h6>New</h6>
                <div>
                    <div className="d-flex my-3">
                        <i className='activity-icon-bg'>
                            <img className='profile-pic' src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png" alt="" />
                        </i>
                        <div className='new'>
                            <p style={{ fontWeight: "500", fontSize: "11px" }}><span style={{ fontWeight: "800", fontSize: "11px" }}>User123</span> started following you .1m</p>
                        </div>
                        <i className='new-icon'>
                            <img className='profile-pic' src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png" alt="" />
                        </i>
                    </div>
                </div>
            </div>
            <div className='ft'>
            <Footer/>
            </div>
        </div>
    )
}

export default Activity