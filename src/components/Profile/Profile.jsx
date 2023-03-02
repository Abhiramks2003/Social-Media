import React, { useEffect, useContext, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios';
import "./Profile.css";
import Profilebar from './Profilebar';
import DemoContext from '../../contexts/Democontext';
import MyPosts from './MyPosts';

const Profile = () => {
  const context = useContext(DemoContext);
  const { name, setName, imageData, setImageData } = context;
  const host = 'http://192.168.1.53:5000';
  const userId = localStorage.getItem('userId');
  let url = `${host}/api/profile/${userId}`;
  const [myPosts, setMyPosts] = useState([]);

  const LoadmyPosts = async () => {
    try {
      const res = await axios.get(url);
      console.log(res.data);
      setMyPosts(res.data);
    } catch (error) {

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
      <div className='profile-page'>
        <Profilebar />

        <div className="profile-main">
          <img src={imageData} className="profile-dp" alt="" />
          <h4>{name}</h4>
          <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
          <div className='publicity'>
            <h5>Posts  {myPosts.length}</h5>
            <h5>Followers 10k</h5>
            <h5>Following 620</h5>
          </div>
        </div>
        <Tabs>
          <TabList>
            <div className='posts-saved-like border-top border-bottom'>
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