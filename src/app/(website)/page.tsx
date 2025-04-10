import React from 'react'
import Banner from '../components/section/banner'
import FeatureSection from '../components/section/FeatureSection'
import MobileMockup from '../components/section/MobileMockup'
import UiCarouselMain from '../components/section/uicarousel/UiCarouselMain'

function page() {
  return (
    <div>
        <Banner/>
        <FeatureSection/>
        <MobileMockup/>
        <UiCarouselMain/>
    </div>
  )
}

export default page