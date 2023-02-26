import React, { useState } from 'react'
import { AiFillHeart } from "react-icons/ai";
import { FaRegComment, FaBookmark } from "react-icons/fa";
import { GrShareOption } from "react-icons/gr";

const Postitem = () => {
    const [like, setLike] = useState(false);
    const [save, setSave] = useState(false);

    const handleLike = () => {
        setLike(!like);
    }

    const handleSave = () => {
        setSave(!save);
    }
    return (
        <>
            <div className="mx-3 main-post">
                <div className="post-toggle d-flex">
                    <i className='activity-icon-bg'>
                        <img className='profile-pic' src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png" alt="" />
                    </i>
                    <div className='mx-0'>
                        <p style={{ fontWeight: "700", fontSize: "14px", paddingLeft: "10px", height: "8px" }}>Irfan Rasheed KC</p>
                        <p style={{ fontWeight: "600", fontSize: "11px", paddingLeft: "10px", color: "#818589", width: "150px", height: "1px" }}>Wandoor,Malappuram</p>
                    </div>
                </div>
                <img className='post-image' src="https://5.imimg.com/data5/ANDROID/Default/2022/4/EH/HS/GH/19051907/product-jpeg-1000x1000.jpg" alt="" onDoubleClick={() => { setLike(true) }} />
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
                    <p>abhiram Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>

            
        

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                            <img className='comment-image' src="https://5.imimg.com/data5/ANDROID/Default/2022/4/EH/HS/GH/19051907/product-jpeg-1000x1000.jpg" alt="" onDoubleClick={() => { setLike(true) }} />
                            <div className='comment-section-main'>
                                <div className="border-bottom py-2 d-flex m-2">
                                    <i className='activity-icon-bg'>
                                        <img className='profile-pic' src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png" alt="" />
                                    </i>
                                    <div className='mx-0'>
                                        <p style={{ fontWeight: "700", fontSize: "14px", paddingLeft: "10px", height: "8px" }}>Irfan Rasheed KC</p>
                                        <p style={{ fontWeight: "600", fontSize: "11px", paddingLeft: "10px", color: "#818589", width: "150px", height: "1px" }}>Wandoor,Malappuram</p>
                                    </div>
                                </div>
                                <div className="comment-section border-bottom">
                                    <div className='commented-user d-flex m-2'>
                                        <i className='activity-icon-bg'>
                                            <img className='profile-pic' src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png" alt="" />
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