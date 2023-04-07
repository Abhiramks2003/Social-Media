import React, { useState, useEffect, useContext } from 'react'
import Postitem from './Postitem';
import "./Posts.css";
import axios from 'axios';
import DemoContext from '../../contexts/Democontext';
import Loader from '../Mainpage/Loader';
const Posts = () => {
  const [loading, setLoading] = useState(true);
  const [postData, setPostData] = useState([])
  const context = useContext(DemoContext);
  const { darkMode } = context;

  const getPostItems = async () => {
    try {
      const host = 'http://192.168.1.43:5000';
      const userId = localStorage.getItem('userId');
      let url = `${host}/api/post/${userId}`;
      const res = await axios.get(url);
      setPostData(res.data)
      console.log(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    getPostItems();
  }, [])


  return (
    <>
      <div className={`post-div`} style={{ backgroundColor: darkMode ? 'black' : '#F8F9FA' }}>

        <div className="scroll-post">
          {loading ? <Loader /> : postData.map((post, index) => <Postitem post={post} index={index} />)}
        </div>
      </div>
    </>
  )
}
//{loading && }
export default Posts
