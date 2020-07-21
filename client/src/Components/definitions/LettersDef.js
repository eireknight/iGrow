import React from "react";
import styled from "styled-components";
import { CardDef } from "../utils/Cards";

const Wrapper = styled.div`
  position: fixed;
  min-height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LetterA = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>
      </CardDef>
    </Wrapper>
  );
};

const LetterB = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>
      </CardDef>
    </Wrapper>
  );
};

const LetterC = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>
      </CardDef>
    </Wrapper>
  );
};

const LetterD = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>
      </CardDef>
    </Wrapper>
  );
};

export { LetterA, LetterB, LetterC, LetterD };
