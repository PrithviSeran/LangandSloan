import React from 'react';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    author: 'M Whalen',
    text: 'A tree took out our power line and damaged the mast and connection to the side of our house. Langstaff and Sloane did the repair within 24 hours to proper ESA standards so that Toronto Hydro could connect us back up.',
    stars: 5,
  },
  {
    author: 'Sarah T.',
    text: 'Had our entire knob and tube wiring replaced. The team was professional, on time, and kept the workspace clean. Highly recommend for anyone in an older Toronto home.',
    stars: 5,
  },
  {
    author: 'James R.',
    text: 'Fast and reliable service. They installed our EV charger and upgraded our panel in the same visit. Fair pricing and excellent communication throughout the process.',
    stars: 5,
  },
];

function Reviews() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <div className="reviews-header">
          <div className="google-rating">
            <div className="rating-label">excellent</div>
            <div className="stars">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <div className="rating-sub">
              Google rating score: <strong>4.7</strong> of 5, based on <strong>43+ reviews</strong>
            </div>
          </div>
        </div>
        <div className="reviews-grid">
          {reviews.map((review, i) => (
            <div className="review-card" key={i}>
              <div className="review-stars">
                {[...Array(review.stars)].map((_, j) => (
                  <FaStar key={j} />
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="review-author">{review.author}</div>
              <div className="review-source">Google Review</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
