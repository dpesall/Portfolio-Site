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
};

export default styles;
