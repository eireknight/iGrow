import React, { Component } from "react";
import ReactDOM from "react-dom";
import anime from "animejs";
import Intro from "./Intro";
import Question from "./Question";

class PTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showQuestion: false,
    };
    this._onStartClick = this._onStartClick.bind(this);
  }

  _onStartClick() {
    this.animateOut();
    setTimeout(
      () => this.setState({ showQuestion: !this.state.showQuestion }),
      1000,
    );
  }

  animateOut() {
    setTimeout(
      () =>
        anime({
          targets: ".card",
          translateX: "150%",
          elasticity(el, i, l) {
            return 200 + i * 200;
          },
        }),
      200,
    );
  }

  renderIntro() {
    return (
      <Intro
        _onStartClick={this._onStartClick}
        title="What's Your Personality?"
      />
    );
  }

  renderQuestion() {
    return <Question />;
  }

  render() {
    const { showQuestion } = this.state;
    if (showQuestion) {
      return this.renderQuestion();
    }
    return this.renderIntro();
  }
}

export default PTest;

ReactDOM.render(<PTest />, document.getElementById("root"));
