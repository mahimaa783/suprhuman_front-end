import styles from '../styles/friends.module.css';
import Footer from './footer';
import { useRouter } from 'next/router';

export default function Friends() {
  const router = useRouter();

  // Dummy data - Replace with real data from API or database
  const friends = [
    { id: 1, name: 'YASHAS RAVIKUMAR', coins: '100K' },
    { id: 2, name: 'NIVEDITHA K', coins: '90K' },
    { id: 3, name: 'GAGAN M S', coins: '10.7K' },
    { id: 4, name: 'SUHAS JAIN', coins: '2K' },
    { id: 5, name: 'ANAND V', coins: '1.5K' },
    { id: 6, name: 'JAISURYA', coins: '1K' },
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <img
          src="/share-icon.png"
          alt="Share"
          className={styles.shareIcon}
        />
        <h1 className={styles.heading}>
          <span className={styles.supr}>SUPR</span><span className={styles.human}>HUMAN</span>
        </h1>
        <img
          src="/settings.png"
          alt="Settings"
          className={styles.settingsIcon}
          onClick={() => router.push('/settings')}
        />
      </div>

      <div className={styles.inviteContainer}>
        <p className={styles.inviteText}>
          INVITE MORE <span className={styles.supr}>SUPRHUMANS!</span>
        </p>
        <div className={styles.inviteBlock}>
          <img src="/gift.png" alt="Gift" className={styles.giftIcon} />
          <div className={styles.inviteDetails}>
            <p className={styles.inviteLabel}>INVITE A FRIEND !</p>
            <p className={styles.receiveText}>
              RECEIVE <span className={styles.supr}>+1,000</span> 
              <img src="/coins-per-tap.png" alt="Coins" className={styles.coinIcon} /> EACH
            </p>
          </div>
        </div>
      </div>

      <div className={styles.friendsList}>
        <p className={styles.friendsListTitle}>
          LIST OF YOUR <span className={styles.supr}>SUPR</span> FRIENDS!
        </p>

        {friends.map(friend => (
          <div key={friend.id} className={styles.friend}>
            <img src="/friend-id.png" alt="Friend Icon" className={styles.friendIcon} />
            <span className={styles.friendName}>{friend.name}</span>
            <div className={styles.friendCoins}>
              <img src="/coins-per-tap.png" alt="Coins" className={styles.coinIcon} />
              <span className={styles.coinAmount}>{friend.coins}</span>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
