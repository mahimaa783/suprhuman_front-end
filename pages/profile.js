import { useState } from 'react';
import styles from '../styles/profile.module.css';

export default function Home() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.heading}>
        <span className={styles.supr}>SUPR</span><span className={styles.human}>HUMAN</span>
      </h1>
      <div className={styles.formContainer}>
        <form>
          <label htmlFor="name" className={styles.label}>ENTER NAME</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="NAME"
            className={styles.inputField}
          />

          <label htmlFor="gender" className={styles.label}>SELECT GENDER</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className={styles.selectField}
          >
            <option value="" disabled hidden>SELECT</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="country" className={styles.label}>SELECT COUNTRY</label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className={styles.selectField}
          >
            <option value="" disabled hidden>SELECT</option>
            {/* Add country options here */}
          </select>

          <label htmlFor="email" className={styles.label}>ENTER EMAIL</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="EMAIL"
            className={styles.inputField}
          />

          <div className={styles.disclaimer}>
            <strong>DISCLAIMER:</strong> EMAIL PROVIDED NOW CANNOT BE <br />CHANGED IN THE FUTURE FOR AIRDROPS.
          </div>
        </form>
      </div>
      <button type="button" className={styles.nextButton} onClick={() => window.location.href = '/chooseCharacter'}>
         NEXT <img src="/arrow-black.png" alt="Arrow" className={styles.arrow} />
      </button>

    </div>
  );
}
