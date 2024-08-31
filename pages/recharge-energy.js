import React from 'react';
import styles from '../styles/recharge-energy.module.css';

const RechargeEnergy = () => {
  const handleUseClick = () => {
    // Logic for using energy or any other action
    console.log('Use button clicked');
  };

  return (
    <div className={styles.container}>
      <div className={styles.energyBox}>
        {/* Close Button */}
        <button className={styles.closeButton}>X</button>

        {/* Title */}
        <p className={styles.title}>RECHARGE ENERGY</p>

        {/* Energy Icon */}
        <img src="/recharge-energy.png" alt="Energy Icon" className={styles.energyIcon} />

        {/* Energy Level Display */}
        <p className={styles.energyLevel}>5/5</p>

        {/* Use Button */}
        <button className={styles.useButton} onClick={handleUseClick}>
          USE
        </button>
      </div>
    </div>
  );
};

export default RechargeEnergy;
