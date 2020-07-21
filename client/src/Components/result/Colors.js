import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrownDef, GreenDef, BlueDef, RedDef } from "../definitions/ColorsDef";
import { Wrapper } from "../utils/ResultWrapper";
import { NextBtn } from "../utils/Buttons";

class Colors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBrownDef: false,
      showGreenDef: false,
      showBlueDef: false,
      showRedDef: false,
    };
    this.onBrownDefClick = this.onBrownDefClick.bind(this);
    this.onGreenDefClick = this.onGreenDefClick.bind(this);
    this.onBlueDefClick = this.onBlueDefClick.bind(this);
    this.onRedDefClick = this.onRedDefClick.bind(this);
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

  renderBrownDef() {
    return (
      <BrownDef
        title="Brown Type Definition"
        content={`You are a Builder. You enjoy leading, creating and working hard.
                  You are a traditional person with respect for authority.
                  Your strengths are your diligence, directness and practicality.`}
        onBackClick={this.onBrownDefClick}
      />
    );
  }

  renderGreenDef() {
    return (
      <GreenDef
        title="Green Type Definition"
        content={`You are a Planner. You enjoy dreaming, plotting and innovating.
                  You tend to spend a lot of time thinking.
                  Your strengths are your vision, objectiveness and attention to detail.`}
        onBackClick={this.onGreenDefClick}
      />
    );
  }

  renderBlueDef() {
    return (
      <BlueDef
        title="Blue Type Definition"
        content={`You are a Relater. You enjoy chatting, romance and spending time with others.
                You are an empathetic person who tends to put the needs of others above your own.
                Your strengths are your sympathy, openness and awareness of your own emotions.`}
        onBackClick={this.onBlueDefClick}
      />
    );
  }

  renderRedDef() {
    return (
      <RedDef
        title="Red Type Definition"
        content={`You are an Adventurer. You enjoy action, excitement and drama.
                  You easily accept change and are spontaneous.
                  Your strengths are your tenacity, fearlessness and adaptability.`}
        onBackClick={this.onRedDefClick}
      />
    );
  }

  render() {
    const { showBrownDef } = this.state;
    const { showGreenDef } = this.state;
    const { showBlueDef } = this.state;
    const { showRedDef } = this.state;
    if (showBrownDef) {
      return this.renderBrownDef();
    }
    if (showGreenDef) {
      return this.renderGreenDef();
    }
    if (showBlueDef) {
      return this.renderBlueDef();
    }
    if (showRedDef) {
      return this.renderRedDef();
    }
    return (
      <Wrapper className="jumbotron">
        <h1 className="display-3 title">Colors Result</h1>
        <hr className="my-4" />
        <h2 className="display-6 resultTxt">{this.props.resultColors}</h2>
        <hr className="my-5" />
        <p className="lead">What does this result mean?</p>
        <ul className="list-group">
          <li className="list-group-item" onClick={this.onBrownDefClick}>
            Brown
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onGreenDefClick}>
            Green
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onBlueDefClick}>
            Blue
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onRedDefClick}>
            Red
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
        </ul>
        {this.renderNextBtn()}
      </Wrapper>
    );
  }

  onBrownDefClick() {
    const { showBrownDef } = this.state;
    this.setState({ showBrownDef: !showBrownDef });
  }

  onGreenDefClick() {
    const { showGreenDef } = this.state;
    this.setState({ showGreenDef: !showGreenDef });
  }

  onBlueDefClick() {
    const { showBlueDef } = this.state;
    this.setState({ showBlueDef: !showBlueDef });
  }

  onRedDefClick() {
    const { showRedDef } = this.state;
    this.setState({ showRedDef: !showRedDef });
  }
}

Colors.PropTypes = {
  resultColors: PropTypes.string.isRequired,
  resultBrown: PropTypes.string.isRequired,
  resultGreen: PropTypes.string.isRequired,
  resultBlue: PropTypes.string.isRequired,
  resultRed: PropTypes.string.isRequired,
};

export default Colors;
