import React, { useState, useEffect } from 'react'
import { AiFillHeart } from "react-icons/ai";
import { FaRegComment, FaBookmark } from "react-icons/fa";
import { GrShareOption } from "react-icons/gr";

const Postitem = (props) => {
    const [like, setLike] = useState(false);
    const [save, setSave] = useState(false);
    const [postImage, setPostImage] = useState('');
    const [postUserImage, setPostUserImage] = useState('');
    const handleLike = () => {
        setLike(!like);
    }
    const { post, index } = props;
    const { userid, datetime, description, images, location, userImage } = post;
    console.log(typeof (datetime));
    useEffect(() => {
        if (userImage && userImage.length > 0) {
            const { data, mimetype } = userImage[0];
            setPostUserImage(`data:${mimetype};base64,${data}`);
        }
    }, [userImage]);

    useEffect(() => {
        if (images && images.length > 0) {
            const { data, mimetype } = images[0];
            const newPostImage = `data:${mimetype};base64,${data}`;
            setPostImage(newPostImage);
        }
    }, [images]);



    const handleSave = () => {
        setSave(!save);
    }
    return (
        <>
            <div className="mx-3 main-post">
                <div className="post-toggle d-flex">
                    <i className='activity-icon-bg'>
                        <img className='profile-pic' src={postUserImage} alt="" />
                    </i>
                    <div className='mx-0'>
                        <p style={{ fontWeight: "700", fontSize: "14px", paddingLeft: "10px", height: "8px" }}>{userid}</p>
                        <p style={{ fontWeight: "600", fontSize: "11px", paddingLeft: "10px", color: "#818589", width: "150px", height: "1px" }}>{location}</p>
                    </div>
                </div>
                <img className='post-image' src={postImage} alt="" onDoubleClick={() => { setLike(true) }} />
                <div className="like-comment-save">
                    <AiFillHeart onClick={handleLike} className={like ? "liked" : "like-icon"} />
                    <i type="button" data-bs-toggle="modal" data-bs-target={`#exampleModal-${index}`}>
                        <FaRegComment className='search-icon mx-4' />
                    </i>
                    <i type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                        <GrShareOption className='search-icon' />
                    </i>
                    <FaBookmark onClick={handleSave} className={save ? "save-icon-clicked" : "save-icon"} />
                </div>
                <div className="liked-by">
                    <img className='liked-dp' src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png" alt="" />
                    <p>Liked by abhiram and 200 others</p>
                </div>
                <div className="comments">
                    <p>{userid}: {description}</p>
                </div>
                <div>
                    <p>{} </p>
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
                            <img className='comment-image' src={postImage} alt="" onDoubleClick={() => { setLike(true) }} />
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
                                    <GrShareOption className='search-icon' />
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