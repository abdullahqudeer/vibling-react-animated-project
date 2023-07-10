import React from 'react'
import './Brilliance.scss'
import Analytics from "../../assets/Images/Analytics.png"
import secondPhone from "../../assets/Images/secondPhone.png"
import PhoneLeftImg from "../../assets/Images/PhoneLeftImg.png"
import PhoneMiddleImg from "../../assets/Images/PhoneMiddleImg.png"
import PhoneRightImg from "../../assets/Images/PhoneRightImg.png"
import Target from "../../assets/Images/Target.png"

const Brilliance = () => {
  return (
<React.Fragment>
    <div className='brilliance-main-div container my-5 py-5'>
    <div className="title-div d-flex justify-content-center mt-5 pt-5">
          <h2 className="title">Targeted Brilliance</h2>
        </div>
        <div className="desc-div mt-3">
          <h6 className="description">
          Find your brand's perfect match among Vidbling's galaxy of creators. Collaborate with authentic voices that genuinely resonate with your audience, forging deep connections and stirring emotions. Experience the powerful alchemy of influencer collaboration that unlocks untapped potential.
          </h6>
        </div>
        <div className="d-flex justify-content-center  mt-5">
          <div className="top-btn-div d-flex justify-content-center align-items-center">
            <button className="top-btn">Learn More</button>
          </div>
        </div>
        <div className="images-div d-flex justify-content-start my-5 py-5">
          <div className="analytics-img d-flex justify-content-start align-items-start">
            <img src={Analytics} alt="Analytics" />
          </div>

          <div className="iphone-div d-flex justify-content-center">
            <div className="first-div">
              <div className="phone-div">
                <div className="align-self-center phone-pic1">
                  <img src={PhoneLeftImg} alt="iphoneImg" />
                </div>
              </div>
              <div className="align-self-center phone-pic position-relative">
                <img src={secondPhone} alt="img" className="top-0 px-3 img" />
              </div>
            </div>
            <div className="second-div">
              <div className="phone-div">
                <div className="align-self-center phone-pic2 d-flex justify-content-center">
                  <img src={PhoneMiddleImg} />
                </div>
              </div>
              <div className="align-self-center phone-picc position-relative">
                <img src={secondPhone} alt="img" className="top-0 px-3 img" />
              </div>
            </div>
            <div className="third-div">
              <div className="phone-div">
                <div className="align-self-center phone-pic1 d-flex justify-content-center">
                  <img src={PhoneRightImg} />
                </div>
              </div>
              <div className="align-self-center phone-pic position-absolute">
                <img src={secondPhone} alt="img" className="top-0 px-3 img" />
              </div>
            </div>
          </div>

          <div className="target-img d-flex align-items-start justify-content-end">
            <img src={Target} alt="Target" />
          </div>
        </div>
    </div>
</React.Fragment>
  )
}

export default Brilliance
