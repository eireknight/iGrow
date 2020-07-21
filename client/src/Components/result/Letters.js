import React, { Component } from "react";
import PropTypes from "prop-types";
import { Wrapper } from "../utils/ResultWrapper";
import { LetterA, LetterB, LetterC, LetterD } from "../definitions/LettersDef";
import { NextBtn } from "../utils/Buttons";

class Letters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLetterA: false,
      showLetterB: false,
      showLetterC: false,
      showLetterD: false,
    };
    this.onLetterA_Click = this.onLetterA_Click.bind(this);
    this.onLetterB_Click = this.onLetterB_Click.bind(this);
    this.onLetterC_Click = this.onLetterC_Click.bind(this);
    this.onLetterD_Click = this.onLetterD_Click.bind(this);
  }

  renderNextBtn() {
    return (
      <NextBtn onClick={this.props._onNextClick}>
        <span>Next</span>
        <div className="icon">
          <i className="fa fa-chevron-right" />
        </div>
      </NextBtn>
    );
  }

  renderLetterA() {
    return (
      <LetterA
        title="Letter A Definition"
        content={`You are a type A personality. The Director.  You like to be in control.
                You are goal oriented, risk taking, and good under stress.`}
        onBackClick={this.onLetterA_Click}
      />
    );
  }

  renderLetterB() {
    return (
      <LetterB
        title="Letter B Definition"
        content={`You are a type B personality. The Socializer.  You like to be around people.
                You are empathetic, enthusiastic, and outgoing.`}
        onBackClick={this.onLetterB_Click}
      />
    );
  }

  renderLetterC() {
    return (
      <LetterC
        title="Letter C Definition"
        content={`You are a type C personality. The Thinker.  You like to think things through.
                You are detail oriented, logical, and prepared.`}
        onBackClick={this.onLetterC_Click}
      />
    );
  }

  renderLetterD() {
    return (
      <LetterD
        title="Letter D Definition"
        content={`You are a type D personality. The Supporter.  You like to help.
                  You are task oriented, compassionate, and patient.`}
        onBackClick={this.onLetterD_Click}
      />
    );
  }

  render() {
    const { showLetterA } = this.state;
    const { showLetterB } = this.state;
    const { showLetterC } = this.state;
    const { showLetterD } = this.state;
    if (showLetterA) {
      return this.renderLetterA();
    }
    if (showLetterB) {
      return this.renderLetterB();
    }
    if (showLetterC) {
      return this.renderLetterC();
    }
    if (showLetterD) {
      return this.renderLetterD();
    }
    return (
      <Wrapper>
        <h1 className="display-3 title">Letter Personality Type</h1>
        <hr className="my-4" />
        <h2 className="display-6 resultTxt">{this.props.resultLetters}</h2>
        <hr className="my-5" />
        <p className="lead">What does this mean?</p>
        <ul className="list-group">
          <li className="list-group-item" onClick={this.onLetterA_Click}>
            Type A
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onLetterB_Click}>
            Type B
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onLetterC_Click}>
            Type C
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onLetterD_Click}>
            Type D
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
        </ul>
        {this.renderNextBtn()}
      </Wrapper>
    );
  }

  onLetterA_Click() {
    const { showLetterA } = this.state;
    this.setState({ showLetterA: !showLetterA });
  }

  onLetterB_Click() {
    const { showLetterB } = this.state;
    this.setState({ showLetterB: !showLetterB });
  }

  onLetterC_Click() {
    const { showLetterC } = this.state;
    this.setState({ showLetterC: !showLetterC });
  }

  onLetterD_Click() {
    const { showLetterD } = this.state;
    this.setState({ showLetterD: !showLetterD });
  }
}

Letters.PropTypes = {
  resultLetters: PropTypes.string.isRequired,
};

export default Letters;
