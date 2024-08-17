// src/styles/NavBar.styles.js

const styles = {
    navbar: {
        backgroundColor: '#171717',
        padding: '0px 5px',
        border: '2px solid black',
        display: 'flex',
        alignItems: 'center',
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
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
    },
    navInner: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
    },
    navItem: {
        fontSize: '1.2rem',
        listStyleType: 'none',
    },
    navLink: {
        color: '#ffffff',
        textDecoration: 'none',
        padding: '0px 20px',
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
};

export default styles;