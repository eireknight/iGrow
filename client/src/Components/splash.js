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
  width: 1250px;
    margin: 20px auto;
    padding: 5px 15px;
    font-weight: 550;
    font-size: 22px;
    background: linear-gradient(35deg, #ccffff, #ffcccc);
    text-align: center;
    border-radius: 20px;
    box-shadow: 0px 0px 2px 1px gray;
`;

function Splash() {
    return (
       <Wrapper className="container">
       <div>
       <p>"The unexamined life is not worth living." – Socrates</p>
       <p>Many people have a vision of who they want to be, because they have a desire to work towards being better.</p>
       <p>It could be for jobs, relationships, children’s development, how they view themselves, anything.</p>
       <p>Many times life takes over, and these resolutions are created but quickly forgotten.  </p>  
       <p>So...why iGrow?</p>
       <p>This app is for exploring your personality, setting and keeping track of your goals, reflection, and personal growth.</p>
       <p>By examining our selves, personalities, and goals, we can attain the vision in our heads of who we want to be.</p>  
       </div>
       </Wrapper>
    );
};
export default Splash;