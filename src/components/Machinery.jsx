import React from 'react'
import './Products.css'
import { ArrowRight, Cpu, Settings2 } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { productsData } from '../data/productsData'

const Machinery = ({ onSelectProduct }) => {
  const machineryProducts = productsData.filter(p => p.category === 'machinery')

  const swiperOptions = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
      rotate: 35,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      clickable: true,
      dynamicBullets: true
    },
    navigation: true,
    modules: [EffectCoverflow, Autoplay, Pagination, Navigation],
    className: 'products-swiper'
  }

  return (
    <section id="machinery" className="products section-padding">
      <div className="container">
        
        <div className="products-header text-center">
          <div className="section-tag">Engineering Units</div>
          <h2 className="section-title">Our Industrial Machinery</h2>
          <p className="section-desc">
            Explore our line of heavy machinery built at our Dharuhera tool room. Swipe and click on any machine card to view detailed specifications, technical parameters, and ordering details.
          </p>
        </div>

        <div className="category-block">
          <div className="category-title-wrap">
            <span className="cat-icon"><i className="fa-solid fa-gears"></i></span>
            <h3>Heavy Machinery Production</h3>
            <span className="cat-line"></span>
          </div>

          <div className="swiper-outer-container">
            <Swiper {...swiperOptions}>
              {machineryProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="swiper-product-card glass-card" onClick={() => onSelectProduct(product)}>
                    <div className="swiper-card-img-wrap">
                      <img src={product.image} alt={product.name} className="swiper-img" />
                      <div className="swiper-img-overlay">
                        <span className="btn-primary overlay-spec-btn">
                          View Specs <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                    <div className="swiper-card-info">
                      <span className="swiper-model-tag">{product.specifications.Model}</span>
                      <h4>{product.name}</h4>
                      <p>{product.shortDesc}</p>
                      <div className="swiper-spec-preview">
                        <span className="spec-item"><Cpu size={12} /> {product.specifications.Model}</span>
                        <span className="spec-item"><Settings2 size={12} /> {Object.values(product.specifications)[1]}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Machinery
