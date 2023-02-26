import React, { useState, useEffect } from 'react'
import { AiFillHeart } from "react-icons/ai";
import { FaRegComment, FaBookmark } from "react-icons/fa";
import { GrShareOption } from "react-icons/gr";
import Comments from './Comments';

const Postitem = (props) => {
    const [like, setLike] = useState(false);
    const [save, setSave] = useState(false);
    const [postImage, setPostImage] = useState('');
    const [postUserImage, setPostUserImage] = useState('');
    const handleLike = () => {
        setLike(!like);
    }

    const { post } = props;
    const { userid, datetime, description, images, location,userImage } = post;

    useEffect(()=>{
        const dataNew = new Uint8Array(userImage.data.data);
        const len = dataNew.length;
        const str = new Array(len);
        for (let i = 0; i < len; i++) {
          str[i] = String.fromCharCode(dataNew[i]);
        }
        const base64Data = btoa(str.join(''));
      
        setPostUserImage(`data:${userImage.mimetype};base64,` + base64Data);
      }, [userImage]);

      useEffect(() => {
        const { data, mimetype } = images[0];
        const newPostImage = `data:${mimetype};base64,${data}`;
        setPostImage(newPostImage);
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
                    <i type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
            </div>




            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <Comments post={post}/>
            </div>

            <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel2">Share</h1>
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