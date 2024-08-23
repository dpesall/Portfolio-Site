import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Navbar.styles';
import siteLogo from "../assets/site-logo.png";
import { isMobile } from 'react-device-detect';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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
        <nav style={styles.navbar} ref={menuRef}>
            <div style={styles.logoContainer}>
                <Link to="/">
                    <img src={siteLogo} alt="Logo" style={styles.logo} />
                </Link>
            </div>
            {isMobile ? (
                <>
                    <div
                        style={styles.hamburgerContainer}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div style={styles.hamburger}></div>
                        <div style={styles.hamburger}></div>
                        <div style={styles.hamburger}></div>
                    </div>
                    {isMenuOpen && (
                        <div style={styles.navContainerMobile}>
                            <ul style={{ ...styles.navInner, ...styles.navInnerMobile }}>
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/resume">Resume</NavLink>
                                <NavLink to="/timeline">Timeline</NavLink>
                                <NavLink to="/animations">Animations</NavLink>
                                <NavLink to="/games">Games</NavLink>
                            </ul>
                        </div>
                    )}
                </>
            ) : (
                <div style={styles.navContainer}>
                    <ul style={styles.navInner}>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/resume">Resume</NavLink>
                        <NavLink to="/timeline">Timeline</NavLink>
                        <NavLink to="/animations">Animations</NavLink>
                        <NavLink to="/games">Games</NavLink>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
