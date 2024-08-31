import styles from '../styles/boost.module.css';
import Footer from './footer';
import { useRouter } from 'next/router'; // Importing useRouter for navigation

export default function Boost() {
  const router = useRouter(); // Initialize the router

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <h1 className={styles.heading}>
          <span className={styles.supr}>SUPR</span><span className={styles.human}>HUMAN</span>
        </h1>
        <img
          src="/cross.png"
          alt="Close"
          className={styles.closeIcon}
          onClick={() => router.push('/home')} // Navigates to the home page on click
        />
      </div>

      <div className={styles.boostGroup}>
        <h2 className={styles.boostLabel}>BOOST</h2>
        <div className={styles.boostIcon}>
          <img src="/boost-orange.png" alt="Boost Icon" />
        </div>

        <div className={styles.boostBlockContainer}>
          <p className={styles.boostBlockLabel}>RECHARGE ENERGY</p>
          <div className={styles.boostBlock}>
            <img src="/recharge-energy.png" alt="Energy Icon" className={styles.blockIcon} />
            <div className={styles.boostBlockValue}>5/5</div>
            <img src="/arrow-orange.png" alt="Arrow" className={styles.arrowIcon} />
          </div>
        </div>

        <div className={styles.boostBlockContainer}>
          <p className={styles.boostBlockLabel}>COIN PER TAP</p>
          <div className={styles.boostBlock}>
            <img src="/boost-coin-per-tap.png" alt="Coin Icon" className={styles.blockIcon2} />
            <div className={styles.boostBlockValue}>LEVEL 1</div>
            <img src="/arrow-orange.png" alt="Arrow" className={styles.arrowIcon} />
          </div>
        </div>
      </div>

      {/* Include Footer Component */}
      <Footer />
    </div>
  );
}
