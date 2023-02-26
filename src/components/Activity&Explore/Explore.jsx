import React from 'react'
import { Link } from 'react-router-dom'
import "./Explore.css";
import Footer from './Footer';
const Explore = () => {
    const images = [];
    for (let i = 0; i < 27; i++) {
        images.push(<div className='explore-image'>
            <img className='exp-pic' src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png" alt="" />
        </div>);
    }
    
    return (
        <div className='bg-light explore-div'>
            <div className="d-flex justify-content-between mx-3 py-3 border-bottom">
                <h6>Explore</h6>
                <Link to="/" style={{ color: "#818589", textDecoration: "none", fontWeight: "500" }}>See all</Link>
            </div>
            <div className='explore-content'>
                {images.map((image) => {
                    return <div className='explore-image'>
                        <img className='exp-pic' src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png" alt="" />
                    </div>
                })}
            </div>
            <div className='ft'>
                <Footer />
            </div>
        </div>
    )
}

export default Explore