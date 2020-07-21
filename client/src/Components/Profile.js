
import React, { Component } from 'react';
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

class ProfilePage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: 'Patrick OBrien',
        biography: "INFJ",
        born: 1987,
        location: "Saint Augustine, FL",
        occupation: "Developer",
        goal: "Finn's Development"
      },
      quote: "Frodo: What are we even fighting for?  Sam: That there's some good left in this world Mr. Frodo, and it's worth fighting for.",
      image: 'https://www.facebook.com/photo.php?fbid=10218252916011215&set=a.3058569100111&type=3&theater'
    };
  }
  render() {
    return(
        <Wrapper>
            <div>
        <Profile person={this.state.person} quote={this.state.quote} />
        <Image src={this.state.image} />
      </div>
      </ Wrapper>
    );
  }
}

function Image(props){
    return (
      <div className="Image" style={{backgroundImage: 'url(' + props.src + ')'}}></div>
    ); 
}
function Profile(props){
  return (
      <div className="Profile">
        <h1 className="Name">{props.person.name}</h1>
        <p> Lives In {props.person.location}</p>
        <p>Born in {props.person.born}</p>
        <p className="Bio">Personality Type: {props.person.biography} </p>
        <p>Works as a {props.person.occupation}</p>
        <p>Favorite Quote is: "{props.quote}"</p>
        <p>Current Goal is: {props.person.goal}</p>
        
      </div>
    );
}

export default ProfilePage;