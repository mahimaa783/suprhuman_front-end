import styles from '../styles/earn.module.css';
import Footer from './footer';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Earn() {
  const router = useRouter();

  // Dummy data for YouTube tasks - Replace with real data from API or database
  const youtubeTasks = [
    { id: 1, title: 'VIDEO TITLE', link: '/video1' },
    { id: 2, title: 'VIDEO TITLE', link: '/video2' },
  ];

  // Popup state
  const [popupContent, setPopupContent] = useState(null);

  const handleArrowClick = (content) => {
    setPopupContent(content);
  };

  const closePopup = () => {
    setPopupContent(null);
  };

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
          onClick={() => router.push('/home')}
        />
      </div>

      <p className={styles.earnMoreText}>
        EARN MORE <span className={styles.coinsText}>COINS!</span>
      </p>
      
      <div className={styles.coinIconContainer}>
        <img src="/coins-per-tap.png" alt="Coins Icon" className={styles.coinIcon} />
      </div>

      <div className={styles.airdropContainer}>
        <img src="/youtube-icon-earn.png" alt="YouTube Icon" className={styles.airdropIcon} />
        <p className={styles.airdropText}>CONTENT CREATOR AIRDROP</p>
      </div>

      <p className={styles.noteText}>
        NOTE : PLEASE SUBMIT YOUR DETAILS HERE TO BE ELIGIBLE FOR AIRDROP
      </p>

      <div className={styles.tasksContainer}>
        <p className={styles.taskLabel}>
          <span className={styles.supr}>SUPRHUMAN</span> YOUTUBE CHANNEL TASKS
        </p>
        
        {youtubeTasks.map(task => (
          <div key={task.id} className={styles.task}>
            <img src="/youtube.png" alt="YouTube Icon" className={styles.taskIcon} />
            <span className={styles.taskTitle}>{task.title}</span>
            <img
              src="/arrow-orange.png"
              alt="Arrow"
              className={styles.arrowIcon}
              onClick={() => handleArrowClick(`Popup content for ${task.title}`)}
            />
          </div>
        ))}
      </div>

      <div className={styles.tasksContainer}>
        <p className={styles.taskLabel}>
          <span className={styles.supr}>SUPR</span> TASKS
        </p>
        
        <div className={styles.task}>
          <img src="/daily-reward-icon.png" alt="Daily Reward Icon" className={styles.taskIcon} />
          <span className={styles.taskTitle}>Daily Reward</span>
          <img
            src="/arrow-orange.png"
            alt="Arrow"
            className={styles.arrowIcon}
            onClick={() => handleArrowClick('Popup content for Daily Reward')}
          />
        </div>
        
        <div className={styles.task}>
          <img src="/youtube.png" alt="YouTube Icon" className={styles.taskIcon} />
          <span className={styles.taskTitle}>Subscribe to our YouTube Channel</span>
          <img
            src="/arrow-orange.png"
            alt="Arrow"
            className={styles.arrowIcon}
            onClick={() => handleArrowClick('Popup content for Subscribe to our YouTube Channel')}
          />
        </div>
        
        <div className={styles.task}>
          <img src="/telegram.png" alt="Telegram Icon" className={styles.taskIcon} />
          <span className={styles.taskTitle}>Join our Telegram Channel</span>
          <img
            src="/arrow-orange.png"
            alt="Arrow"
            className={styles.arrowIcon}
            onClick={() => handleArrowClick('Popup content for Join our Telegram Channel')}
          />
        </div>

        <div className={styles.task}>
          <img src="/instagram.png" alt="Instagram Icon" className={styles.taskIcon} />
          <span className={styles.taskTitle}>Follow our Instagram</span>
          <img
            src="/arrow-orange.png"
            alt="Arrow"
            className={styles.arrowIcon}
            onClick={() => handleArrowClick('Popup content for Follow our Instagram')}
          />
        </div>
        
        <div className={styles.task}>
          <img src="/twitter.png" alt="Twitter Icon" className={styles.taskIcon} />
          <span className={styles.taskTitle}>Follow our X</span>
          <img
            src="/arrow-orange.png"
            alt="Arrow"
            className={styles.arrowIcon}
            onClick={() => handleArrowClick('Popup content for Follow our X')}
          />
        </div>

        <div className={styles.task}>
          <img src="/person-icon.png" alt="Person Icon" className={styles.taskIcon} />
          <span className={styles.taskTitle}>Invite More Suprhumans!</span>
          <img
            src="/arrow-orange.png"
            alt="Arrow"
            className={styles.arrowIcon}
            onClick={() => router.push('/friends')}
          />
        </div>
      </div>

      {popupContent && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <p>{popupContent}</p>
            <button onClick={closePopup} className={styles.closePopupButton}>Close</button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
