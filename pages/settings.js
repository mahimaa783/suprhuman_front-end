import { useState } from 'react';
import styles from '../styles/settings.module.css'; // Using a different CSS file

export default function Settings() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className={styles.pageContainer}>
      <div className={styles.formContainer}>
        <form>
          <label htmlFor="name" className={styles.label}>NAME</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="NAME"
            className={styles.inputField}
          />

          <label htmlFor="gender" className={styles.label}>GENDER</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
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
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className={styles.selectField}
          >
            <option value="" disabled hidden>SELECTION</option>
            {/* Add country options here */}
          </select>

          <label htmlFor="email" className={styles.label}>EMAIL</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="EMAIL"
            className={styles.inputField}
          />

          {/* Buttons inside form container */}
          <button type="button" className={styles.actionButton}>
            CONNECT WALLET
          </button>
          <button type="button" className={styles.actionButton}>
            CHANGE CHARACTER
          </button>
        </form>
      </div>
    </div>
  );
}
