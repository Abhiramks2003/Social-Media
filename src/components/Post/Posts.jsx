import React from 'react'
import Postitem from './Postitem';
import "./Posts.css";

const Posts = () => {
  const a = [];
  for (let i = 0; i < 10; i++) {
    a.push(i);
  }
  return (
    <div className='bg-light post-div'>
      <div className="scroll-post">
        {a.map(() => <Postitem />)}
      </div>

    </div>
  )
}

export default Posts
