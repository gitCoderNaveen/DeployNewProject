import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageSlider from './ImageSlider'
import ImageGrid from './ImageGrid'
import ContentDiv from './ContentDiv'

export default function Home() {
  return (
    <div>
     <ImageSlider/>
      <ImageGrid/>
      <ContentDiv/>
    </div>
  )
}
