/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import styles from "../styles/Home.styles.js";
import ProfilePic from "../assets/Profile.PNG";
import linkedinLogo from "../assets/linkedin-white.png";
import githubLogo from "../assets/github-white.png";
import instagramLogo from "../assets/instagram-white.png";

const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = reject;
    img.src = src;
  });
};

const Home = () => {
    const [hoveredImage, setHoveredImage] = useState(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const LINKS = ['https://github.com/dpesall', 'https://www.linkedin.com/in/drew-pesall/', 'https://www.instagram.com/drew.pesall/'];
    const images = [ProfilePic, githubLogo, linkedinLogo, instagramLogo];

    useEffect(() => {
      const preloadImages = async () => {
        try {
          await Promise.all(images.map(preloadImage));
          setImagesLoaded(true);
        } catch (error) {
          console.error("Failed to preload images:", error);
        }
      };

      preloadImages();
    }, []);

    if (!imagesLoaded) {
      return <></>;
    }

    return (
      <div style={styles.container}>
        <BrowserView>
          <div style={styles.contentWrapper}>
            <div style={styles.imageContainer}>
              <img src={ProfilePic} alt="Profile" style={styles.profileImage} />
            </div>
            <div style={styles.textContainer}>
              <h1 style={styles.heading}>
                Hey, I'm Drew Pesall.
              </h1>
              <h2 style={styles.subheading}>
                I'm an experienced software engineer skilled in full-stack development,
                API implementation, automation, CI/CD pipeline optimization, with a strong
                background in agile development.
              </h2>
            </div>
          </div>
          <div style={styles.linkImagesContainer}>
              {[githubLogo, linkedinLogo, instagramLogo].map((image, index) => (
              <a
                  key={index}
                  href={LINKS[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                  ...styles.linkImageWrapper,
                  transform: hoveredImage === index ? 'scale(1.1)' : 'scale(1)',
                  }}
                  onMouseEnter={() => setHoveredImage(index)}
                  onMouseLeave={() => setHoveredImage(null)}
              >
                  <img src={image} alt={`Link ${index + 1}`} style={styles.linkImage} />
              </a>
              ))}
          </div>
        </BrowserView>

        <MobileView>
          <div style={styles.contentWrapperMobile}>
            <div style={styles.imageContainerMobile}>
              <img src={ProfilePic} alt="Profile" style={styles.profileImageMobile} />
            </div>
            <div style={styles.textContainerMobile}>
              <h1 style={{ ...styles.heading, ...styles.headingMobile }}>
                Hey, I'm Drew Pesall.
              </h1>
              <h2 style={{ ...styles.subheading, ...styles.subheadingMobile }}>
                I'm an experienced software engineer skilled in full-stack development,
                API implementation, automation, CI/CD pipeline optimization, with a strong
                background in agile development.
              </h2>
            </div>
          </div>
          <div style={{ ...styles.linkImagesContainer, ...styles.linkImagesContainerMobile }}>
              {[githubLogo, linkedinLogo, instagramLogo].map((image, index) => (
              <a
                  key={index}
                  href={LINKS[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                  ...styles.linkImageWrapper,
                  transform: hoveredImage === index ? 'scale(1.1)' : 'scale(1)',
                  }}
                  onMouseEnter={() => setHoveredImage(index)}
                  onMouseLeave={() => setHoveredImage(null)}
              >
                  <img src={image} alt={`Link ${index + 1}`} style={styles.linkImageMobile} />
              </a>
              ))}
          </div>
        </MobileView>
      </div>
    );
  };

export default Home;
