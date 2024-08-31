import { useState } from 'react';
import styles from '../styles/home.module.css';
import Footer from './footer';

export default function Home() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleSettingsModal = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <h1 className={styles.heading}>
          <span className={styles.supr}>SUPR</span>
          <span className={styles.human}>HUMAN</span>
        </h1>
        <img
          src="/settings.png"
          alt="Settings"
          className={styles.settingsIcon}
          onClick={toggleSettingsModal}
        />
      </div>

      <div className={styles.coinsContainer}>
        <p className={styles.coinsLabel}>0</p>
      </div>

      <div className={styles.characterContainer}>
        <div className={styles.superBoostContainer}>
          <div className={styles.superBoostTextContainer}>
            <p className={styles.superBoostLabel}>
              <span className={styles.superText}>SUPR</span>
              <span className={styles.boostText}>BOOST</span>
            </p>
            <p className={styles.comingSoon}>(coming soon)</p>
          </div>
          <div className={styles.superBoostIconContainer}>
            <img src="/superboost-home.png" alt="Superboost" className={styles.superBoostIcon} />
          </div>
        </div>

        <div className={styles.coinsPerMinContainer}>
          <div className={styles.coinsPerMinIconContainer}>
            <img src="/coins-per-min.png" alt="Coins Per Min" className={styles.coinsPerMinIcon} />
          </div>
          <div className={styles.coinsPerMinTextContainer}>
            <p className={styles.coinsPerMinLabel}>COINS/MIN</p>
            <p className={styles.coinsValue}>0</p>
          </div>
        </div>

        <div className={styles.boostContainer}>
          <div className={styles.boostTextContainer}>
            <p className={styles.boostLabel}>BOOST</p>
          </div>
          <div className={styles.boostIconContainer}>
            <img src="/boost.png" alt="Boost" className={styles.boostIcon} />
          </div>
        </div>

        <div className={styles.energyContainer}>
          <div className={styles.energyIconContainer}>
            <p className={styles.energyLabel}>ENERGY</p>
            <p className={styles.energyValue}>1000/1000</p>
          </div>
        </div>

        <img
          src="/avatar1.png"
          alt="Character"
          className={styles.characterImage}
        />

        <p className={styles.coinsEarned}>COINS EARNED TODAY</p>

        <div className={styles.valueContainer}>
          <p className={styles.coinsLabel2}>0</p>
        </div>

        <div className={styles.timeContainer}>
          <p className={styles.timeLabel}>00:00:00</p>
        </div>
      </div>

      <Footer />

      {isSettingsOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={toggleSettingsModal}>
              <img src="/cross.png" alt="Close" />
            </button>
            <div className={styles.formContainer}>
              <form>
                <label htmlFor="name" className={styles.label}>NAME</label>
                <input
                  type="text"
                  id="name"
                  placeholder="NAME"
                  className={styles.inputField}
                />

                <label htmlFor="gender" className={styles.label}>GENDER</label>
                <select
                  id="gender"
                  className={styles.selectField}
                >
                  <option value="" disabled hidden>SELECTION</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>

                <label htmlFor="country" className={styles.label}>COUNTRY</label>
                <select
                  id="country"
                  className={styles.selectField}
                >
                  <option value="" disabled hidden>SELECTION</option>
                  {/* Add country options here */}
                </select>

                <label htmlFor="email" className={styles.label}>EMAIL</label>
                <input
                  type="email"
                  id="email"
                  placeholder="EMAIL"
                  className={styles.inputField}
                />

                <button type="button" className={styles.actionButton}>
                  CONNECT WALLET
                </button>
                <button type="button" className={styles.actionButton}>
                  CHANGE CHARACTER
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
