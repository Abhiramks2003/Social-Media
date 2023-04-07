import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BiSearchAlt, BiSun, BiMoon } from 'react-icons/bi';
import { CgAddR } from 'react-icons/cg';
import "./navbar.css";
import DemoContext from '../../contexts/Democontext';
const Navbar = () => {

    const context = useContext(DemoContext);
    const { setName, imageData, setImageData, darkMode, setDarkMode } = context;
    let navigate = useNavigate();
    const [postItems, setPostItems] = useState({ userid: "", image: null, description: "", location: "" });
    const [showModal, setShowModal] = useState(true);
    const { image, description, location } = postItems;

    const host = 'http://192.168.1.53:5000';
    let url = `${host}/api/post`;

    const userId = localStorage.getItem('userId');
    //Handlepost
    const handlePost = async (e) => {
        e.preventDefault();
        const formDataObj = new FormData();
        formDataObj.append('userid', userId);
        formDataObj.append('image', image);
        formDataObj.append('description', description);
        formDataObj.append('location', location);
        try {
            const res = await axios.post(url, formDataObj);
            console.log(res.data);
            setShowModal(false);
        } catch (err) {
            console.log(err);
        }
    }

    const onChange = (e) => {
        setPostItems({ ...postItems, [e.target.name]: e.target.value });
    }

    const imageHandler = (e) => {
        setPostItems({ ...postItems, image: e.target.files[0] });
    }

    const handleLogout = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('name');
        localStorage.removeItem('userId');
        navigate('/login');
    }

    useEffect(() => {
        const Storedname = localStorage.getItem('name');
        const StoredImage = localStorage.getItem('image');
        const ImageType = localStorage.getItem('imgtype');
        setName(Storedname)
        setImageData(`data:${ImageType};base64,` + StoredImage)
    }, [])

    return (
        <div>
            <nav className={`navbar mx-auto navbar-expand-lg ${!darkMode ? "" : "navbar-dark"}`} style={{ backgroundColor: darkMode ? 'black' : '#F8F9FA' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand brand-logo" to="/">{userId}</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className='search-form' role="search">
                            <i><BiSearchAlt className='search-icon' /></i>
                            <input className="search-bar" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                    <div className="function-icons">
                        <i className='icon-bg'>
                            <CgAddR type='button' data-bs-toggle="modal" data-bs-target="#postUpload" className='nav-icons' />
                        </i>
                        <i className='icon-bg' onClick={() => setDarkMode(!darkMode)}>
                            {!darkMode ? <BiMoon className='nav-icons' /> : <BiSun className='nav-icons' />}
                        </i>
                        <div className="dropdown">
                            <i className="icon-bg" data-bs-toggle="dropdown" aria-expanded="false">
                                <Link to="/profile">
                                    <img className='profile-pic' src={imageData} alt="" />
                                </Link>
                            </i>
                            <ul className="dropdown-menu" style={{ backgroundColor: darkMode ? 'black' : '#F8F9FA' }}>
                                <li><Link  style={{ color: darkMode ? "white" : "black" }} className="dropdown-item" to="/profile">profile</Link></li>
                                <li style={{ color: darkMode ? "white" : "black" }} className="dropdown-item" onClick={handleLogout}>logout</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>


            <div className={`modal fade ${showModal ? "" : "d-none"}`} id="postUpload" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="postUploadLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="postUploadLabel">Add new Post</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handlePost}>
                                <div className="mb-3">
                                    <label htmlFor="image">Image</label>
                                    <input type="file" id="image" name="image" className="form-control" onChange={imageHandler} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Add Description</label>
                                    <input type="text" id="description" name="description" className="form-control" aria-describedby="emailHelp" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="location" className="form-label">Add Location</label>
                                    <input type="text" className="form-control" id="location" name="location" onChange={onChange} />
                                </div>
                                <button type="submit" className="btn btn-primary">Post</button>
                            </form>
                        </div>
                        <div className="modal-footer">


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar