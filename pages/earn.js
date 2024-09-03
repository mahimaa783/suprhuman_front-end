import { useState } from 'react';
import styles from '../styles/earn.module.css';
import Footer from './footer';
import { useRouter } from 'next/router';
import WatchVideos from './watchVideos';
import SubscribePage from './youtube';
import TelegramPage from './telegram';
import InstagramPage from './instagram';
import TwitterPage from './twitter';
import DailyReward from './daily-reward'; // Import the DailyReward component

export default function Earn() {
  const router = useRouter();

  // State to control pop-ups
  const [isWatchVideosOpen, setWatchVideosOpen] = useState(false);
  const [isSubscribeOpen, setSubscribeOpen] = useState(false);
  const [isTelegramOpen, setTelegramOpen] = useState(false);
  const [isInstagramOpen, setInstagramOpen] = useState(false);
  const [isTwitterOpen, setTwitterOpen] = useState(false);
  const [isDailyRewardOpen, setDailyRewardOpen] = useState(false); // New state for DailyReward popup
  const [isInviteMoreOpen, setInviteMoreOpen] = useState(false); // New state for Invite More popup

  // Close all pop-ups
  const handleClosePopUp = () => {
    setWatchVideosOpen(false);
    setSubscribeOpen(false);
    setTelegramOpen(false);
    setInstagramOpen(false);
    setTwitterOpen(false);
    setDailyRewardOpen(false); // Close DailyReward popup
    setInviteMoreOpen(false); // Close Invite More popup
  };

  // Dummy data for YouTube tasks - Replace with real data from API or database
  const youtubeTasks = [
    { id: 1, title: 'VIDEO TITLE', link: '/video1' },
    { id: 2, title: 'VIDEO TITLE', link: '/video2' },
  ];

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
        NOTE: PLEASE SUBMIT YOUR DETAILS HERE TO BE ELIGIBLE FOR AIRDROP
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
              onClick={() => setWatchVideosOpen(true)} // Open the watchVideos pop-up
            />
          </div>
        ))}
      </div>

      <div className={styles.tasksContainer}>
        <p className={styles.taskLabel}>
          <span className={styles.supr}>SUPR</span> TASKS
        </p>

        {/* Daily Reward Task */}
        <div className={styles.task}>
          <img src="/daily-reward.png" alt="Daily Reward Icon" className={styles.taskIcon} />
          <span className={styles.taskTitle}>DAILY REWARD</span>
          <img
            src="/arrow-orange.png"
            alt="Arrow"
            className={styles.arrowIcon}
            onClick={() => setDailyRewardOpen(true)} // Open the DailyReward pop-up
          />
        </div>

        <div className={styles.task}>
          <img src="/youtube.png" alt="YouTube Icon" className={styles.taskIcon} />
          <span className={styles.taskTitle}>SUBSCRIBE TO OUR YOUTUBE CHANNERL</span>
          <img
            src="/arrow-orange.png"
            alt="Arrow"
            className={styles.arrowIcon}
            onClick={() => setSubscribeOpen(true)} // Open the Subscribe pop-up
          />
        </div>

        <div className={styles.task}>
          <img src="/telegram.png" alt="Telegram Icon" className={styles.taskIcon} />
          <span className={styles.taskTitle}>JOIN OUR TELEGRAM CHANNEL</span>
          <img
            src="/arrow-orange.png"
            alt="Arrow"
            className={styles.arrowIcon}
            onClick={() => setTelegramOpen(true)} // Open the Telegram pop-up
          />
        </div>

        <div className={styles.task}>
          <img src="/instagram.png" alt="Instagram Icon" className={styles.taskIcon} />
          <span className={styles.taskTitle}>FOLLOW OUR INSTAGRAM</span>
          <img
            src="/arrow-orange.png"
            alt="Arrow"
            className={styles.arrowIcon}
            onClick={() => setInstagramOpen(true)} // Open the Instagram pop-up
          />
        </div>

        <div className={styles.task}>
          <img src="/twitter.png" alt="Twitter Icon" className={styles.taskIcon} />
          <span className={styles.taskTitle}>FOLLOW OUR X</span>
          <img
            src="/arrow-orange.png"
            alt="Arrow"
            className={styles.arrowIcon}
            onClick={() => setTwitterOpen(true)} // Open the Twitter pop-up
          />
        </div>

        {/* New Invite More Task */}
        <div className={styles.task}>
          <img src="/invite-more.png" alt="Invite More Icon" className={styles.taskIcon} />
          <span className={styles.taskTitle}>INVITE MORE <span className={styles.supr}>SUPRHUMANS</span></span>
          <img
            src="/arrow-orange.png"
            alt="Arrow"
            className={styles.arrowIcon}
            onClick={() => setInviteMoreOpen(true)} // Open the Invite More pop-up
          />
        </div>
      </div>

      <Footer />

      {/* Render Pop-ups */}
      {isWatchVideosOpen && <WatchVideos onClose={handleClosePopUp} />}
      {isSubscribeOpen && <SubscribePage onClose={handleClosePopUp} />}
      {isTelegramOpen && <TelegramPage onClose={handleClosePopUp} />}
      {isInstagramOpen && <InstagramPage onClose={handleClosePopUp} />}
      {isTwitterOpen && <TwitterPage onClose={handleClosePopUp} />}
      {isDailyRewardOpen && <DailyReward onClose={handleClosePopUp} currentDay={1} />} {/* New DailyReward Pop-up */}
      {isInviteMoreOpen && <InviteMore onClose={handleClosePopUp} />} {/* New InviteMore Pop-up */}
    </div>
  );
}
