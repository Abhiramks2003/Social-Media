import React, { useState, useEffect, useContext } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios';
import "./Profile.css";
import Profilebar from './Profilebar';
import DemoContext from '../../contexts/Democontext';
import MyPosts from './MyPosts';


const Profile = () => {
  const context = useContext(DemoContext);
  const { name, setName, imageData, setImageData, myPosts, setMyPosts,darkMode } = context;
  const host = 'http://192.168.1.53:5000';
  const userId = localStorage.getItem('userId');
  let url = `${host}/api/profile/${userId}`;

  const LoadmyPosts = async () => {
    try {
      const res = await axios.get(url);
      setMyPosts(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  const deletePost = async () => {
      const res = await axios.delete(url,)
  }

  //updating profile PUT
  const updateProfile = async () => {
    try {
      const res = await axios.put(url);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const Storedname = localStorage.getItem('name');
    const StoredImage = localStorage.getItem('image');
    const ImageType = localStorage.getItem('imgtype');
    setName(Storedname);
    setImageData(`data:${ImageType};base64,` + StoredImage);
    LoadmyPosts();
  }, [])

  return (
    <>
      <div className='profile-page'  style={{ backgroundColor: darkMode ? 'black' : '#F8F9FA',color: !darkMode ? "black" : "white"  }}>
        <Profilebar />
        <div className="profile-main">
          <img src={imageData} className="profile-dp" alt="" />

          <h4>{name}</h4>
          <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
          <div className='publicity'>
            <button className='follow-btn'  style={{ color: darkMode ? "black" : "white" }}> Posts
              <span className="followers">&nbsp; {myPosts.length} </span>
            </button>
            <button className='follow-btn'> Followers
              <span className="followers">&nbsp; 65.7K </span>
            </button>
            <button className='follow-btn'> Following
              <span className="followers">&nbsp; 650 </span>
            </button>
          </div>
        </div>
        <Tabs>
          <TabList>
            <div className='posts-saved-like'>
              <Tab>Posts</Tab>
              <Tab>Videos</Tab>
              <Tab>Saved</Tab>
              <Tab>Liked</Tab>
            </div>
          </TabList>
          <TabPanel>
            <div className='my-posts'>
              {myPosts.map((post) => <>
                <MyPosts post={post} />
              </>
              )}
            </div>
          </TabPanel>


          <TabPanel>
            <div className='my-videos'>

            </div>
          </TabPanel>

          <TabPanel>
            <div className='my-liked'>

            </div>
          </TabPanel>

          <TabPanel>
            <div className='my-saved'>

            </div>
          </TabPanel>
        </Tabs>

      </div>
    </>

  )
}

export default Profile