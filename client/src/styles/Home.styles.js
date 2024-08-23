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
  contentWrapperMobile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  imageContainer: {
    flexShrink: 0,
    marginRight: '40px',
  },
  imageContainerMobile: {
    marginBottom: '20px',
  },
  profileImage: {
    width: '500px',
    height: 'auto',
    borderRadius: '50%',
    backgroundColor: '#FFF',
    paddingTop: '20px',
    border: '10px solid black',
  },
  profileImageMobile: {
    width: '200px',
    height: 'auto',
    borderRadius: '50%',
    backgroundColor: '#FFF',
    paddingTop: '10px',
    border: '5px solid black',
  },
  textContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textContainerMobile: {
    textAlign: 'left',
    padding: '0 20px',
    width: '90%',
  },
  heading: {
    color: '#ffffff',
    fontSize: '3rem',
    margin: '0 0 20px 0',
    lineHeight: '1.2',
  },
  headingMobile: {
    fontSize: '2rem',
  },
  subheading: {
    color: '#ffffff',
    fontSize: '1.5rem',
    margin: 0,
    lineHeight: '1.4',
    fontWeight: 'normal',
  },
  subheadingMobile: {
    fontSize: '1.2rem',
  },
  linkImagesContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    marginTop: '40px',
  },
  linkImagesContainerMobile: {
    gap: '50px',
  },
  linkImageWrapper: {
    display: 'inline-block',
    transition: 'transform 0.3s ease',
  },
  linkImage: {
    width: '100px',
    height: '100px',
  },
  linkImageMobile: {
    width: '50px',
    height: '50px',
  },
};

export default styles;
