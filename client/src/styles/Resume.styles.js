// src/styles/Resume.styles.js

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        color: '#FFFFFF',
    },
    header: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    name: {
        fontSize: '2.5em',
        marginBottom: '10px',
    },
    contactInfo: {
        fontSize: '0.9em',
    },
    socialLinks: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px',
    },
    socialLink: {
        margin: '0 10px',
    },
    socialLogo: {
        width: '48px',
        height: '48px',
    },
    summary: {
      marginBottom: '20px',
    },
    sectionTitle: {
      borderBottom: '2px solid #333',
      paddingBottom: '5px',
      marginBottom: '15px',
    },
    skillsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
      },
    skillsList: {
        width: '50%',
        listStyleType: 'disc',
        paddingLeft: '20px',
        marginTop: '0',
    },
    job: {
      marginBottom: '20px',
    },
    jobDate: {
      fontStyle: 'italic',
      marginBottom: '5px',
    },
    education: {
      marginBottom: '20px',
    },
    volunteerList: {
      paddingLeft: '20px',
    },
  };
  
  export default styles;