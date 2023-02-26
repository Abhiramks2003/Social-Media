import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DemoContext from '../contexts/Democontext';

const Login = (props) => {
    //const { setDetails } = context
    const [credentials, setCredentials] = useState({ id: "", password: "" })
    let navigate = useNavigate();
    
    const context = useContext(DemoContext);
    const { setName, setImageData } = context;
    const host = 'http://192.168.1.53:5000';
    //Submitting the user credentials
    const handleSubmit = async (e) => {
        e.preventDefault();
        let url = `${host}/api/login`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: credentials.id, password: credentials.password })
        });
        const json = await response.json()
        console.log(json)

        const { _doc, image } = json;
        const { data, mimetype } = image;
        const { name,id } = _doc;
        console.log(mimetype);
        localStorage.setItem('imgtype', mimetype)

        if (json.login) {
            //Save the authtoken and redirect
            //localStorage.setItem('token', json.authToken)
            localStorage.setItem('login', json.login);
            setName(name);
            localStorage.setItem('name', name);
            localStorage.setItem('userId',id);
            //const base64Data = btoa(String.fromCharCode(...new Uint8Array(data.data)));
            let str = '';
            for (let i = 0; i < data.data.length; i++) {
                str += String.fromCharCode(data.data[i]);
            }
            const base64Data = btoa(str);

            setImageData(`data:${mimetype};base64,` + base64Data);
            localStorage.setItem('image', base64Data);
            navigate('/');
        }
        else {
            console.log("Login Failed!!!")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className='container mt-5'>

                <h2>Login to continue</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">id</label>
                        <input type="text" className="form-control" id="id" name="id" minLength={5} onChange={onChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" id="password" onChange={onChange} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                    <div className="mt-3">
                        <h5>New User? <Link className='text-primary' to="/signup">Signup</Link> </h5>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login