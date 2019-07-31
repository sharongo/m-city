import React from 'react'
import PromotionAnimation from './promotion-animation.component'
import Enroll from './enroll.component'

const Promotion = () => {
    return (
        <div className="promotion_wrapper" style={{background:'#ffffff'}}>
              <div className="container">
                <PromotionAnimation/>
                <Enroll/>
            </div>
        </div>
    )
}

export default Promotion
