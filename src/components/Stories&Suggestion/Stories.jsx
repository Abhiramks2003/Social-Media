import React from 'react'
import "./Stories.css";
const Stories = () => {
  const a = [];
  for (let i = 0; i < 20; i++) {
    a.push(i);
  }
  return (
    <div className='bg-light story-div'>
      <div className="story-list">
        {a.map(() => <div className="story-item">
          <img className='story-pic mx-2 my-3' src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png" alt="" />
          <p>abhiram</p>
        </div>)}

      </div>
    </div>
  )
}

export default Stories