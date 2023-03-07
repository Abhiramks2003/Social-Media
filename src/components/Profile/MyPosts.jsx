import React, { useState, useEffect } from 'react'
import { TabPanel } from 'react-tabs';
import "./Profile.css"
import 'react-tabs/style/react-tabs.css';
const MyPosts = (props) => {
    const { post } = props;
    const { datetime, description, images, location } = post;
    const [postImage, setPostImage] = useState(null);
    let dateObj = new Date(datetime);
    var day = dateObj.getDate();
    var month = dateObj.toLocaleString('default', { month: 'long' })
    var year = dateObj.getFullYear();
    var date = (day.toString() + " " + month + " " + year.toString());

    useEffect(() => {
        const imageData = images?.[0];
        if (imageData) {
            const { data, mimetype } = imageData;
            const newPostImage = `data:${mimetype};base64,${data}`;
            setPostImage(newPostImage);
        }
    }, [images])

    return (
        <>
            <img src={postImage} alt="aaa" />
        </>

    )
}

export default MyPosts