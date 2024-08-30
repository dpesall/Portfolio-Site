import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from "../../styles/Games.styles.js";

const BrickBreak = () => {
  const gameWidth = 1000;
  const gameHeight = 600;
  const paddleWidth = 150;
  const paddleHeight = 10;
  const ballSize = 20;
  const paddleMoveStep = 3;
  const ballSpeed = 2;
  const brickRows = 3;
  const brickColumns = 20;
  const brickHeight = 15;
  const brickSpacing = 2;
  const brickWidth = (gameWidth - (brickColumns + 1) * brickSpacing) / brickColumns;

  const [paddlePosition, setPaddlePosition] = useState((gameWidth - paddleWidth) / 2);
  const [ballPosition, setBallPosition] = useState({
    x: (gameWidth - ballSize) / 2,
    y: gameHeight / 2,
  });
  const [ballVelocity, setBallVelocity] = useState({ x: 0, y: 0 });
  const [ballReleased, setBallReleased] = useState(false);
  const [bricks, setBricks] = useState([]);

  const animationFrameId = useRef(null);
  const keyState = useRef({ ArrowLeft: false, ArrowRight: false });

  // Function to generate bricks
  const generateBricks = useCallback(() => {
    const newBricks = [];
    for (let row = 0; row < brickRows; row++) {
      for (let col = 0; col < brickColumns; col++) {
        newBricks.push({
          x: col * (brickWidth + brickSpacing) + brickSpacing,
          y: row * (brickHeight + brickSpacing) + brickSpacing,
          width: brickWidth,
          height: brickHeight,
          visible: true,
        });
      }
    }
    setBricks(newBricks);
  }, []);

  // Initialize bricks
  useEffect(() => {
    generateBricks();
  }, [generateBricks]);

  const gameLoop = useCallback(() => {
    // Move paddle
    setPaddlePosition((prevPosition) => {
      let newPosition = prevPosition;
      if (keyState.current.ArrowLeft) {
        newPosition = Math.max(newPosition - paddleMoveStep, 0);
      }
      if (keyState.current.ArrowRight) {
        newPosition = Math.min(newPosition + paddleMoveStep, gameWidth - paddleWidth);
      }
      return newPosition;
    });

    // Move ball
    if (ballReleased) {
      setBallPosition((prevPosition) => {
        let newX = prevPosition.x + ballVelocity.x;
        let newY = prevPosition.y + ballVelocity.y;
        let newVelocityX = ballVelocity.x;
        let newVelocityY = ballVelocity.y;

        // Wall collisions
        if (newX <= 0 || newX >= gameWidth - ballSize) {
          newVelocityX = -newVelocityX;
          newX = newX <= 0 ? 0 : gameWidth - ballSize;
        }
        if (newY <= 0) {
          newVelocityY = -newVelocityY;
          newY = 0;
        }

        // Paddle collision with Pong-style reflection
        const paddleTop = gameHeight - (paddleHeight + 17);
        if (
          prevPosition.y + ballSize <= paddleTop && newY + ballSize >= paddleTop &&
          newX + ballSize > paddlePosition && newX < paddlePosition + paddleWidth
        ) {
          const hitPos = (newX + ballSize / 2 - paddlePosition) / paddleWidth;
          const reflectionAngle = (hitPos - 0.5) * Math.PI / 3;
          const speed = Math.sqrt(newVelocityX * newVelocityX + newVelocityY * newVelocityY);
          newVelocityX = speed * Math.sin(reflectionAngle);
          newVelocityY = -speed * Math.cos(reflectionAngle);
          newY = paddleTop - ballSize;
        }

        // Brick collisions
        let collidedWithBrick = false;
        setBricks((prevBricks) => {
          return prevBricks.map((brick) => {
            if (brick.visible &&
                newX < brick.x + brick.width &&
                newX + ballSize > brick.x &&
                newY < brick.y + brick.height &&
                newY + ballSize > brick.y
            ) {
                collidedWithBrick = true;
                
                // Reverse ball y-direction on brick collision
                setBallVelocity({ x: ballVelocity.x, y: -ballVelocity.y });

                return { ...brick, visible: false };
            }
            return brick;
          });
        });

        if (collidedWithBrick) {
          // Adjust ball position to prevent sticking
          newX = prevPosition.x + newVelocityX;
          newY = prevPosition.y + newVelocityY;
        }

        // Ball out of bounds
        if (newY > gameHeight) {
          setBallReleased(false);
          setBallVelocity({ x: 0, y: 0 });
          return {
            x: (gameWidth - ballSize) / 2,
            y: gameHeight / 2,
          };
        }

        // Update velocity
        setBallVelocity({ x: newVelocityX, y: newVelocityY });

        return { x: newX, y: newY };
      });
    }

    animationFrameId.current = requestAnimationFrame(gameLoop);
  }, [ballReleased, ballVelocity, paddlePosition]);

  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(gameLoop);
    return () => {
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [gameLoop]);

  const releaseBall = useCallback(() => {
    if (!ballReleased) {
      const angle = Math.random() * Math.PI / 4 + Math.PI / 4;
      const velocityX = ballSpeed * Math.cos(angle);
      const velocityY = -ballSpeed * Math.sin(angle);
      setBallVelocity({ x: velocityX, y: velocityY });
      setBallReleased(true);
    }
  }, [ballReleased]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      keyState.current[e.key] = true;
    } else if (e.key === ' ') {
      releaseBall();
    }
  }, [releaseBall]);

  const handleKeyUp = useCallback((e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      keyState.current[e.key] = false;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return (
    <div style={styles.container}>
      <h2 style={{ color: '#fff' }}>Brick Break Game</h2>
      <div style={styles.brickBreakArea}>
        {!ballReleased && (
          <div style={styles.message}>
            Press Space to Release Ball
          </div>
        )}
        {bricks.map((brick, index) => (
          brick.visible && (
            <div
              key={index}
              style={{
                position: 'absolute',
                left: `${brick.x}px`,
                top: `${brick.y}px`,
                width: `${brick.width}px`,
                height: `${brick.height}px`,
                backgroundColor: '#fff',
              }}
            />
          )
        ))}
        <div
          style={{
            ...styles.paddle,
            left: `${paddlePosition}px`,
          }}
        />
        <div
          style={{
            ...styles.ball,
            left: `${ballPosition.x}px`,
            top: `${ballPosition.y}px`,
          }}
        />
      </div>
    </div>
  );
};

export default BrickBreak;
