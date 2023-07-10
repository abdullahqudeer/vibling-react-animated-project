import React from 'react'
import './Webs.scss'
import Deezer from "../../assets/Images/deezer.png"
import ClickedUp from "../../assets/Images/click-up.png"
import WealthSimple from "../../assets/Images/wealthSimple.png"
const Webs = () => {
  return (
 <React.Fragment>
    <div className='webs-main-div'>
        <div className='container my-5'>
        <div className='row'>
            <div className='detail-div col-lg-4 col-md-4-col-sm-12'>
                <h5 className='mx-2'>Lorem ipsum dolor sit amet consectetur. Nisl cursus lacinia pulvinar sed.</h5>
                <img src={Deezer} alt='deezer' className='mt-4 pt-1'/>
            </div>
            <div className='detail-div col-lg-4 col-md-4-col-sm-12'>
                <h5 className='mx-2'>Lorem ipsum dolor sit amet consectetur. Nisl cursus lacinia pulvinar sed.</h5>
                <img src={WealthSimple}  alt='WealthSimple' className='mt-5'/>
            </div>
            <div className='detail-div col-lg-4 col-md-4-col-sm-12'>
                <h5 className='mx-2'>Lorem ipsum dolor sit amet consectetur. Nisl cursus lacinia pulvinar sed.</h5>
                <img src={ClickedUp} alt='deezer' />
            </div>
        </div>
        </div>
    </div>
 </React.Fragment>
  )
}

export default Webs
