import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '30px 200px',
    paddingBottom: '80px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#111'
  },
  header: {
    textAlign: 'center',
    color: '#FFF',
    marginBottom: '30px',
  },
  slideContainer: {
    backgroundColor: '#262626',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    minHeight: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  slideTitle: {
    color: '#FFF',
    marginBottom: '15px',
  },
  slideContent: {
    color: '#FFF',
  },
  sliderContainer: {
    width: '100%',
    padding: '20px 0',
    position: 'relative',
  },
  slider: {
    width: '100%',
    WebkitAppearance: 'none',
    appearance: 'none',
    height: '15px',
    borderRadius: '5px',
    outline: 'none',
    opacity: '0.7',
    transition: 'opacity 0.2s',
    background: 'linear-gradient(to right, #b3b3b3 0%, #b3b3b3 25%, #8c8c8c 25%, #8c8c8c 50%, #666666 50%, #666666 75%, #404040 75%, #404040 100%)',
    ':hover': {
      opacity: '1',
    },
    '::-webkit-slider-thumb': {
      WebkitAppearance: 'none',
      appearance: 'none',
      width: '25px',
      height: '25px',
      borderRadius: '50%',
      background: '#0066cc',
      cursor: 'pointer',
    },
    '::-moz-range-thumb': {
      width: '25px',
      height: '25px',
      borderRadius: '50%',
      background: '#3498db',
      cursor: 'pointer',
    },
  },
  sliderLabels: {
    display: 'flex',
    position: 'absolute',
    top: '100%',
    left: '0',
    right: '0',
    marginTop: '-20px',
    color: '#FFF',
  },
  sliderLabel: {
    flex: '1',
    textAlign: 'center',
    fontSize: '14px',
    padding: '5px 0',
  },
});

export default styles;