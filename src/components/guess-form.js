import React from 'react';
import GuessFormCount from './guess-form-count';

export default class GuessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.updateGuessCount();
    this.props.updatePastGuess(parseInt(this.state.value, 10));
    this.props.updateFeedback(parseInt(this.state.value, 10));

    this.setState({
      value: ''
    });
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    let guessButton = (<button type="submit" id="button-guess" className="button-guess">Guess</button>);

    if (this.props.feedback === 1) {
      guessButton = (<div></div>);
    }

    return (
      <form className="guessForm" onSubmit={e => this.onSubmit(e)}>
        <input type="text" value={this.state.value} onChange={e => this.onChange(e)} placeholder="Enter your guess"></input>
        {guessButton}
        <GuessFormCount guessCount={this.props.guessCount} />
      </form>
    );
  }
}
