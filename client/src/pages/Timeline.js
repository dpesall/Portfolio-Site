/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import { useSwipeable } from 'react-swipeable';
import { css } from 'aphrodite';
import styles from "../styles/Timeline.styles.js";

const Timeline = () => {
  const [sliderValue, setSliderValue] = useState(isMobile ? 12.5 : 0);
  const sliderRef = useRef(null);
  const slideContainerRef = useRef(null);

  const slides = [
    {
      title: "Education",
      content: (
        <>
          <h3>University of North Dakota</h3>
          <h4>B.S. Computer Science & B.A. Mathematics</h4>
          <p>AUGUST 2016 – MAY 2020</p>
          <p>I attended the University of North Dakota in Grand Forks, ND. If you've ever been there, you know how brutally cold
             the winters there can be, but I stuck it out all four years and came away with majors in both Computer Science and Mathematics. 
          </p>
          <p>GPA: 3.744</p>
        </>
      )
    },
    {
      title: "Ameriprise Financial",
      content: (
        <>
          <h3>Software Engineer Intern</h3>
          <h3>Minneapolis MN</h3>
          <p>MAY 2019 – MAY 2020</p>
          <p>Designed and developed new capabilities for a web application to analyze and correct data. Created a user-friendly UI with intuitive controls and developed back-end integration for website-database interactions.</p>
        </>
      )
    },
    {
      title: "Ameriprise Financial",
      content: (
        <>
          <h3>Technology LDP – Software Engineering</h3>
          <h3>Minneapolis MN</h3>
          <p>MAY 2020 – DECEMBER 2022</p>
          <p>Rotated through three teams, working on automation, data analytics, and building an API for enterprise clients. Reduced team workload by over 100 hours per month through automated script deployment and API implementation.</p>
        </>
      )
    },
    {
      title: "Innovim",
      content: (
        <>
          <h3>Software Engineer III, Program Manager</h3>
          <h3>Remote</h3>
          <p>JANUARY 2022 – PRESENT</p>
          <p>Working on NASA's Earthdata Search tool, writing code to build new features, extend Search API, fix bugs, and optimize build times. Leading development of a web tool for extreme precipitation event predictions in the Western United States.</p>
        </>
      )
    }
  ];

  const currentSlide = Math.min(Math.floor(sliderValue / 25), slides.length - 1);

  const handleSliderChange = (event) => {
    setSliderValue(Number(event.target.value));
  };

  const handleWheel = (event) => {
    if (
      (sliderRef.current && sliderRef.current.contains(event.target)) ||
      (slideContainerRef.current && slideContainerRef.current.contains(event.target))
    ) {
      event.preventDefault();
      const direction = event.deltaY > 0 ? 1 : -1;
      const newValue = Math.min(Math.max(sliderValue + direction * 6.25, 0), 100);
      setSliderValue(newValue);
    }
  };

  useEffect(() => {
    document.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, [sliderValue]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setSliderValue((prev) => Math.min(prev + 25, 87.5)),
    onSwipedRight: () => setSliderValue((prev) => Math.max(prev - 25, 12.5)),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className={isMobile ? css(styles.containerMobile) : css(styles.container)}>
      <BrowserView>
        <h1 className={css(styles.header)}>My Timeline</h1>
        <div ref={slideContainerRef} className={css(styles.slideContainer)}>
          <h2 className={css(styles.slideTitle)}>{slides[currentSlide].title}</h2>
          <div className={css(styles.slideContent)}>
            {slides[currentSlide].content}
          </div>
        </div>
        <div className={css(styles.sliderContainer)} ref={sliderRef}>
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={handleSliderChange}
            className={css(styles.slider)}
          />
          <div className={css(styles.sliderLabels)}>
            {slides.map((slide, index) => (
              <span key={index} className={css(styles.sliderLabel)}>{slide.title}</span>
            ))}
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div {...swipeHandlers} className={css(styles.mobileSlideContainer)}>
          <h2 className={css(styles.slideTitle)}>{slides[currentSlide].title}</h2>
          <div className={css(styles.slideContent)}>
            {slides[currentSlide].content}
          </div>
        </div>
        <div className={css(styles.sliderContainer, styles.disabledSlider)}>
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            className={css(styles.slider)}
            disabled
          />
        </div>
        <p className={css(styles.swipeText)}>Swipe to progress</p>
      </MobileView>
    </div>
  );
};

export default Timeline;
