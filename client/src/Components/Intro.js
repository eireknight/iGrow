import React from "react";
import styled from "styled-components";
import { StartBtn } from "./utils/Buttons";
import { IntroCard } from "./utils/Cards";
import { fonts, colors } from "./utils/_var";
import { media } from "./utils/_media-queries";

const Wrapper = styled.div`
  position: fixed;
  min-height: 85%;
  max-width: 100%;
  background: ${colors.$colorBg};
  h1 {
    position: relative;
    font-family: ${fonts.$titleFont};
    font-size: 1.1em;
    color: ${colors.$colorGold};
    text-align: center;
    padding-top: 2em;
    ${media.tablet`font-size: 1.5em; letter-spacing: 1.5px;`};
    ${media.laptop`font-size: 2em; letter-spacing: 2px;`};
  }
  .list-group {
    padding: 0 2em;
    .list-group-item {
      background: transparent;
      padding: 5;
      font-family: ${fonts.$latoFont};
      border: 0;
      margin-bottom: 0;
      color: ${colors.$colorGold};
      ${media.tablet`font-size: 1.3em`};
      text-align: center;
    }
  }
`;

const Intro = ({ title, _onStartClick }) => {
  return (
    <Wrapper className="container">
      <IntroCard>
        <div className="corner" />
        <div className="corner" />
        <div className="corner" />
        <div className="corner" />
        <h1>{title}</h1>
        <ul className="list-group">
          <li className="list-group-item">40 questions</li>
          <li className="list-group-item">Be Honest</li>
        </ul>
        <StartBtn onClick={_onStartClick}>
          <span>Ready?</span>
          <div className="icon">
            <i className="fa fa-arrow-right" />
          </div>
        </StartBtn>
      </IntroCard>
    </Wrapper>
  );
};

export default Intro;
