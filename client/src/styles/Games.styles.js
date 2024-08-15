// src/styles/Games.styles.js
const styles = {
    container: {
      backgroundColor: '#2b2b2b',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    gameWrapper: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '20px',
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
    gameImage: {
      width: '100px',
      height: '100px',
      marginRight: '20px',
    },
    gameInfo: {
      color: '#ffffff',
      flex: 1,
    },
    gameTitle: {
      margin: '0 0 10px 0',
      fontSize: '1.5em',
    },
    gameDescription: {
      margin: 0,
      fontSize: '0.9em',
    },
  };
  
  export default styles;