import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
min-height: 100%;
max-width: 100%;
display: flex;
justify-content: center;
text-align: center;
font-family: "K2D", sans-serif;
font-size: 22px;
font-style: italic;
background: linear-gradient(90deg, lightgreen, lightblue);
width: 650px;
  margin: 20px auto;
  padding: 15px 40px 5px 0px;
  font-weight: 550;
  font-size: 22px;
  background: linear-gradient(35deg, #ccffff, #ffcccc);
  text-align: center;
  border-radius: 20px;
  box-shadow: 0px 0px 2px 1px gray;
`;

function Snapshot() {
    return (
        <Wrapper className="container">
            <ul>
            <h1>Look How Far You've Come!</h1>
            <a href="/goal"> View Completed Goals</a>
            <br></br>
            <a href="/tasks"> View Completed Tasks</a>
            <br></br>
            </ul>
        </Wrapper>
    );
};
export default Snapshot;