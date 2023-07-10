import React from 'react'
import BrandSuccess from '../../component/BrandSuccess/BrandSuccess'
import BestBrand from '../../component/BestBrand/BestBrand'
import Branding from '../../component/Branding/Branding'
import Webs from '../../component/Webs/Webs'

const ForBrand = () => {
  return (
   <React.Fragment>
      <div className="brand-main-div">
     <BrandSuccess/>
     <BestBrand />
     <Branding/>
    <Webs/>
      </div>
   </React.Fragment>
  )
}

export default ForBrand
