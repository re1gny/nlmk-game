import React, { forwardRef, useImperativeHandle, useState } from 'react';

const HORIZONTAL_SIZE = 7;
const VERTICAL_SIZE = 14;

function createBoard() {
  return new Array(HORIZONTAL_SIZE).fill(0).map(() => new Array(VERTICAL_SIZE).fill(0));
}

function TetrisGameComponent({ className, onFinish }, ref) {
  const [board, setBoard] = useState(createBoard());

  function handleRestart() {
    setBoard(createBoard());
  }

  useImperativeHandle(ref, () => ({
    restart: handleRestart,
  }), [handleRestart]);

  return (
    <div className={className}>

    </div>
  );
}

export const TetrisGame = forwardRef(TetrisGameComponent);