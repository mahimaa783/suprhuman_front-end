// twitter.js
import React from 'react';
import styles from '../styles/twitter.module.css';

const TwitterPage = () => {
  const handleButtonClick = () => {
    // Redirect the user to the desired link
    window.location.href = 'https://twitter.com/your_profile'; // Replace with your actual Twitter profile URL
  };

  return (
    <div className={styles.container}>
      <div className={styles.subscribeBox}>
        {/* Close Button */}
        <button className={styles.closeButton}>X</button>

        {/* Twitter Icon */}
        <img src="/twitter.png" alt="Twitter" className={styles.twitterIcon} />

        {/* Text Content */}
        <p className={styles.text}>FOLLOW OUR X</p>

        {/* Check Button */}
        <button className={styles.checkButton} onClick={handleButtonClick}>
          CHECK
        </button>
      </div>
    </div>
  );
};

export default TwitterPage;
