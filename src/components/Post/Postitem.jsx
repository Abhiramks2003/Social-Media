import React, { useState, useEffect, useContext } from 'react'
import { AiFillHeart } from "react-icons/ai";
import { FaRegComment, FaBookmark,FaShare } from "react-icons/fa";
import DemoContext from '../../contexts/Democontext';
import axios from 'axios';
const Postitem = (props) => {
    const [save, setSave] = useState(false);
    const [postImage, setPostImage] = useState('');
    const [postUserImage, setPostUserImage] = useState('');
    const [likeStatus, setLikeStatus] = useState(false);

    const context = useContext(DemoContext);
    const { darkMode, myPosts, setMyPosts } = context;
    const { post, index } = props;
    const { _id, like, userid, datetime, likecount, description, images, location, userImage } = post;
    const host = 'http://192.168.1.43:5000';

    const handleLike = async () => {
        let url = `${host}/api/like`;
        const userId = localStorage.getItem('userId');
        try {
            const res = await axios.post(url, {
                postid: _id,
                userid: userId
            });
            console.log(res.data);
            setLikeStatus(res.data.like);
        } catch (error) {
            console.error(error);
        }
    }

    const otherProfileHandler = async () => {
        let profileUrl = `${host}/api/profile/${userid}`;
        const res = await axios.get(profileUrl);

    }

    const handleComment = async () => {
        //api call
        
    }

    useEffect(() => {
        const userImageData = userImage?.[0];
        const imageData = images?.[0];
        if (userImageData) {
            const { data, mimetype } = userImageData;
            setPostUserImage(`data:${mimetype};base64,${data}`);
        }
        if (imageData) {
            const { data, mimetype } = imageData;
            const newPostImage = `data:${mimetype};base64,${data}`;
            setPostImage(newPostImage);
        }
    }, [userImage, images]);


    const handleSave = () => {
        setSave(!save);
    }
    return (
        <>
            <div className="mx-3 main-post">
                <div className="post-toggle d-flex" onClick={otherProfileHandler}>
                    <i className='activity-icon-bg'>
                        <img className='profile-pic' src={postUserImage} alt="" />
                    </i>
                    <div className='mx-0'>
                        <p style={{ fontWeight: "700", fontSize: "14px", paddingLeft: "10px", height: "8px", color: darkMode ? 'white' : 'black' }}>{userid}</p>
                        <p style={{ fontWeight: "600", fontSize: "11px", paddingLeft: "10px", color: "#818589", width: "150px", height: "1px" }}>{location}</p>
                    </div>
                </div>
                <img className='post-image' src={postImage} alt="" onDoubleClick={handleLike} />
                <div className="like-comment-save">
                    <AiFillHeart onClick={handleLike} className={like || likeStatus ? "liked" : "like-icon"} />
                    <i type="button" data-bs-toggle="modal" data-bs-target={`#exampleModal-${index}`}>
                        <FaRegComment style={{color:"#0275d8"}} onClick={handleComment} className='search-icon mx-4' />
                    </i>
                    <i type="button" data-bs-toggle="modal" data-bs-target={`#exampleModal2-${index}`}>
                        <FaShare style={{color:"#0275d8"}} className='search-icon' />
                    </i>
                    <FaBookmark onClick={handleSave} className={save ? "save-icon-clicked" : "save-icon"} />
                </div>
                <div className="liked-by">
                    <img className='liked-dp' src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png" alt="" />
                    <p style={{ color: darkMode ? 'white' : 'black' }}>Liked by abhiram and {likecount} others</p>
                </div>
                <div className="comments" style={{ color: darkMode ? 'white' : 'black' }}>
                    <p>{userid}: {description}</p>
                </div>
                <div className="comments" style={{ color: darkMode ? 'white' : 'black' }}>
                    <p>{new Date(datetime).toLocaleString()} </p>
                </div>
            </div>


            <div className="modal fade" id={`exampleModal-${index}`} tabIndex="-1" aria-labelledby={`exampleModalLabel-${index}`} aria-hidden="true">
                <div className="modal-dialog  my-3 modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="comment-modal-title">
                                <h1 className="modal-title fs-5" id={`exampleModalLabel-${index}`}>Image</h1>
                                <h1 className="modal-title fs-5" id={`exampleModalLabel2-${index}`}>Comments</h1>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex justify-content-between">
                            <img className='comment-image' src={postImage} alt="" onDoubleClick={handleLike} />
                            <div className='comment-section-main'>
                                <div className="border-bottom py-2 d-flex m-2">
                                    <i className='activity-icon-bg'>
                                        <img className='profile-pic' src={postUserImage} alt="" />
                                    </i>
                                    <div className='mx-0'>
                                        <p style={{ fontWeight: "700", fontSize: "14px", paddingLeft: "10px", height: "8px" }}>{userid}</p>
                                        <p style={{ fontWeight: "600", fontSize: "11px", paddingLeft: "10px", color: "#818589", width: "150px", height: "1px" }}>{location} </p>
                                    </div>
                                </div>
                                <div className="comment-section border-bottom">
                                    <div className='commented-user d-flex m-2'>
                                        <i className='activity-icon-bg'>
                                            <img className='profile-pic' src={postUserImage} alt="" />
                                        </i>
                                        <div className='my-0'>
                                            <p style={{ fontWeight: "700", fontSize: "14px", paddingLeft: "10px", height: "8px" }}>Irfan Rasheed KC</p><p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit quasi nulla, error sapiente quos blanditiis mollitia fugiat iusto ipsum eligendi iste dolores perspiciatis cum laborum unde quas molestias. Neque, non.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="like-comment-save">
                                    <AiFillHeart onClick={handleLike} className={like ? "liked" : "like-icon"} />
                                    <i type="button">
                                        <FaRegComment className='search-icon mx-4' />
                                    </i>
                                    <FaShare className='search-icon' />
                                    <FaBookmark onClick={handleSave} className={save ? "save-icon-clicked" : "save-icon"} />
                                </div>
                                <div className="add-comment">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="modal fade" id={`exampleModal2-${index}`} tabIndex="-1" aria-labelledby={`exampleModalLabel2-${index}`} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={`exampleModalLabel2-${index}`}>Share</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="share-main">

                            </div>
                        </div>
                        <div className="modal-footer">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Postitem