import React from 'react';

export default class GuessHeader extends React.Component {
  render() {
    let feedbackDialogue;

    if (this.props.feedback === 0) {
      feedbackDialogue = "Make your Guess!";
    }

    else if (this.props.feedback === 1) {
      feedbackDialogue = "You Won. Click new game to play again";
    }

    else if (this.props.feedback === 2) {
      feedbackDialogue = "Hot";
    }

    else if (this.props.feedback === 3) {
      feedbackDialogue = "Cold";
    }

    return (
      <div className="guessHeader">
        <h2>{feedbackDialogue}</h2>
      </div>
    );
  }
}
