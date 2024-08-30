import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import styles from "../styles/Games.styles.js";
import { Link } from 'react-router-dom';
import snakeIcon from "../assets/snake-circle.png";

const GameRow = ({ gameTitle, description, link, logo, disabled, isMobile }) => (
  <Link to={disabled ? "#" : link} style={{ textDecoration: 'none', pointerEvents: disabled ? 'none' : 'auto' }}>
    <div style={{ 
      ...styles.gameRow, 
      ...(isMobile ? styles.gameRowMobile : {}),
      cursor: disabled ? 'not-allowed' : 'pointer', 
      filter: disabled ? 'grayscale(100%)' : 'none',
    }}>
      <img src={logo} alt={gameTitle} style={isMobile ? styles.gameImageMobile : styles.gameImage} />
      <div style={styles.gameInfo}>
        <h2 style={isMobile ? styles.gameTitleMobile : styles.gameTitle}>{gameTitle}</h2>
        <p style={isMobile ? styles.gameDescriptionMobile : styles.gameDescription}>
          {description}
        </p>
      </div>
    </div>
  </Link>
);

const Games = () => {
  return (
    <>
      <BrowserView>
        <div style={styles.container}>
          <GameRow
            gameTitle={'Snake'}
            description={'Control a snake using arrow keys to eat food and grow longer without hitting the walls or itself.'}
            link="/games/snake"
            logo={snakeIcon}
          />
          <GameRow
            gameTitle={'Brick Break'}
            description={'Brick Break.'}
            link="/games/brick-break"
            logo={snakeIcon}
          />
        </div>
      </BrowserView>
      <MobileView>
        <div style={styles.mobileContainer}>
          <GameRow
            gameTitle={'Snake'}
            description={'Control a snake using arrow keys to eat food and grow longer without hitting the walls or itself.'}
            link="/games/snake"
            logo={snakeIcon}
            disabled={true}
            isMobile={true}
          />
          <GameRow
            gameTitle={'Brick Break'}
            description={'Brick Break.'}
            link="/games/brick-break"
            logo={snakeIcon}
            disabled={true}
            isMobile={true}
          />
          <p style={styles.mobileMessage}>
            These games aren't playable on mobile. Check out this site on a computer to try them out.
          </p>
        </div>
      </MobileView>
    </>
  );
};

export default Games;
