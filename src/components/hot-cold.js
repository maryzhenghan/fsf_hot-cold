import React from 'react';
import GuessHeader from './guess-header';
import GuessForm from './guess-form';
import PastGuess from './past-guess';

export default class HotCold extends React.Component {
  render() {
    return (
      <div className="hotCold-container">
        <h1>HOT or COLD</h1>
        <div className="hotColdGame-container">
          <GuessHeader feedback={this.props.feedback}/>
          <GuessForm feedback={this.props.feedback} currentGuess={this.props.currentGuess} updateFeedback={this.props.updateFeedback} updatePastGuess={this.props.updatePastGuess} updateGuessCount={this.props.updateGuessCount} guessCount={this.props.guessCount} onSubmit={currentGuess => this.updateCurrentGuess(currentGuess)}/>
          <PastGuess pastGuess={this.props.pastGuess} displayPastGuess={() => this.displayPastGuess()} />
        </div>
      </div>
    );
  }
}
