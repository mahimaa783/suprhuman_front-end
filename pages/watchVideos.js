// youtube.js
import React from 'react';
import styles from '../styles/watchVideos.module.css';

const YoutubePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.youtubeBox}>
        {/* Close Button */}
        <button className={styles.closeButton}>X</button>
        
        {/* YouTube Icon */}
        <img src="/youtube.png" alt="YouTube" className={styles.youtubeIcon} />

        {/* YouTube Video */}
        <div className={styles.videoContainer}>
          {/* Replace 'videoId' with the actual video ID or link from your database */}
          <iframe
            className={styles.video}

            //give the link of the video here
            src={`https://www.youtube.com/embed/YOUR_VIDEO_ID`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Check Button */}
        <button className={styles.checkButton}>CHECK</button>
      </div>
    </div>
  );
};

export default YoutubePage;
