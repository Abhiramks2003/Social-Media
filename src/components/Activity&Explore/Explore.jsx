import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import "./Explore.css";
import Footer from '../Mainpage/Footer';
import DemoContext from '../../contexts/Democontext'
const Explore = () => {
    const images = [];
    for (let i = 0; i < 27; i++) {
        images.push(<div className='explore-image'>
            <img className='exp-pic' src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png" alt="" />
        </div>);
    }
    const context = useContext(DemoContext);
    const {darkMode} = context;
    return (
        <div className={`${!darkMode ? "bg-light" : "bg-dark"} explore-div`}>
            <div className="d-flex justify-content-between mx-3 py-3 border-bottom">
                <h6>Explore</h6>
                <Link to="/explore" onClick={()=>{}} style={{ color: "#818589", textDecoration: "none", fontWeight: "500" }}>See all</Link>
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