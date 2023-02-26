import React,{useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import Activity from './Activity'
import Explore from './Explore'
import Messages from './Messages'
import Posts from './Posts'
import Stories from './Stories'
import Suggestion from './Suggestion'
import "./Mainpage.css";
import Footer from './Footer'
import Navbar from './Navbar'

const Mainpage = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('login')){

    }
    else{
        navigate('/login');
    }
  }, [])
  
  return (
    <>
      <Navbar />
      <div className='d-flex main-page justify-content-between'>
        <div className="act-exp">
          <Activity />
          <Explore />
        </div>
        <div className="d-flex flex-column" style={{ width: "100%", margin: "auto" }}>
          <Stories />
          <Posts />
        </div>
        <div className="msg-sgt">
          <Messages />
          <Suggestion />
        </div>
      </div>
      <div className='ft'>
        <Footer />
      </div>
    </>
  )
}

export default Mainpage