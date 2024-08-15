// src/styles/Home.styles.js

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '40px 20px',
    backgroundColor: '#2b2b2b',
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    maxWidth: '1200px',
    marginBottom: '40px',
  },
  imageContainer: {
    flexShrink: 0,
    marginRight: '40px',
  },
  profileImage: {
    width: '500px',
    height: 'auto',
    borderRadius: '50%',
    backgroundColor: '#FFF',
    paddingTop: '20px',
    border: '10px solid black',
  },
  textContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  heading: {
    color: '#ffffff',
    fontSize: '3rem',
    margin: '0 0 20px 0',
    lineHeight: '1.2',
  },
  subheading: {
    color: '#ffffff',
    fontSize: '1.5rem',
    margin: 0,
    lineHeight: '1.4',
    fontWeight: 'normal',
  },
  linkImagesContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    marginTop: '20px',
  },
  linkImageWrapper: {
    display: 'inline-block',
    transition: 'transform 0.3s ease',
  },
  linkImage: {
    width: '100px',
    height: '100px',
  },
};

export default styles;