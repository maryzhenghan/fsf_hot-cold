import React from 'react';

export default function GuessFormCount(props) {
  return (
    <div>
      <h3>Guess #<span className="guessNumber">{props.guessCount}</span>!</h3>
    </div>
  );
}
