import React, { useState } from 'react';
import axios from 'axios';
import styles from "../styles/Games.styles.js";

const Games = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  const fetchRandomNumber = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/random-number');
      setRandomNumber(response.data.value);
    } catch (error) {
      console.error('Error fetching random number:', error);
    }
  };

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={fetchRandomNumber}>
        Get Random Number
      </button>
      {randomNumber !== null && <p style={styles.text}>Random number: {randomNumber}</p>}
    </div>
  );
};

export default Games;