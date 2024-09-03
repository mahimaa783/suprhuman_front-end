import React, { useState } from 'react';
import styles from '../styles/Upgrade.module.css'; // Assuming you're using a CSS module

const Upgrade = () => {
  const [activeTab, setActiveTab] = useState('ENHANCEMENTS');

  const tabs = ['ENHANCEMENTS', 'RESTRAINTS', 'SUPR UPGRADE'];

  const enhancements = [
    { id: 1, name: 'HONESTY', icon: '/images/honesty.png', coinMin: '+8', level: 1, cost: '1.4k' },
    { id: 2, name: 'KINDNESS', icon: '/images/kindness.png', coinMin: '+11', level: 1, cost: '2.2k' },
    { id: 3, name: 'COURAGE', icon: '/images/courage.png', coinMin: '+10', level: 1, cost: '2k' },
    { id: 4, name: 'INTEGRITY', icon: '/images/integrity.png', coinMin: '+18', level: 1, cost: '2.5k' },
    { id: 5, name: 'PATIENCE', icon: '/images/patience.png', coinMin: '+12', level: 1, cost: '1.8k' },
    { id: 6, name: 'GRATITUDE', icon: '/images/gratitude.png', coinMin: '+21', level: 1, cost: '1.2k' },
    { id: 7, name: 'GENEROSITY', icon: '/images/generosity.png', coinMin: '20', level: 1, cost: '1.5k' },
    { id: 15, name: 'FLEXIBILITY', icon: '/images/flexibility.png', coinMin: '+10', level: 1, cost: '1.8k' },
    { id: 16, name: 'CREATIVITY', icon: '/images/creativity.png', coinMin: '+8', level: 1, cost: '1.6k' },
    { id: 17, name: 'DEPENDABILITY', icon: '/images/dependability.png', coinMin: '+11', level: 1, cost: '1.9k' },
    { id: 18, name: 'FORGIVENESS', icon: '/images/forgiveness.png', coinMin: '+17', level: 1, cost: '1.8k' },
    { id: 19, name: 'FAIRNESS', icon: '/images/fairness.png', coinMin: '+20', level: 1, cost: '2.5k' },
    { id: 20, name: 'ENTHUSIASM', icon: '/images/enthusiasm.png', coinMin: '+22', level: 1, cost: '2.2k' },
    { id: 21, name: 'DILIGENCE', icon: '/images/diligence.png', coinMin: '+21', level: 1, cost: '2.3k' },
    { id: 22, name: 'OPEN-MINDEDNESS', icon: '/images/open-mindedness.png', coinMin: '+16', level: 1, cost: '2.2k' },
    { id: 23, name: 'TACTFULLNESS', icon: '/images/tactfullness.png', coinMin: '+15', level: 1, cost: '2k' },
    { id: 24, name: 'WISDOM', icon: '/images/wisdom.png', coinMin: '+13', level: 1, cost: '1.9k' },
  ];

  const restraints = [
    { id: 1, name: 'ARROGANCE', icon: '/images/arrogance.png', coinMin: '+6', level: 1, cost: '1.8' },
    { id: 2, name: 'SELFISHNESS', icon: '/images/selfishness.png', coinMin: '+11', level: 1, cost: '2.9' },
    { id: 3, name: 'SADISM', icon: '/images/sadism.png', coinMin: '+8', level: 1, cost: '1.8k' },
    { id: 4, name: 'GREED', icon: '/images/greed.png', coinMin: '+18', level: 1, cost: '1.7k' },
    { id: 5, name: 'CRUELTY', icon: '/images/cruelty.png', coinMin: '+11', level: 1, cost: '1.6k' },
    { id: 6, name: 'PESSIMISM', icon: '/images/pessimism.png', coinMin: '+9', level: 1, cost: '1.5k'},
    { id: 7, name: 'LAZINESS', icon: '/images/laziness.png', coinMin: '+15', level: 1, cost: '1.7k' },
    { id: 8, name: 'STUBBORNESS', icon: '/images/stubborness.png', coinMin: '+17', level: 1, cost: '2.8k' },
    { id: 9, name: 'VINDICTIVESNESS', icon: '/images/vindictiveness.png', coinMin: '+15', level: 1, cost: '2.6k' },
    { id: 10, name: 'APATHY', icon: '/images/apathy.png', coinMin: '+15', level: 1, cost: '2.5k' },
    { id: 11, name: 'INTOLERANCE', icon: '/images/intolerance.png', coinMin: '+16', level: 1, cost: '2.2k' },
    { id: 12, name: 'ENVY', icon: '/images/envy.png', coinMin: '+12', level: 1, cost: '2.1k' },
    { id: 13, name: 'RUDE', icon: '/images/rude.png', coinMin: '+14', level: 1, cost: '18.9k' },
    { id: 14, name: 'IGNORANCE', icon: '/images/ignorance.png', coinMin: '+15', level: 1, cost: '2k' },
    { id: 15, name: 'HYPOCRICY', icon: '/images/hypocricy.png', coinMin: '+9', level: 1, cost: '2.9k' },
    { id: 16, name: 'MANIPULATIVE', icon: '/images/manipulative.png', coinMin: '+10', level: 1, cost: '1.8k' },
    { id: 17, name: 'JEALOUSY', icon: '/images/jealousy.png', coinMin: '+8', level: 1, cost: '3k' },
    { id: 18, name: 'SPITEFUL', icon: '/images/spiteful.png', coinMin: '+11', level: 1, cost: '1.8k' },
    { id: 19, name: 'ALOOFNESS', icon: '/images/aloofness.png', coinMin: '+17', level: 1, cost: '3k' },
    { id: 20, name: 'DECEITFUL', icon: '/images/deceitful.png', coinMin: '+15', level: 1, cost: '2.2k' },
    { id: 21, name: 'AGGRESSIVE', icon: '/images/aggressive-mindedness.png', coinMin: '+11', level: 1, cost: '2.9k' },
    { id: 22, name: 'OBSTINACY', icon: '/images/obstinacy.png', coinMin: '+8', level: 1, cost: '1.8k' },
    { id: 23, name: 'PARANOIA', icon: '/images/paranoia.png', coinMin: '+6', level: 1, cost: '2k' },
    { id: 24, name: 'NARCISSISM', icon: '/images/narcissism.png', coinMin: '+6', level: 1, cost: '1.9k' },
    { id: 25, name: 'INSECURITY', icon: '/images/insecurity.png', coinMin: '+8', level: 1, cost: '2.2k' },
  ];

//   const suprCards = [
//     { id: 1, name: 'HONESTY', icon: '/images/honesty.png', coinMin: '+0.1', level: 1, cost: '1.4k' },
//     { id: 2, name: 'KINDNESS', icon: '/images/kindness.png', coinMin: '+0.1', level: 1, cost: '2.2k' },
//     { id: 3, name: 'COURAGE', icon: '/images/courage.png', coinMin: '+0.1', level: 1, cost: '2.2k' },
//     { id: 4, name: 'INTEGRITY', icon: '/images/integrity.png', coinMin: '+0.1', level: 1, cost: '2.2k' },
//     { id: 5, name: 'PATIENCE', icon: '/images/patience.png', coinMin: '+0.1', level: 1, cost: '2.2k' },
//     { id: 6, name: 'GRATITUDE', icon: '/images/gratitude.png', coinMin: '+0.1', level: 1, cost: '2.2k' },
//     { id: 7, name: 'GENEROSITY', icon: '/images/generosity.png', coinMin: '+0.1', level: 1, cost: '2.2k' },
//     { id: 8, name: 'EMPATHY', icon: '/images/empathy.png', coinMin: '+0.1', level: 1, cost: '2.2k' },
//     { id: 9, name: 'LOYALTY', icon: '/images/loyalty.png', coinMin: '+0.1', level: 1, cost: '2.2k' },
//     { id: 10, name: 'RESPECTFULLNESS', icon: '/images/respectfullness.png', coinMin: '+0.1', level: 1, cost: '2.2k' },
//     { id: 11, name: 'COMPASSION', icon: '/images/compassion.png', coinMin: '+0.1', level: 1, cost: '2.2k' },
//     { id: 12, name: 'HUMILITY', icon: '/images/humility.png', coinMin: '+0.1', level: 1, cost: '2.2k' },
//     { id: 13, name: 'OPTIMISM', icon: '/images/optimism.png', coinMin: '+0.1', level: 1, cost: '2.2k' },
//     { id: 14, name: 'PRESERVERANCE', icon: '/images/preserverance.png', coinMin: '+0.1', level: 1, cost: '2.2k' },
//     { id: 15, name: 'FLEXIBILITY', icon: '/images/flexibility.png', coinMin: '+0.1', level: 1, cost: '2.2k' },
//     { id: 16, name: 'CREATIVITY', icon: '/images/creativity.png', coinMin: '+0.1', level: 1, cost: '2.2k' },
//     { id: 17, name: 'DEPENDABILITY', icon: '/images/dependability.png', coinMin: '+0.1', level: 1, cost: '2.2k' },
//     { id: 18, name: 'FORGIVENESS', icon: '/images/forgiveness.png', coinMin: '+0.1', level: 1, cost: '2.2k' },
//     { id: 19, name: 'FAIRNESS', icon: '/images/fairness.png', coinMin: '+0.1', level: 1, cost: '2.2k' },
//     { id: 20, name: 'ENTHUSIASM', icon: '/images/enthusiasm.png', coinMin: '+0.1', level: 1, cost: '2.2k' },
//     { id: 21, name: 'DILIGENCE', icon: '/images/diligence.png', coinMin: '+0.1', level: 1, cost: '2.2k' },
//     { id: 22, name: 'OPEN-MINDEDNESS', icon: '/images/open-mindedness.png', coinMin: '+0.1', level: 1, cost: '2.2k' },
//     { id: 23, name: 'TACTFULLNESS', icon: '/images/tactfullness.png', coinMin: '+0.1', level: 1, cost: '2.2k' },
//     { id: 24, name: 'WISDOM', icon: '/images/wisdom.png', coinMin: '+0.1', level: 1, cost: '2.2k' },
//   ];

const renderCards = (data) => {
    return data.map((item) => (
      <div key={item.id} className={styles.card}>
        <div className={styles.cardLeft}>
          <img src={item.icon} alt={item.name} className={styles.cardIcon} />
          <div className={styles.cardLabel}>COIN/MIN</div>
          <div className={styles.cardValue}>{item.coinMin}</div>
        </div>
        <div className={styles.cardRight}>
          <div className={styles.cardRightTop}>
            <div className={styles.cardLabel}>LEVEL</div>
            <div className={styles.cardValue}>{item.level}</div>
          </div>
          <div className={styles.cardRightBottom}>
            <div className={styles.cardLabel}>COST</div>
            <div className={styles.cardValue}>{item.cost}</div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <h1 className={`${styles.heading} ${styles.supr}`}>SUPR<span className={styles.human}>HUMAN</span></h1>
        <img src="/settings.png" alt="Settings" className={styles.closeIcon} />
      </div>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className={styles.content}>
        {activeTab === 'ENHANCEMENTS' && (
          <div className={styles.cardsContainer}>
            {renderCards(enhancements)}
          </div>
        )}
        {activeTab === 'RESTRAINTS' && (
          <div className={styles.cardsContainer}>
            {renderCards(restraints)}
          </div>
        )}
        {activeTab === 'SUPR UPGRADE' && (
          <div className={styles.cardsContainer}>
            {renderCards(suprCards)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Upgrade;