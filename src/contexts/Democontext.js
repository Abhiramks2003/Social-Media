// DemoContext.js
import React from 'react'

const DemoContext = React.createContext({
    name: '',
    imageData:null,
    setName: () => { },
    setImageData:()=>{}
})

export default DemoContext
