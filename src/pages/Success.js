import React, { useEffect } from 'react';
import Confetti from 'react-confetti';
import Fireworks from 'react-fireworks';
import img from '/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/Order Confirmation.gif';
import '/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/pages/success.css';

function Success() {
  useEffect(() => {
    // Clean up the confetti effect after 3 seconds
    const timer = setTimeout(() => {
      // Perform any necessary cleanup here
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="success-container">
      <div className="success-content">
        <h1>Success!</h1>
        <h1>Medicines have been Purchased!</h1>
        <h1>We Wish you get well soon</h1>
      </div>
      <img src={img} alt="Celebration" className="celebration-gif" style={{ width: '500px' }} />

      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </div>
  );
}

export default Success;
