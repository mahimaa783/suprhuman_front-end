import styles from '../styles/stats.module.css';
import Footer from './footer';
import { useRouter } from 'next/router'; // Importing useRouter for navigation

export default function Stats() {
  const router = useRouter(); // Initialize the router

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <h1 className={styles.heading}>
          <span className={styles.supr}>SUPR</span><span className={styles.human}>HUMAN</span>
        </h1>
        <img
          src="/settings.png"
          alt="Settings"
          className={styles.settingsIcon}
          onClick={() => router.push('/settings')} // Navigates to the settings page on click
        />
      </div>

      <div className={styles.statsGroup}>
        <div className={styles.statsBlockContainer}>
          <p className={styles.statsLabel}>
            NUMBER OF <span className={styles.highlight}>HUMANS</span> ON EARTH
          </p>
          <div className={styles.statsBlock}>
            <div className={styles.statsValue}>
              8,109,268,260
            </div>
          </div>
        </div>

        <div className={styles.statsBlockContainer}>
          <p className={styles.statsLabel}>
            NUMBER OF SUPR<span className={styles.highlight}>HUMANS</span> ON EARTH
          </p>
          <div className={styles.statsBlock}>
            <div className={styles.statsValue}>
              5
            </div>
          </div>
        </div>

        <div className={styles.statsBlockContainer}>
          <p className={styles.codeLabel}>
            YOUR UNIQUE SUPR<span className={styles.highlight}>HUMAN</span> CODE
          </p>
          <div className={styles.codeContainer}>
            <div className={styles.codeValue}>
              SUPR-01
            </div>
          </div>
        </div>
      </div>

      <div className={styles.airdropNoticeContainer}>
        <p className={styles.airdropNotice}>
          AIRDROPS WILL BE ANNOUNCED<br />
          ONCE WE HIT 1.5 MILLION<br />
          SUPR<span className={styles.highlight}>HUMANS</span>
        </p>
      </div>

      {/* Include Footer Component */}
      <Footer />
    </div>
  );
}
