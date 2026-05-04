import React, { useState, useRef } from 'react';
import { FaStar, FaGoogle, FaCheckCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const reviews = [
  {
    author: 'M Whalen',
    date: '1 year ago',
    color: '#e91e63',
    initial: '',
    hasPhoto: true,
    shortText: 'A tree took out our power line and damaged the mast and connection to the side of our house. Langstaff and Sloane did the repair within 24 hours to proper ESA standards so that Toronto Hydro could co...',
    fullText: 'A tree took out our power line and damaged the mast and connection to the side of our house. Langstaff and Sloane did the repair within 24 hours to proper ESA standards so that Toronto Hydro could come out and reconnect us. They did not charge us emergency rates and were really responsive and professional. I would recommend them to anyone.',
  },
  {
    author: 'Graham Baxter',
    date: '2 years ago',
    color: '#4CAF50',
    initial: 'G',
    shortText: 'Rob and his team problem-solved a challenging service upgrade to our 115 year old house. Car charger installed an...',
    fullText: 'Rob and his team problem-solved a challenging service upgrade to our 115 year old house. Car charger installed and working perfectly. Very professional, thorough, and reasonably priced. Would highly recommend for any electrical work.',
  },
  {
    author: 'Fathiat Shittu',
    date: '2 years ago',
    color: '#9C27B0',
    initial: 'F',
    shortText: 'Robert is absolutely amazing and kind, he helped me guided me and walked through fixing my tripped breaker over the phone,...',
    fullText: 'Robert is absolutely amazing and kind, he helped me guided me and walked through fixing my tripped breaker over the phone, and didn\'t even charge me for it. His integrity and kindness are second to none. I would recommend him to anyone who needs electrical work done.',
  },
  {
    author: 'K Nishi',
    date: '2 years ago',
    color: '#FF9800',
    initial: 'K',
    shortText: "Rob is an absolute gentleman! Some people build their business off of the lack of knowledge of others but not Rob. I had issues...",
    fullText: "Rob is an absolute gentleman! Some people build their business off of the lack of knowledge of others but not Rob. I had issues with my panel and he walked me through everything, explained the options, and gave me an honest assessment. The work was done quickly and professionally.",
  },
  {
    author: 'Mena Mendes',
    date: '2 years ago',
    color: '#4CAF50',
    initial: 'M',
    shortText: 'My experience from start to finish with Rob and Glenn was a 10/10. It was our pleasure to deal with both Rob and Glenn. They were...',
    fullText: 'My experience from start to finish with Rob and Glenn was a 10/10. It was our pleasure to deal with both Rob and Glenn. They were professional, punctual, and did excellent work on our complete rewiring project. Pricing was fair and transparent. Highly recommended!',
  },
];

function Reviews() {
  const [expandedCards, setExpandedCards] = useState({});
  const scrollRef = useRef(null);

  const toggleExpand = (i) => {
    setExpandedCards((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -280, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 280, behavior: 'smooth' });
    }
  };

  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <div className="reviews-layout">
          <div className="reviews-left">
            <div className="excellent">EXCELLENT</div>
            <div className="rating-text">
              <strong>Google</strong> rating score: <strong>4.7</strong> of 5, based on <strong>43+ reviews</strong>
            </div>
            <div className="google-stars-row">
              <span className="google-g">G</span>
              <div className="stars">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>
          </div>
          <div className="reviews-scroll-wrapper">
            <button className="review-scroll-arrow review-scroll-left" onClick={scrollLeft} type="button">
              <FaChevronLeft />
            </button>
            <div className="reviews-scroll" ref={scrollRef}>
              {reviews.map((review, i) => {
                const isExpanded = expandedCards[i];
                return (
                  <div className="review-card" key={i}>
                    <div className="review-header">
                      <div className="review-author-info">
                        {review.hasPhoto ? (
                          <div className="review-avatar" style={{ background: '#ccc' }}>
                            <img
                              src="/images/reviewer-whalen.jpg"
                              alt={review.author}
                              style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
                            />
                          </div>
                        ) : (
                          <div className="review-avatar" style={{ background: review.color }}>
                            {review.initial}
                          </div>
                        )}
                        <div>
                          <div className="review-name">{review.author}</div>
                          <div className="review-date">{review.date}</div>
                        </div>
                      </div>
                      <FaGoogle className="review-google-icon" />
                    </div>
                    <div className="review-stars">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                      <FaCheckCircle className="review-verified" />
                    </div>
                    <div className="review-text">
                      {isExpanded ? review.fullText : review.shortText}
                    </div>
                    <div className="review-readmore" onClick={() => toggleExpand(i)}>
                      {isExpanded ? 'Hide' : 'Read more'}
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="review-scroll-arrow review-scroll-right" onClick={scrollRight} type="button">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
