import React, { useContext, useEffect } from 'react'
import "./Stories.css";
import DemoContext from '../../contexts/Democontext';
const Stories = () => {
  const a = [];
  for (let i = 0; i < 20; i++) {
    a.push(i);
  }

  const context = useContext(DemoContext);
  const { imageData, setImageData, darkMode } = context;

  useEffect(() => {
    const StoredImage = localStorage.getItem('image');
    const ImageType = localStorage.getItem('imgtype');
    setImageData(`data:${ImageType};base64,` + StoredImage)
  }, [])

  return (
    <div className='story-div border border-secondary border-start-0 border-end-0' style={{ backgroundColor: darkMode ? 'black' : '#F8F9FA' }}>
      <div className="story-list">
        <div className="story-item">
          <img className='story-pic mx-2 my-3' src={imageData} alt="" />
          <p>Your Story</p>
        </div>
        {a.map((index) => <> <div className="story-item">
          <img type="button" data-bs-toggle="modal" data-bs-target={`#staticBackdrop-${index}`} className='story-pic mx-2 my-3' src="https://cdn.imgbin.com/8/20/20/imgbin-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-pvE7Qhr6Zk7kLJpGiWZ9FFRVf.jpg" alt="" />
          <p>abhiram</p>
        </div>

          <div className="modal fade" id={`staticBackdrop-${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id={`staticBackdropLabel-${index}`}>Modal title</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">

                  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">

                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="https://cdn.imgbin.com/8/20/20/imgbin-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-pvE7Qhr6Zk7kLJpGiWZ9FFRVf.jpg" className="d-block story-carousel-img" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src="https://cdn.imgbin.com/8/20/20/imgbin-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-pvE7Qhr6Zk7kLJpGiWZ9FFRVf.jpg" className="d-block story-carousel-img" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src="https://cdn.imgbin.com/8/20/20/imgbin-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-pvE7Qhr6Zk7kLJpGiWZ9FFRVf.jpg" className="d-block story-carousel-img" alt="..." />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>

                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Understood</button>
                </div>
              </div>
            </div>
          </div>

        </>
        )}

      </div>
    </div>
  )
}
// 
export default Stories