import React from 'react'
import SwiperComponent from './SwiperComponent'
import CarouselComponent from './CarouselComponent'
import CaruosalSliderButton from './ButtonsCruosals'

const App = () => {
  return (
    <>
      <h1 style={{textAlign:'center',marginTop:'5%'}}>Swiper Component 1</h1>
      <SwiperComponent/>
      <h1 style={{textAlign:'center',marginTop:'5%'}}>Swiper Component 2</h1>
      <CarouselComponent/>
      <h1 style={{textAlign:'center',marginTop:'5%'}}>Swiper Component 3</h1>
      <CaruosalSliderButton/>
    </>
  )
}

export default App
