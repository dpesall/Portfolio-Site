// src/styles/NavBar.styles.js

const styles = {
    navbar: {
        backgroundColor: '#171717',
        padding: '5px 0',
        border: '2px solid black',
    },
    navContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    navInner: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        width: 'auto',
    },
    navItem: {
        fontSize: '1.2rem',
        listStyleType: 'none',
        width: '150px',
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
};

export default styles;