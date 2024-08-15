import { StyleSheet } from 'aphrodite';

const bounce = {
  '0%, 80%, 100%': {
    transform: 'scale(0)',
  },
  '40%': {
    transform: 'scale(1)',
  },
};

const pulse = {
  '0%': { transform: 'scale(0.8)', opacity: 0.5 },
  '50%': { transform: 'scale(1)', opacity: 1 },
  '100%': { transform: 'scale(0.8)', opacity: 0.5 },
};

const rotate = {
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
};

const blink = {
  '0%': { opacity: 0.2 },
  '20%': { opacity: 1 },
  '100%': { opacity: 0.2 },
};

const slideIn = {
  from: { transform: 'translateX(-100%)' },
  to: { transform: 'translateX(0)' },
};

const fadeInOut = {
  '0%, 45%, 100%': { opacity: 0 },
  '50%, 95%': { opacity: 1 },
};

const shake = {
  '0%, 100%': { transform: 'translateX(0)' },
  '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
  '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
};

const bounceVertical = {
  '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
  '40%': { transform: 'translateY(-30px)' },
  '60%': { transform: 'translateY(-15px)' },
};

const morphShape = {
  '0%': { borderRadius: '50%' },
  '25%': { borderRadius: '25% 75% 25% 75%' },
  '50%': { borderRadius: '75% 25% 75% 25%' },
  '75%': { borderRadius: '25% 75% 25% 75%' },
  '100%': { borderRadius: '50%' },
};

const float = {
  '0%': { transform: 'translateY(100%) scale(0)' },
  '100%': { transform: 'translateY(-100%) scale(1)' },
};

const textScramble = {
  '0%': { filter: 'blur(5px)' },
  '50%': { filter: 'blur(0px)' },
  '100%': { filter: 'blur(5px)' },
};

const glitch = {
  '0%': { transform: 'translate(0)' },
  '20%': { transform: 'translate(-5px, 5px)' },
  '40%': { transform: 'translate(-5px, -5px)' },
  '60%': { transform: 'translate(5px, 5px)' },
  '80%': { transform: 'translate(5px, -5px)' },
  '100%': { transform: 'translate(0)' },
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
    minHeight: '100vh',
    padding: '20px',
    color: '#FFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  animationTable: {
    width: '100%',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  pageTitle: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  row: {
    display: 'flex',
    gap: '20px',
  },
  animationCell: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '20%',
    height: '100px',
  },
  descriptionCell: {
    flex: '1',
    backgroundColor: '#111',
    borderRadius: '8px',
    padding: '20px',
  },
  animationTitle: {
    marginTop: '0',
    marginBottom: '10px',
  },
  animationDescription: {
    margin: '0',
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: '15px',
    height: '15px',
    margin: '0 5px',
    backgroundColor: '#FFF',
    borderRadius: '50%',
    animationName: bounce,
    animationDuration: '1.5s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
  },
  dot1: {
    animationDelay: '0s',
  },
  dot2: {
    animationDelay: '0.3s',
  },
  dot3: {
    animationDelay: '0.6s',
  },
  pulsingCircle: {
    width: '40px',
    height: '40px',
    backgroundColor: '#FFF',
    borderRadius: '50%',
    animationName: pulse,
    animationDuration: '1.5s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
  },
  rotatingSquare: {
    width: '40px',
    height: '40px',
    backgroundColor: '#FFF',
    animationName: rotate,
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
  typingDots: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px',
  },
  typingDot: {
    width: '10px',
    height: '10px',
    backgroundColor: '#FFF',
    borderRadius: '50%',
    animationName: blink,
    animationDuration: '1.4s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    ':nth-child(2)': {
      animationDelay: '0.2s',
    },
    ':nth-child(3)': {
      animationDelay: '0.4s',
    },
  },
  slideInBox: {
    width: '50px',
    height: '50px',
    backgroundColor: '#FFF',
    animationName: slideIn,
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
  },
  fadeInOutBox: {
    width: '50px',
    height: '50px',
    backgroundColor: '#FFF',
    animationName: fadeInOut,
    animationDuration: '4s',
    animationIterationCount: 'infinite',
    transition: 'border-radius 0.3s ease-in-out',
  },
  fadeInOutCircle: {
    borderRadius: '50%',
  },
  fadeInOutSquare: {
    borderRadius: '0%',
  },
  shakeBox: {
    width: '50px',
    height: '50px',
    backgroundColor: '#FFF',
    animationName: shake,
    animationDuration: '1.8s',
    animationIterationCount: 'infinite',
  },
  bounceBox: {
    width: '50px',
    height: '50px',
    backgroundColor: '#FFF',
    animationName: bounceVertical,
    animationDuration: '2s',
    animationIterationCount: 'infinite',
  },
  floatingBubblesContainer: {
    position: 'relative',
    width: '100px',
    height: '50px',
    overflow: 'hidden',
  },
  bubble: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: '50%',
    animationName: float,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
  bubble1: { left: '10%', width: '20px', height: '20px', animationDuration: '4s', animationDelay: '0s' },
  bubble2: { left: '30%', width: '15px', height: '15px', animationDuration: '3s', animationDelay: '1s' },
  bubble3: { left: '50%', width: '25px', height: '25px', animationDuration: '5s', animationDelay: '2s' },
  bubble4: { left: '70%', width: '10px', height: '10px', animationDuration: '3.5s', animationDelay: '0.5s' },
  bubble5: { left: '90%', width: '18px', height: '18px', animationDuration: '4.5s', animationDelay: '1.5s' },
  textScramble: {
    fontSize: '24px',
    color: '#FFF',
    animationName: textScramble,
    animationDuration: '3s',
    animationIterationCount: 'infinite',
  },
  glitchAnimationCell: {
    position: 'relative',
    overflow: 'hidden',
  },
  glitchContainer: {
    position: 'relative',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#FFF',
  },
  glitchText: {
    position: 'absolute',
    top: -20,
    left: -30,
  },
  glitchBase: {
    zIndex: 2,
  },
  glitchLayer1: {
    color: 'cyan',
    zIndex: 3,
    animationName: glitch,
    animationDuration: '0.35s',
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 'infinite',
  },
  glitchLayer2: {
    color: 'red',
    zIndex: 1,
    animationName: glitch,
    animationDuration: '0.3s',
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 'infinite',
    animationDelay: '0.15s',
  },
});

export default styles;