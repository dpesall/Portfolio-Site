import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Navbar.styles';

const NavBar = () => {
    const location = useLocation();

    const NavLink = ({ to, children }) => {
        const isActive = location.pathname === to;
        return (
            <li style={styles.navItem}>
                <Link
                    to={to}
                    style={{
                        ...styles.navLink,
                        ...(isActive ? styles.activeNavLink : {}),
                    }}
                    onMouseEnter={(e) => Object.assign(e.target.style, styles.navLinkHover)}
                    onMouseLeave={(e) => {
                        e.target.style.textDecoration = 'none';
                        if (!isActive) {
                            e.target.style.fontWeight = 'normal';
                        }
                    }}
                >
                    {children}
                </Link>
            </li>
        );
    };

    return (
        <nav style={styles.navbar}>
            <div style={styles.navContainer}>
                <div style={styles.navInner}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/resume">Resume</NavLink>
                    <NavLink to="/timeline">Timeline</NavLink>
                    <NavLink to="/animations">Animations</NavLink>
                    <NavLink to="/games">Games</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;