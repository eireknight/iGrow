import React, { Component } from "react";
import Colors from "./Colors";
import Letters from "./Letters";
import Briggs from "./Briggs";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showColorsResult: true,
      showLettersResult: false,
      showBriggsResult: false,
    };
    this._onNextClick = this._onNextClick.bind(this);
  }

  renderResultColors() {
    return (
      <Colors
        resultColors={this.props.resultColors}
        _onNextClick={this._onNextClick}
      />
    );
  }

  renderResultLetters() {
    return (
      <Letters
        resultLetters={this.props.resultLetters}
        _onNextClick={this._onNextClick}
      />
    );
  }

  renderBriggsResult() {
    return <Briggs resultBriggs={this.props.resultBriggs} />;
  }

  render() {
    const { showColorsResult } = this.state;
    const { showLettersResult } = this.state;
    const { showBriggsResult } = this.state;
    if (showColorsResult) {
      return this.renderResultColors();
    }
    if (showLettersResult) {
      return this.renderResultLetters();
    }
    if (showBriggsResult) {
      return this.renderBriggsResult();
    }
  }

  _onNextClick() {
    const { showColorsResult } = this.state;
    const { showLettersResult } = this.state;
    const { showBriggsResult } = this.state;

    if (showColorsResult) {
      setTimeout(() => {
        this.setState({
          showColorsResult: !showColorsResult, // -> false
          showLettersResult: !showLettersResult, // -> true
        });
      }, 800);
    } else if (showLettersResult) {
      setTimeout(() => {
        this.setState({
          showLettersResult: !showLettersResult, // false
          showBriggsResult: !showBriggsResult, // true
        });
      }, 800);
    }
  }
}

export default Results;
