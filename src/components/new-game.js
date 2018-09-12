import React from 'react';
import HotCold from './hot-cold';

export default class NewGame extends React.Component {
  constructor(props) {
    super(props)

    let randomNumber = Math.floor((Math.random() * 100) + 1);
    this.state = {
      randomNumber: randomNumber,
      currentGuess: 0,
      guessCount: 0,
      pastGuess: [],
      feedback: 0
    }
  }

  generateNewGame() {
    this.generateRandomNumber();
    this.setState({
      pastGuess: [],
      feedback: 0
    });
  }

  generateRandomNumber() {
    let newNumber = Math.floor((Math.random() * 100) + 1);
    this.setState({
      randomNumber: newNumber,
      guessCount: 0
    });
  }

  updateGuessCount() {
    const newCount = this.state.guessCount + 1;
    this.setState({
      guessCount: newCount
    });
  }

  updateCurrentGuess(currentGuess) {
    this.setState({
      currentGuess: {currentGuess}
    });
  }

  updatePastGuess(currentGuess) {
    this.setState({
      pastGuess: [...this.state.pastGuess, currentGuess]
    });
  }

  updateFeedback(currentGuess) {
    let randomNumberUpper = this.state.randomNumber + 10;
    let randomNumberLower = this.state.randomNumber - 10;

    if (parseInt(currentGuess, 10) === this.state.randomNumber) {
      this.setState({
        feedback: 1
      });
    }

    else if (randomNumberLower < currentGuess && currentGuess < randomNumberUpper) {
      this.setState({
        feedback: 2
      });
    }

    else if (randomNumberLower > currentGuess || currentGuess > randomNumberUpper) {
      this.setState({
        feedback: 3
      });
    }
  }

  render() {
    return (
      <div>
        <button className="button-newGame" onClick={() => this.generateNewGame()}>+ New Game</button>
        <HotCold currentGuess={this.state.currentGuess} updateFeedback={(currentGuess) => this.updateFeedback(currentGuess)} feedback={this.state.feedback} pastGuess={this.state.pastGuess} updatePastGuess={(currentGuess) => this.updatePastGuess(currentGuess)} updateGuessCount={() => this.updateGuessCount()} guessCount={this.state.guessCount}/>
      </div>
    );
  }
}
