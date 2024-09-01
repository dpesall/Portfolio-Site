// src/styles/Games.styles.js

const styles = {
  container: {
    backgroundColor: '#2b2b2b',
    padding: '20px',
    paddingTop: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  mobileContainer: {
    backgroundColor: '#2b2b2b',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
  },
  mobileMessage: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: '1.2em',
    padding: '20px',
    maxWidth: '80%',
  },
  gameWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  snakeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
  },
  gameBoard: {
    display: 'grid',
    gridTemplateColumns: 'repeat(20, 20px)',
    gridTemplateRows: 'repeat(20, 20px)',
    gap: '1px',
    backgroundColor: '#000',
    border: '2px solid #333',
  },
  snakeCell: {
    backgroundColor: '#4CAF50',
    borderRadius: '2px',
  },
  foodCell: {
    backgroundColor: '#FF5722',
    borderRadius: '50%',
  },
  gameControls: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0 10px',
  },
  gameOver: {
    color: '#FF5722',
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '20px',
  },
  score: {
    color: '#fff',
    fontSize: '18px',
    marginTop: '10px',
  },
  noFocusOutline: {
    outline: 'none',
  },
  controlPanel: {
    backgroundColor: '#333',
    padding: '20px',
    borderRadius: '10px',
    color: '#fff',
    width: '200px',
  },
  difficultySection: {
    marginBottom: '20px',
  },
  difficultyTitle: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  difficultyButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  difficultyButton: {
    padding: '8px 16px',
    fontSize: '14px',
    border: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s, color 0.3s',
  },
  gameRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '30px',
    width: '600px',
    backgroundColor: '#111',
    padding: '40px',
    borderRadius: '100px',
    transition: 'background-color 0.3s ease',
  },
  gameRowMobile: {
    width: '90%',
    padding: '20px',
    borderRadius: '100px',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  gameImage: {
    width: '100px',
    height: '100px',
    marginRight: '20px',
  },
  gameImageMobile: {
    width: '80px',
    height: '80px',
    marginRight: '15px',
  },
  gameInfo: {
    color: '#ffffff',
    flex: 1,
  },
  gameTitle: {
    margin: '0 0 10px 0',
    fontSize: '1.5em',
  },
  gameTitleMobile: {
    fontSize: '1.2em',
  },
  gameDescription: {
    margin: 0,
    fontSize: '0.9em',
  },
  gameDescriptionMobile: {
    fontSize: '0.8em',
  },
  brickBreakArea: {
    position: 'relative',
    width: '1000px',
    height: '600px',
    backgroundColor: '#000',
    border: '2px solid #333',
    overflow: 'hidden',
  },
  paddle: {
    position: 'absolute',
    bottom: '20px',
    width: '150px',
    height: '10px',
    backgroundColor: '#fff',
  },
  ball: {
    position: 'absolute',
    width: '20px',
    height: '20px',
    backgroundColor: '#fff',
    borderRadius: '50%',
  },
  message: {
    position: 'absolute',
    bottom: '50px',
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    fontSize: '18px',
  },
  scoreboard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1000px',
    padding: '10px 20px',
    backgroundColor: '#111',
    borderRadius: '5px 5px 0 0',
    boxSizing: 'border-box',
    position: 'relative',
  },
  lives: {
    color: '#fff',
    fontSize: '18px',
  },
  gameOverOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 10,
    color: '#fff',
  },
  gameOverText: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#FF5722',
    marginBottom: '20px',
  },
  finalScore: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  restartArea: {
    padding: '10px 20px',
    fontSize: '18px',
    backgroundColor: '#4CAF50',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
    width: '150px',
  },
};

export default styles;
