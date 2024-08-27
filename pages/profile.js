import React, { useState } from 'react';
import styles from '../styles/profile.module.css';

const Profile = () => {
  const [gender, setGender] = useState('SELECT');
  const [country, setCountry] = useState('SELECT');
  const [showGenderOptions, setShowGenderOptions] = useState(false);
  const [showCountryOptions, setShowCountryOptions] = useState(false);

  const genderOptions = ['MALE', 'FEMALE', 'OTHER'];
  const countryOptions = ['USA', 'Canada', 'UK', 'India', 'Australia']; // Add more country options as needed

  const toggleGenderOptions = () => {
    setShowGenderOptions(!showGenderOptions);
  };

  const toggleCountryOptions = () => {
    setShowCountryOptions(!showCountryOptions);
  };

  const handleGenderSelect = (option) => {
    setGender(option);
    setShowGenderOptions(false);
  };

  const handleCountrySelect = (option) => {
    setCountry(option);
    setShowCountryOptions(false);
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.header}>
        <span className={styles.supr}>SUPR</span>
        <span className={styles.human}>HUMAN</span>
      </div>
      <div className={styles.innerContainer}>
        <div className={styles.card}>
          <form className={styles.form}>
            <label className={styles.label}>Enter Name</label>
            <input type="text" placeholder="NAME" className={styles.input} />

            <label className={styles.label}>Select Gender</label>
            <div className={styles.dropdownContainer}>
              <div className={styles.input} onClick={toggleGenderOptions}>
                {gender}
              </div>
              {showGenderOptions && (
                <div className={styles.optionsContainer}>
                  {genderOptions.map((option) => (
                    <div
                      key={option}
                      className={styles.option}
                      onClick={() => handleGenderSelect(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <label className={styles.label}>Select Country</label>
            <div className={styles.dropdownContainer}>
              <div className={styles.input} onClick={toggleCountryOptions}>
                {country}
              </div>
              {showCountryOptions && (
                <div className={styles.optionsContainer}>
                  {countryOptions.map((option) => (
                    <div
                      key={option}
                      className={styles.option}
                      onClick={() => handleCountrySelect(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <label className={styles.label}>Enter Email</label>
            <input type="email" placeholder="EMAIL" className={styles.input} />

            <p className={styles.disclaimer}>
              <span className={styles.disclaimerTitle}>DISCLAIMER:</span> EMAIL PROVIDED NOW CANNOT BE CHANGED IN THE FUTURE FOR AIRDROPS
            </p>

            
          </form>
        </div>
      </div>
      <button type="submit" className={styles.button}>
              NEXT
            </button>
    </div>
  );
};

export default Profile;