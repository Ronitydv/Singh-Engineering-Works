import React from 'react'
import './Reviews.css'
import { Star, Quote } from 'lucide-react'

const googleReviews = [
  {
    name: 'Er Ashwani singh',
    role: 'Engineer / Client',
    time: '10 months ago',
    text: 'Delivered work on time with high accuracy and stayed true to his commitments. Highly reliable and professional.',
    stars: 5
  },
  {
    name: 'Divya Yadav',
    role: 'Verified Client',
    time: '10 months ago',
    text: 'I have used the products from your company and I am very happy with the quality. They are reliable, well-designed, and meet expectations perfectly. I truly appreciate the effort your company puts into maintaining such good standards.',
    stars: 5
  },
  {
    name: 'HIMANSHU BHARGAVA',
    role: 'Local Guide • 34 photos',
    time: '10 months ago',
    text: 'Very nice place. Good planning and Quality of work.',
    stars: 5
  },
  {
    name: 'vikram singh',
    role: 'Verified Client',
    time: '3 years ago',
    text: 'Quality work & on time delivery. Best toolroom in Dharuhera.',
    stars: 5
  },
  {
    name: 'Anshul Yadav',
    role: 'Verified Client',
    time: '10 months ago',
    text: 'Problem solving attitude, great work.',
    stars: 5
  },
  {
    name: 'Kavita Yadav',
    role: 'Verified Client',
    time: '10 months ago',
    text: 'Excellent work and good quality product.',
    stars: 5
  },
  {
    name: 'Vikash Yadav',
    role: 'Verified Client',
    time: '3 years ago',
    text: 'Quality work & on time delivery. Best in Dharuhera & Bhiwadi.',
    stars: 5
  },
  {
    name: 'satyveer sharma',
    role: 'Verified Client',
    time: '10 months ago',
    text: 'Best tool room in Dharuhera.',
    stars: 5
  },
  {
    name: 'MUKESH IRON',
    role: 'Industry Client',
    time: '3 years ago',
    text: 'Best machinery in Dharuhera.',
    stars: 5
  },
  {
    name: 'kewal singh',
    role: 'Verified Client',
    time: '10 months ago',
    text: 'Well experienced and dedicated team.',
    stars: 5
  },
  {
    name: 'Ashok Yadav',
    role: 'Verified Client',
    time: '3 years ago',
    text: 'Manufacture all critical parts on time.',
    stars: 5
  },
  {
    name: 'brahmdutt jangra',
    role: 'Verified Client',
    time: '10 months ago',
    text: 'Excellent work.',
    stars: 5
  }
]

// Duplicate the array to create a seamless infinite marquee effect
const doubleReviews = [...googleReviews, ...googleReviews]

const Reviews = () => {
  return (
    <section id="reviews" className="reviews section-padding">
      <div className="container-full">
        
        <div className="reviews-header text-center">
          <div className="section-tag">Client Reviews</div>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-desc">
            Hover over any review card to pause the scroll and read their authentic Google Maps feedback.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {doubleReviews.map((rev, index) => (
              <div
                key={`${rev.name}-${index}`}
                className="glass-card review-card"
              >
                <div className="quote-icon-wrap">
                  <Quote size={20} className="quote-icon-gold" />
                </div>
                
                <div className="review-stars-box">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} size={14} fill="var(--primary-gold)" color="var(--primary-gold)" />
                  ))}
                </div>

                <p className="review-text-desc">"{rev.text}"</p>

                <div className="review-footer-main">
                  <div>
                    <h4>{rev.name}</h4>
                    <span className="review-role-text">{rev.role}</span>
                  </div>
                  <span className="review-time-ago">{rev.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Reviews
