import React, { useContext, useEffect } from 'react'
import "./Stories.css";
import DemoContext from '../../contexts/Democontext';
const Stories = () => {
  const a = [];
  for (let i = 0; i < 20; i++) {
    a.push(i);
  }

  const context = useContext(DemoContext);
  const { imageData, setImageData } = context;

  useEffect(() => {
    const StoredImage = localStorage.getItem('image');
    const ImageType = localStorage.getItem('imgtype');
    setImageData(`data:${ImageType};base64,` + StoredImage)
  }, [])

  return (
    <div className='bg-light story-div'>
      <div className="story-list">
        <div className="story-item">
          <img className='story-pic mx-2 my-3' src={imageData} alt="" />
          <p>Your Story</p>
        </div>
        {a.map(() => <div className="story-item">
          <img className='story-pic mx-2 my-3' src="https://cdn.imgbin.com/8/20/20/imgbin-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-pvE7Qhr6Zk7kLJpGiWZ9FFRVf.jpg" alt="" />
          <p>abhiram</p>
        </div>)}

      </div>
    </div>
  )
}
// 
export default Stories