import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import Mainpage from './components/Mainpage/Mainpage';
import Activity from './components/Activity&Explore/Activity';
import Messages from './components/Messages/Messages';
import Profile from './components/Profile/Profile';
import Explore from './components/Activity&Explore/Explore';
import DemoContext from './contexts/Democontext';

function App() {
  const [name, setName] = useState('')
  const [imageData, setImageData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [myPosts, setMyPosts] = useState([]);
  const contextValue = {
    name,
    imageData,
    setName,
    setImageData,
    darkMode,
    setDarkMode,
    myPosts,
    setMyPosts
  }


  return (

    <div className='App'>
      <Router>
        <DemoContext.Provider value={contextValue}>
          <Routes>
            <Route path='/' element={<Mainpage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/activity' element={<Activity />} />
            <Route path='/messages' element={<Messages />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </DemoContext.Provider>
      </Router>
    </div>

  )
}

export default App;