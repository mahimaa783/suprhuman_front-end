// subscribe.js
import React from 'react';
import styles from '../styles/youtube.module.css';

const SubscribePage = () => {
  const handleButtonClick = () => {
    // Redirect the user to the desired link
    window.location.href = 'https://www.example.com'; // Replace with your actual URL
  };

  return (
    <div className={styles.container}>
      <div className={styles.subscribeBox}>
        {/* Close Button */}
        <button className={styles.closeButton}>X</button>

        {/* YouTube Icon */}
        <img src="/youtube.png" alt="YouTube" className={styles.youtubeIcon} />

        {/* Text Content */}
        <p className={styles.text}>SUBSCRIBE TO OUR YOUTUBE CHANNEL</p>

        {/* Check Button */}
        <button className={styles.checkButton} onClick={handleButtonClick}>
          CHECK
        </button>
      </div>
    </div>
  );
};

export default SubscribePage;
