import React from 'react';

export default class PastGuess extends React.Component {
  render() {
    const displayPastGuesses = this.props.pastGuess.map((guess, index) =>
      (<div className="pastGuess-box" key={index}>{guess}</div>)
    );

    return (
      <div className="pastGuess">
        {displayPastGuesses}
      </div>
    );
  }
}
