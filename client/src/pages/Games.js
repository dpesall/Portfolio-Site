import React, { useState } from 'react';
import axios from 'axios';
import styles from "../styles/Games.styles.js";
import { Link, useLocation } from 'react-router-dom';
import snakeIcon from "../assets/snake-circle.png"

const GameRow = ({ gameTitle, description, link, logo }) => (
  <Link to={link} style={{ textDecoration: 'none' }}>
    <div style={{ ...styles.gameRow, cursor: 'pointer' }}>
      <img src={logo} alt={gameTitle} style={styles.gameImage} />
      <div style={styles.gameInfo}>
        <h2 style={styles.gameTitle}>{gameTitle}</h2>
        <p style={styles.gameDescription}>
          {description}
        </p>
      </div>
    </div>
  </Link>
);

const Games = () => {
  return (
    <div style={styles.container}>
      <GameRow
        gameTitle={'Snake'}
        description={'Control a snake using arrow keys to eat food and grow longer without hitting the walls or itself.'}
        link="/games/snake"
        logo={snakeIcon}
      />
      
      {/* 
      <GameRow
        gameTitle={'Game 2'}
        description={'Game description goes here.'}
        link="/games"
        logo={snakeIcon}
      />
      <GameRow
        gameTitle={'Game 3'}
        description={'Game description goes here.'}
        link="/games"
        logo={snakeIcon}
      />
      */}
    </div>
  );
};

export default Games;