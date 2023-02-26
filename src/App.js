import React, { useState } from 'react'
import Signup from './components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './components/Login';
import Mainpage from './components/Mainpage';
import Activity from './components/Activity';
import Messages from './components/Messages';
import Profile from './components/Profile';
import Explore from './components/Explore';
import DemoContext from './contexts/Democontext';

function App() {
  const [name, setName] = useState('')
  const [imageData, setImageData] = useState(null);
  const contextValue = {
    name,
    imageData,
    setName,
    setImageData
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