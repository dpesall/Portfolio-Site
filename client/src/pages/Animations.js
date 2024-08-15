import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import styles from "../styles/Animations.styles.js";

const LoadingAnimation = () => (
  <div className={css(styles.loader)}>
    <div className={css(styles.dot, styles.dot1)}></div>
    <div className={css(styles.dot, styles.dot2)}></div>
    <div className={css(styles.dot, styles.dot3)}></div>
  </div>
);

const PulsingCircle = () => (
  <div className={css(styles.pulsingCircle)}></div>
);

const RotatingSquare = () => (
  <div className={css(styles.rotatingSquare)}></div>
);

const TypingDots = () => (
  <div className={css(styles.typingDots)}>
    <span className={css(styles.typingDot)}></span>
    <span className={css(styles.typingDot)}></span>
    <span className={css(styles.typingDot)}></span>
  </div>
);

const SlideInAnimation = () => (
  <div className={css(styles.slideInBox)}></div>
);

const FadeInOutAnimation = () => {
  const [isCircle, setIsCircle] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsCircle(prev => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={css(
      styles.fadeInOutBox,
      isCircle ? styles.fadeInOutCircle : styles.fadeInOutSquare
    )}></div>
  );
};

const ShakeAnimation = () => (
  <div className={css(styles.shakeBox)}></div>
);

const BounceAnimation = () => (
  <div className={css(styles.bounceBox)}></div>
);

const FloatingBubbles = () => (
  <div className={css(styles.floatingBubblesContainer)}>
    {[...Array(5)].map((_, i) => (
      <div key={i} className={css(styles.bubble, styles[`bubble${i + 1}`])}></div>
    ))}
  </div>
);

const TextScramble = () => {
  const [text, setText] = React.useState('Hello');
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setText(prevText => 
        prevText === 'Hello' ? 'World' : 'Hello'
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return <div className={css(styles.textScramble)}>{text}</div>;
};

const GlitchEffect = () => (
  <div className={css(styles.glitchContainer)}>
    <div className={css(styles.glitchText, styles.glitchBase)}>Glitch</div>
    <div className={css(styles.glitchText, styles.glitchLayer1)}>Glitch</div>
    <div className={css(styles.glitchText, styles.glitchLayer2)}>Glitch</div>
  </div>
);

const AnimationRow = ({ title, description, AnimationComponent }) => (
  <div className={css(styles.row)}>
    <div className={css(styles.animationCell)}>
      <AnimationComponent />
    </div>
    <div className={css(styles.descriptionCell)}>
      <h3 className={css(styles.animationTitle)}>{title}</h3>
      <p className={css(styles.animationDescription)}>{description}</p>
    </div>
  </div>
);

const Animations = () => {
  const animations = [
    {
      title: "Bouncing Dots",
      description: "Three dots bouncing in sequence.",
      component: LoadingAnimation
    },
    {
      title: "Pulsing Circle",
      description: "A circle that pulses, grows and shrinks.",
      component: PulsingCircle
    },
    {
      title: "Rotating Square",
      description: "A square that rotates continuously.",
      component: RotatingSquare
    },
    {
      title: "Phasing Dots",
      description: "Three dots fading in sequentially.",
      component: TypingDots
    },
    {
      title: "Slide In",
      description: "A box that slides in from the left and then back out.",
      component: SlideInAnimation
    },
    {
      title: "Fade In/Out",
      description: "A morphing circle that fades in and out.",
      component: FadeInOutAnimation
    },
    {
      title: "Shake",
      description: "A box that rapidly moves side to side.",
      component: ShakeAnimation
    },
    {
      title: "Bounce",
      description: "A box that moves up and down.",
      component: BounceAnimation
    },
    {
      title: "Floating Bubbles",
      description: "Multiple bubbles floating upwards with different speeds and sizes.",
      component: FloatingBubbles
    },
    {
      title: "Text Scramble",
      description: "Text that changes with a scrambling effect.",
      component: TextScramble
    },
    {
      title: "Glitch Effect",
      description: "Text with a glitch effect, simulating digital distortion.",
      component: GlitchEffect
    },
  ];

  return (
    <div className={css(styles.container)}>
      <div className={css(styles.animationTable)}>
        <h1 className={css(styles.pageTitle)}>Animation Showcase</h1>
        <div className={css(styles.grid)}>
          {animations.map((anim, index) => (
            <AnimationRow key={index} title={anim.title} description={anim.description} AnimationComponent={anim.component} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Animations;