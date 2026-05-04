import React from 'react';
import { FaCheckSquare } from 'react-icons/fa';

const leftCreds = [
  'President Langstaff & Sloan Inc.',
  'Certified Electrical Technician',
  'Master Electrician',
  'In business since 1991',
  'Engaged member of Ontario Electrical League',
];

const rightCreds = [
  'On OEL Contractor Committee member',
  'OEL Contractor Advisory Council',
  'Vice President OEL GTA West Chapter',
  'Member of Merit Open Shop Contractors Association of Ontario',
];

function Credentials() {
  return (
    <section className="credentials-section">
      <div className="credentials-bg" />
      <div className="container">
        <div className="credential-photo">
          <img
            src="/images/headshot.jpg"
            alt="President of Langstaff & Sloan Inc"
          />
        </div>
        <div className="credential-lists">
          <div className="credential-list">
            {leftCreds.map((cred, i) => (
              <div className="credential-item" key={i}>
                <FaCheckSquare className="check" />
                <span>{cred}</span>
              </div>
            ))}
          </div>
          <div className="credential-list">
            {rightCreds.map((cred, i) => (
              <div className="credential-item" key={i}>
                <FaCheckSquare className="check" />
                <span>{cred}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Credentials;
