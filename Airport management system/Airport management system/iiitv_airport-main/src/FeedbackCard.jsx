import React from 'react';
import './FeedbackCard.css'; // Import your CSS file
import SusImg from '/src/assets/Suspicious.webp'
import FeedbackImg from '/src/assets/Feedback.webp'

function FeedbackCard() {
  return (
    <div className="feedback-cards">
      <div className="feedback-card">
        <div className="feedback-thumb">
          <img src={FeedbackImg} alt="Feedback" className="img-fluid" />
        </div>
        <div className="feedback-content">
          <h2>Your Feedback is Valuable to Us.</h2>
          <p>
            <a href="#" className="btn btn-primary" onClick={() => {window.open('src/assets/stuff/sus.html', '_self')}}>
              Feedback
            </a>
          </p>
        </div>
      </div>

      <div className="feedback-card feedback-card-report">
        <div className="feedback-thumb">
          <img src={SusImg} alt="Report" className="img-fluid" /> {/* Replace with your report icon */}
        </div>
        <div className="feedback-content">
          <h2>Found Something Suspicious?</h2>
          <p>
            <a href="#" className="btn btn-warning" onClick={() => {window.open('src/assets/stuff/sus.html', '_self')}}>
              Report
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
