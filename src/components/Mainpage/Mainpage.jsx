import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Activity from '../Activity&Explore/Activity'
import Explore from '../Activity&Explore/Explore'
import Messages from '../Messages/Messages'
import Posts from '../Post/Posts'
import Stories from '../Stories&Suggestion/Stories'
import Suggestion from '../Stories&Suggestion/Suggestion'
import "./Mainpage.css";
import Footer from './Footer'
import Navbar from './Navbar'
import DemoContext from '../../contexts/Democontext'
const Mainpage = () => {
  const navigate = useNavigate();
  const context = useContext(DemoContext);
  const { darkMode } = context;
  // useEffect(() => {
  //   if (localStorage.getItem('login')) {

  //   }
  //   else {
  //     //navigate('/login');
  //   }
  // }, [navigate])

  return (
    <>
      <Navbar />
      <div className={`d-flex main-page justify-content-between ${!darkMode ? "bg-light" : "bg-dark"}`}>
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