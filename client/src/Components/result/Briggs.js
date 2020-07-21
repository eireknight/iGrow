import React, { Component } from "react";
import PropTypes from "prop-types";
import { Wrapper } from "../utils/ResultWrapper";
import {
  ISTJ,
  ISFJ,
  INFJ,
  INTJ,
  ISTP,
  ISFP,
  INFP,
  INTP,
  ESTP,
  ESFP,
  ENFP,
  ENTP,
  ESTJ,
  ESFJ,
  ENFJ,
  ENTJ,
} from "../definitions/BriggsDef";

class Briggs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showISTJ: false,
      showISFJ: false,
      showINFJ: false,
      showINTJ: false,
      showISTP: false,
      showISFP: false,
      showINFP: false,
      showINTP: false,
      showESTP: false,
      showESFP: false,
      showENFP: false,
      showENTP: false,
      showESTJ: false,
      showESFJ: false,
      showENFJ: false,
      showENTJ: false,
    };
    this.onISTJ_click = this.onISTJ_click.bind(this);
    this.onISFJ_click = this.onISFJ_click.bind(this);
    this.onINFJ_click = this.onINFJ_click.bind(this);
    this.onINTJ_click = this.onINTJ_click.bind(this);
    this.onISTP_click = this.onISTP_click.bind(this);
    this.onISFP_click = this.onISFP_click.bind(this);
    this.onINFP_click = this.onINFP_click.bind(this);
    this.onINTP_click = this.onINTP_click.bind(this);
    this.onESTP_click = this.onESTP_click.bind(this);
    this.onESFP_click = this.onESFP_click.bind(this);
    this.onENFP_click = this.onENFP_click.bind(this);
    this.onENTP_click = this.onENTP_click.bind(this);
    this.onESTJ_click = this.onESTJ_click.bind(this);
    this.onESFJ_click = this.onESFJ_click.bind(this);
    this.onENFJ_click = this.onENFJ_click.bind(this);
    this.onENTJ_click = this.onENTJ_click.bind(this);
  }

  renderISTJ() {
    return (
      <ISTJ
        title="Introvert | Sensing | Thinking | Judging"
        content={`You are a type ISTJ, aka The Logistician.
                You tend to be practical and logical above all else.
                You should consider a job in accounting or engineering.`}
        onBackClick={this.onISTJ_click}
      />
    );
  }

  renderISFJ() {
    return (
      <ISFJ
        title="Introvert | Sensing | Feeling | Judging"
        content={`You are a type ISFJ, aka The Defender.
                  You tend to be sympathetic and organized above all else.
                  You should consider a job in childcare or bookkeeping.`}
        onBackClick={this.onISFJ_click}
      />
    );
  }

  renderINFJ() {
    return (
      <INFJ
        title="Introvert | iNtuitive | Feeling | Judging"
        content={`You are a type INFJ, aka The Advocate.
                You tend to be sensitive and creative above all else.
                You should consider a job in education or the arts.`}
        onBackClick={this.onINFJ_click}
      />
    );
  }

  renderINTJ() {
    return (
      <INTJ
        title="Introvert | iNtuitive | Thinking | Judging"
        content={`You are a type INTJ, aka The Mastermind.
                      You tend to be decisive and insightful above all else.
                      You should consider a job in architecture or engineering.`}
        onBackClick={this.onINTJ_click}
      />
    );
  }

  renderISTP() {
    return (
      <ISTP
        title="Introvert | Sensing | Thinking | Perceiving"
        content={`You are a type ISTP, aka The Architect.
                  You tend to be analytical and practical above all else.
                  You should consider a job in computer technology or farming.`}
        onBackClick={this.onISTP_click}
      />
    );
  }

  renderISFP() {
    return (
      <ISFP
        title="Introvert | Sensing | Feeling | Perceiving"
        content={`You are a type ISFP, aka The Adventurer.
                  You tend to be charming and adaptable above all else.
                  You should consider a job in teaching or nursing.`}
        onBackClick={this.onISFP_click}
      />
    );
  }

  renderINFP() {
    return (
      <INFP
        title="Introvert | iNtuitive | Feeling | Perceiving"
        content={`You are a type INFP, aka The Mediator.
                  You tend to be empathetic and inquisitive above all else.
                  You should consider a job in writing or graphic design.`}
        onBackClick={this.onINFP_click}
      />
    );
  }

  renderINTP() {
    return (
      <INTP
        title="Introvert | iNtuitive | Thinking | Perceiving"
        content={`You are a type INTP, aka The Logician.
                  You tend to be curious and analytical above all else.
                  You should consider a job in architecture or construction.`}
        onBackClick={this.onINTP_click}
      />
    );
  }

  renderESTP() {
    return (
      <ESTP
        title="Extravert | Sensing | Thinking | Perceiving"
        content={`You are a type ESTP, aka The Entrepeneur.
                  You tend to be energetic and perceptive above all else.
                  You should consider a job in sales or forestry.`}
        onBackClick={this.onESTP_click}
      />
    );
  }

  renderESFP() {
    return (
      <ESFP
        title="Extravert | Sensing | Feeling | Perceiving"
        content={`You are a type ESFP, aka The Entertainer.
                  You tend to be enthusiastic and spontaneous above all else.
                  You should consider a job in hospitality or health care.`}
        onBackClick={this.onESFP_click}
      />
    );
  }

  renderENFP() {
    return (
      <ENFP
        title="Extravert | iNtuitive | Feeling | Perceiving"
        content={`You are a type ENFP, aka The Campaigner.
                  You tend to be imaginative and insightful above all else.
                  You should consider a job in therapy or acting.`}
        onBackClick={this.onENFP_click}
      />
    );
  }

  renderENTP() {
    return (
      <ENTP
        title="Extravert | iNtuitive | Thinking | Perceiving"
        content={`You are a type ENTP, aka The Debater.
                  You tend to be smart and curious above all else.
                  You should consider a job in business or sports.`}
        onBackClick={this.onENTP_click}
      />
    );
  }

  renderESTJ() {
    return (
      <ESTJ
        title="Extravert | Sensing | Thinking | Judging"
        content={`You are a type ESTJ, aka The Executive.
                  You tend to be logical and assertive above all else.
                  You should consider a job in leadership or law.`}
        onBackClick={this.onESTJ_click}
      />
    );
  }

  renderESFJ() {
    return (
      <ESFJ
        title="Extravert | Sensing | Feeling | Judging"
        content={`You are a type ESFJ, aka The Consul.
                  You tend to be sociable and caring above all else.
                  You should consider a job in childcare or healthcare.`}
        onBackClick={this.onESFJ_click}
      />
    );
  }

  renderENFJ() {
    return (
      <ENFJ
        title="Extravert | iNtuitive | Feeling | Judging"
        content={`You are a type ENFJ, aka The Protagonist.
                  You tend to be charismatic and inspiring above all else.
                  You should consider a job in teaching or the arts.`}
        onBackClick={this.onENFJ_click}
      />
    );
  }

  renderENTJ() {
    return (
      <ENTJ
        title="Extravert | iNtuitive | Thinking | Judging"
        content={`You are a type ENTJ, aka The Commander.
                  You tend to be organized and logical above all else.
                  You should consider a job in law or engineering.`}
        onBackClick={this.onENTJ_click}
      />
    );
  }

  render() {
    const { showISTJ } = this.state;
    const { showISFJ } = this.state;
    const { showINFJ } = this.state;
    const { showINTJ } = this.state;
    const { showISTP } = this.state;
    const { showISFP } = this.state;
    const { showINFP } = this.state;
    const { showINTP } = this.state;
    const { showESTP } = this.state;
    const { showESFP } = this.state;
    const { showENFP } = this.state;
    const { showENTP } = this.state;
    const { showESTJ } = this.state;
    const { showESFJ } = this.state;
    const { showENFJ } = this.state;
    const { showENTJ } = this.state;
    if (showISTJ) {
      return this.renderISTJ();
    }
    if (showISFJ) {
      return this.renderISFJ();
    }
    if (showINFJ) {
      return this.renderINFJ();
    }
    if (showINTJ) {
      return this.renderINTJ();
    }
    if (showISTP) {
      return this.renderISTP();
    }
    if (showISFP) {
      return this.renderISFP();
    }
    if (showINFP) {
      return this.renderINFP();
    }
    if (showINTP) {
      return this.renderINTP();
    }
    if (showESTP) {
      return this.renderESTP();
    }
    if (showESFP) {
      return this.renderESFP();
    }
    if (showENFP) {
      return this.renderENFP();
    }
    if (showENTP) {
      return this.renderENTP();
    }
    if (showESTJ) {
      return this.renderESTJ();
    }
    if (showESFJ) {
      return this.renderESFJ();
    }
    if (showENFJ) {
      return this.renderENFJ();
    }
    if (showENTJ) {
      return this.renderENTJ();
    }
    return (
      <Wrapper>
        <h1 className="display-3 title">Briggs Result</h1>
        <hr className="my-4" />
        <h2 className="display-6 resultTxt">{this.props.resultBriggs}</h2>
        <hr className="my-5" />
        <p className="lead">What does this result mean?</p>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onISTJ_click}>
            ISTJ
          </li>
          <li className="list-group-item" onClick={this.onISFJ_click}>
            ISFJ
          </li>
          <li className="list-group-item" onClick={this.onINFJ_click}>
            INFJ
          </li>
          <li className="list-group-item" onClick={this.onINTJ_click}>
            INTJ
          </li>
        </ul>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onISTP_click}>
            ISTP
          </li>
          <li className="list-group-item" onClick={this.onISFP_click}>
            ISFP
          </li>
          <li className="list-group-item" onClick={this.onINFP_click}>
            INFP
          </li>
          <li className="list-group-item" onClick={this.onINTP_click}>
            INTP
          </li>
        </ul>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onESTP_click}>
            ESTP
          </li>
          <li className="list-group-item" onClick={this.onESFP_click}>
            ESFP
          </li>
          <li className="list-group-item" onClick={this.onENFP_click}>
            ENFP
          </li>
          <li className="list-group-item" onClick={this.onENTP_click}>
            ENTP
          </li>
        </ul>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onESTJ_click}>
            ESTJ
          </li>
          <li className="list-group-item" onClick={this.onESFJ_click}>
            ESFJ
          </li>
          <li className="list-group-item" onClick={this.onENFJ_click}>
            ENFJ
          </li>
          <li className="list-group-item" onClick={this.onENTJ_click}>
            ENTJ
          </li>
        </ul>
      </Wrapper>
    );
  }

  onISTJ_click() {
    const { showISTJ } = this.state;
    this.setState({ showISTJ: !showISTJ });
  }

  onISFJ_click() {
    const { showISFJ } = this.state;
    this.setState({ showISFJ: !showISFJ });
  }

  onINFJ_click() {
    const { showINFJ } = this.state;
    this.setState({ showINFJ: !showINFJ });
  }

  onINTJ_click() {
    const { showINTJ } = this.state;
    this.setState({ showINTJ: !showINTJ });
  }

  onISTP_click() {
    const { showISTP } = this.state;
    this.setState({ showISTP: !showISTP });
  }

  onISFP_click() {
    const { showISFP } = this.state;
    this.setState({ showISFP: !showISFP });
  }

  onINFP_click() {
    const { showINFP } = this.state;
    this.setState({ showINFP: !showINFP });
  }

  onINTP_click() {
    const { showINTP } = this.state;
    this.setState({ showINTP: !showINTP });
  }

  onESTP_click() {
    const { showESTP } = this.state;
    this.setState({ showESTP: !showESTP });
  }

  onESFP_click() {
    const { showESFP } = this.state;
    this.setState({ showESFP: !showESFP });
  }

  onENFP_click() {
    const { showENFP } = this.state;
    this.setState({ showENFP: !showENFP });
  }

  onENTP_click() {
    const { showENTP } = this.state;
    this.setState({ showENTP: !showENTP });
  }

  onESTJ_click() {
    const { showESTJ } = this.state;
    this.setState({ showESTJ: !showESTJ });
  }

  onESFJ_click() {
    const { showESFJ } = this.state;
    this.setState({ showESFJ: !showESFJ });
  }

  onENFJ_click() {
    const { showENFJ } = this.state;
    this.setState({ showENFJ: !showENFJ });
  }

  onENTJ_click() {
    const { showENTJ } = this.state;
    this.setState({ showENTJ: !showENTJ });
  }
}

Briggs.PropTypes = {
  resultBriggs: PropTypes.string.isRequired,
};

export default Briggs;
