import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Signup.css";
const Signup = (props) => {
    const [credentials, setCredentials] = useState({ id: "", name: "", email: "", password: "", cpassword: "", image: null });
    let navigate = useNavigate();
    const { id, name, email, password } = credentials;
    const host = 'http://192.168.1.53:5000';
    let url = `${host}/api/signup`;
    //Submitting the user credentials
    const handleSignup = async (e) => {
        e.preventDefault();
        const formDataObj = new FormData();
        formDataObj.append('id',id);
        formDataObj.append('name',name);
        formDataObj.append('email',email);
        formDataObj.append('password',password);
        formDataObj.append('image',credentials.image);
        
        try {
            const res = await axios.post(url, formDataObj);
            console.log(res.data);
            if (res.data.signup) {
                navigate("/login");
            }
            else{
                console.log("Signup failed");
            }
          } catch (err) {
            console.log(err);
          }      
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const changeHandler = (e) => {
        setCredentials({ ...credentials, image: e.target.files[0] });
    };
    return (
        <>
            <div className="container mt-3">
                <h2>Create an Account</h2>
                <form onSubmit={handleSignup} encType="multipart/form-data">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">id</label>
                        <input type="text" className="form-control" id="id" name="id" minLength={5} onChange={onChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" minLength={5} onChange={onChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" onChange={onChange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" id="password" required minLength={5} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" name="cpassword" id="cpassword" required minLength={5} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image">Profile pic(optional)</label>
                        <input type="file" id="image" name="image" className="form-control" onChange={changeHandler} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <div className="mt-3">
                    <h5>Already a User? <Link className='text-primary' to="/login">Login</Link></h5>
                </div>
            </div>
        </>
    )
}

export default Signup
