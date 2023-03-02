// DemoContext.js
import React from 'react'

const DemoContext = React.createContext({
    name: '',
    imageData:null,
    setName: () => { },
    setImageData:()=>{},
    postData:[],
    setPostData:()=>{},
    darkMode:false,
    setDarkMode:()=>{}
})

export default DemoContext
