import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

class Gallery extends Component {
  render() {
    const images = [
      {
        original: './photos/1000/600/nature/1.jpeg',
        thumbnail: './photos/250/150/nature/1.jpeg',
      },
      {
        original: './photos/1000/600/nature/2.jpeg',
        thumbnail: './photos/250/150/nature/2.jpeg'
      },
      {
        original: './photos/1000/600/nature/3.jpeg',
        thumbnail: './photos/250/150/nature/3.jpeg'
      }
    ]

    return (
      <ImageGallery items={images} />
    )
  }
}

export default Gallery
