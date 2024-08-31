// telegram.js
import React from 'react';
import styles from '../styles/telegram.module.css';

const TelegramPage = () => {
  const handleButtonClick = () => {
    // Redirect the user to the desired link
    window.location.href = 'https://t.me/your_channel'; // Replace with your actual Telegram channel URL
  };

  return (
    <div className={styles.container}>
      <div className={styles.subscribeBox}>
        {/* Close Button */}
        <button className={styles.closeButton}>X</button>

        {/* Telegram Icon */}
        <img src="/telegram.png" alt="Telegram" className={styles.telegramIcon} />

        {/* Text Content */}
        <p className={styles.text}>JOIN OUR TELEGRAM CHANNEL</p>

        {/* Check Button */}
        <button className={styles.checkButton} onClick={handleButtonClick}>
          CHECK
        </button>
      </div>
    </div>
  );
};

export default TelegramPage;
