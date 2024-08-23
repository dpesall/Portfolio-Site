// src/styles/NavBar.styles.js

const styles = {
    navbar: {
        backgroundColor: '#171717',
        padding: '0px 5px',
        border: '2px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
    },
    logoContainer: {
        flexShrink: 0,
        marginRight: '20px',
    },
    logo: {
        paddingTop: '5px',
        height: '50px',
        width: 'auto',
    },
    navContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    navInner: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        listStyleType: 'none',
        padding: 0,
        margin: 0,
    },
    navItem: {
        fontSize: '1.2rem',
    },
    navLink: {
        color: '#ffffff',
        textDecoration: 'none',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navLinkHover: {
        textDecoration: 'underline',
    },
    activeNavLink: {
        fontWeight: 'bold',
    },
    hamburgerContainer: {
        flexDirection: 'column',
        cursor: 'pointer',
        paddingRight: '25px'
    },
    hamburger: {
        width: '25px',
        height: '3px',
        backgroundColor: '#ffffff',
        margin: '4px 0',
    },
    navContainerMobile: {
        position: 'absolute',
        top: '60px',
        left: 0,
        right: 0,
        backgroundColor: '#171717',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 1000,
    },
    navInnerMobile: {
        flexDirection: 'column',
        gap: '20px',
    },
};

export default styles;
