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
width: 500px;
  margin: 20px auto;
  padding: 15px 15px 5px 0px;
  font-weight: 550;
  font-size: 22px;
  background: linear-gradient(35deg, #ccffff, #ffcccc);
  text-align: center;
  border-radius: 20px;
  box-shadow: 0px 0px 2px 1px gray;
`;

function Links() {
    return (
        <Wrapper className="container">
            <ul>
            <h1>Helpful Links</h1>
            <a href="https://www.hiresuccess.com/help/understanding-the-4-personality-types"> The Letter Personality Types</a>
            <br></br>
            <a href="https://psychologia.co/personality-color/"> The Color Personality Types</a>
            <br></br>
            <a href="https://www.16personalities.com/personality-types"> The 16 Myers-Briggs Personality Types</a>
            <br></br>
            <a href="https://positivepsychology.com/introspection-self-reflection/"> Self Reflection Questionnaire</a>
            <br></br>
            <a href="https://bookriot.com/personal-development-books/"> Personal Growth Books</a>
            </ul>

            
        </Wrapper>
    );
};
export default Links;