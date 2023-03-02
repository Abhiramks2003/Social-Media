import React, { useState, useEffect, useContext } from 'react'
import Postitem from './Postitem';
import "./Posts.css";
import axios from 'axios';
import DemoContext from '../../contexts/Democontext';
const Posts = () => {
  const [postData, setPostData] = useState([]);
  const context = useContext(DemoContext);
  const { darkMode } = context;
  const getPostItems = async () => {
    try {
      const host = 'http://192.168.1.53:5000';
      let url = `${host}/api/post`;
      const res = await axios.get(url);
      console.log(res.data);
      setPostData(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getPostItems();
  }, [])

  return (
    <div className={`${!darkMode ? "bg-light" : "bg-dark"} post-div`}>
      <div className="scroll-post">
        {postData.map((post, index) => <Postitem post={post} index={index} />)}
      </div>
    </div>
  )
}

export default Posts
