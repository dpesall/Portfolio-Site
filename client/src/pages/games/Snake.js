import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from "../../styles/Games.styles.js";

const BOARD_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };

const DIFFICULTY_SETTINGS = {
  Easy: 200,
  Medium: 150,
  Hard: 100,
  Extreme: 50,
};

const Snake = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(null);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [difficulty, setDifficulty] = useState('Medium');
  const directionQueue = useRef([]);
  const gameboardRef = useRef(null);
  const gameIntervalRef = useRef(null);

  const generateFood = useCallback(() => {
    const emptyTiles = [];
    for (let x = 0; x < BOARD_SIZE; x++) {
      for (let y = 0; y < BOARD_SIZE; y++) {
        if (!snake.some(segment => segment.x === x && segment.y === y)) {
          emptyTiles.push({ x, y });
        }
      }
    }
    if (emptyTiles.length === 0) {
      setGameOver(true);
      return null;
    }
    return emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
  }, [snake]);

  useEffect(() => {
    if (!food) {
      setFood(generateFood());
    }
  }, [food, generateFood]);

  const moveSnake = useCallback(() => {
    if (gameOver || isPaused) return;

    if (directionQueue.current.length > 0) {
      const nextDirection = directionQueue.current.shift();
      setDirection(nextDirection);
    }

    setSnake(prevSnake => {
      const newSnake = [...prevSnake];
      const head = { ...newSnake[0] };

      head.x += direction.x;
      head.y += direction.y;

      if (head.x < 0 || head.x >= BOARD_SIZE || head.y < 0 || head.y >= BOARD_SIZE) {
        setGameOver(true);
        return prevSnake;
      }

      if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true);
        return prevSnake;
      }

      newSnake.unshift(head);

      if (food && head.x === food.x && head.y === food.y) {
        setScore(prevScore => prevScore + 1);
        setFood(null);
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameOver, isPaused]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();

        const newDirection = (() => {
          switch (e.key) {
            case 'ArrowUp': return { x: 0, y: -1 };
            case 'ArrowDown': return { x: 0, y: 1 };
            case 'ArrowLeft': return { x: -1, y: 0 };
            case 'ArrowRight': return { x: 1, y: 0 };
            default: return null;
          }
        })();

        if (newDirection &&
            (newDirection.x !== -direction.x || newDirection.y !== -direction.y) &&
            (directionQueue.current.length === 0 || 
             (directionQueue.current[directionQueue.current.length - 1].x !== newDirection.x ||
              directionQueue.current[directionQueue.current.length - 1].y !== newDirection.y))) {
          directionQueue.current.push(newDirection);
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      if (gameIntervalRef.current) {
        clearInterval(gameIntervalRef.current);
      }
    };
  }, [direction]);

  useEffect(() => {
    if (gameIntervalRef.current) {
      clearInterval(gameIntervalRef.current);
    }
    gameIntervalRef.current = setInterval(moveSnake, DIFFICULTY_SETTINGS[difficulty]);
  }, [difficulty, moveSnake]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood(null);
    setDirection(INITIAL_DIRECTION);
    setGameOver(false);
    setScore(0);
    setIsPaused(true);
    directionQueue.current = [];
  };

  const startGame = () => {
    if (isPaused) {
      setIsPaused(false);
      gameboardRef.current.focus();
    }
  };

  const changeDifficulty = (newDifficulty) => {
    if (isPaused || gameOver) {
      setDifficulty(newDifficulty);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.gameWrapper}>
        <div 
          style={{...styles.snakeContainer, ...styles.noFocusOutline}}
          onClick={startGame}
          ref={gameboardRef}
          tabIndex="0"
        >
          <div style={styles.gameBoard}>
            {[...Array(BOARD_SIZE)].map((_, rowIndex) =>
              [...Array(BOARD_SIZE)].map((_, colIndex) => {
                const isSnake = snake.some(segment => segment.x === colIndex && segment.y === rowIndex);
                const isFood = food && food.x === colIndex && food.y === rowIndex;
                return (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    style={{
                      width: '20px',
                      height: '20px',
                      ...(isSnake && styles.snakeCell),
                      ...(isFood && styles.foodCell),
                    }}
                  />
                );
              })
            )}
          </div>
          <div style={styles.gameControls}>
            <button style={styles.button} onClick={resetGame}>
              {gameOver ? 'Play Again' : 'Reset'}
            </button>
          </div>
          {gameOver && <div style={styles.gameOver}>Game Over!</div>}
          {isPaused && !gameOver && (
            <div style={{...styles.gameOver, color: '#4CAF50'}}>
              Click the screen to begin
            </div>
          )}
          <div style={styles.score}>Score: {score}</div>
        </div>
        
        <div style={{...styles.controlPanel}}>
          <div style={styles.difficultySection}>
            <h3 style={styles.difficultyTitle}>Difficulty</h3>
            <div style={styles.difficultyButtons}>
              {Object.keys(DIFFICULTY_SETTINGS).map((level) => (
                <button
                    key={level}
                    style={{
                    ...styles.difficultyButton,
                    backgroundColor: difficulty === level ? '#4CAF50' : '#666',
                    color: difficulty === level ? 'white' : '#ccc',
                    cursor: (!isPaused && !gameOver) ? 'not-allowed' : 'pointer',
                    }}
                    onClick={() => changeDifficulty(level)}
                    disabled={!isPaused && !gameOver}
                >
                    {level}
              </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Snake;