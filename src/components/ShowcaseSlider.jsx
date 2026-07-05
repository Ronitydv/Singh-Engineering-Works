import React from 'react'
import './ShowcaseSlider.css'

const images = [
  '/images/projects/project1.jpg',
  '/images/projects/project2.jpg',
  '/images/projects/project3.jpg',
  '/images/projects/project4.jpg',
  '/images/projects/project5.jpg',
  '/images/projects/project6.jpg',
  '/images/projects/project7.jpg',
  '/images/projects/project8.jpg'
]

const ShowcaseSlider = () => {
  // Duplicate images list to create seamless infinite scrolling marquee
  const sliderImages = [...images, ...images]

  return (
    <section className="showcase-slider-section">
      <div className="container">
        <div className="showcase-header text-center">
          <div className="section-tag">Gallery</div>
          <h2 className="section-title">Our Workshop & Fabrication Work</h2>
          <p className="section-desc">
            Take a look inside our Dharuhera machine shop and see some of our active contract jobs and fabricated assemblies.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Sliding Gallery */}
      <div className="showcase-marquee-container">
        <div className="showcase-marquee-track">
          {sliderImages.map((src, index) => (
            <div className="showcase-card" key={index}>
              <div className="showcase-img-wrap">
                <img 
                  src={src} 
                  alt={`Singh Engineering Project ${index + 1}`} 
                  className="showcase-img"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSlider
