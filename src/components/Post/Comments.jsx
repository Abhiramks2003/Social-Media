import React, { useState, useEffect } from 'react'
import { AiFillHeart } from "react-icons/ai";
import { FaRegComment, FaBookmark } from "react-icons/fa";
import { GrShareOption } from "react-icons/gr";
const Comments = (props) => {
    const [like, setLike] = useState(false);
    const [save, setSave] = useState(false);

    const [postImage, setPostImage] = useState('');
    const [postUserImage, setPostUserImage] = useState('');

    useEffect(() => {
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

    const handleLike = () => {
        setLike(!like);
    }
    const handleSave = () => {
        setSave(!save);
    }
    return (
        <div className="modal-dialog  my-3 modal-xl">
            <div className="modal-content">
                <div className="modal-header">
                    <div className="comment-modal-title">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Image</h1>
                        <h1 className="modal-title fs-5" id="exampleModalLabel2">Comments</h1>
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
    )
}

export default Comments