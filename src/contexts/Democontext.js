// DemoContext.js
import React from 'react'

const DemoContext = React.createContext({
    name: '',
    imageData: null,
    setName: () => { },
    setImageData: () => { },
    myPosts: [],
    setMyPosts: () => { },
    darkMode: false,
    setDarkMode: () => { },
})

export default DemoContext
